import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import ItemVelib from './ItemVelib';
import './Velib.scss';

class Velib extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchType: 'bike',
      search: '',
      formClassAffix: '',
      loader: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeSearchType = this.handleChangeSearchType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  ajax() {
    this.showLoader();

    let filterSearch = '';
    if (this.state.search !== '') {
      filterSearch = `&q=${this.state.search}`;
    }

    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&rows=200&refine.contract_name=Paris&sort=last_update${filterSearch}`)
      .then((res) => {
        const velibs = res.data.records.map(obj => obj.fields);
        const arrayVelib = [];

        velibs.forEach((item) => {
          switch (this.state.searchType) {
            case 'bike':
              if (item.available_bikes > 0) {
                arrayVelib.push(item);
              }
              break;
            case 'place':
              if (item.available_bike_stands > 0) {
                arrayVelib.push(item);
              }
              break;
            default:
          }
        });

        this.hideLoader();
        this.setState({
          velibs: arrayVelib,
          resultCount: arrayVelib.length,
          formClassAffix: 'affix',
        });
      });
  }

  showLoader() {
    this.setState({ loader: 'show' });
  }
  hideLoader() {
    this.setState({ loader: '' });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.ajax();
  }
  handleChangeSearch(event) {
    this.setState({ search: event.target.value });
  }
  handleChangeStatus(event) {
    this.setState({ status: event.target.value });
  }
  handleChangeSearchType(event) {
    this.setState({ searchType: event.target.value });
  }

  renderLoader() {
    return (
      <div className={`loader ${this.state.loader}`}>
        <div className="spinner">
          <div className="rect1">&nbsp;</div>
          <div className="rect2">&nbsp;</div>
          <div className="rect3">&nbsp;</div>
          <div className="rect4">&nbsp;</div>
          <div className="rect5">&nbsp;</div>
        </div>
      </div>
    );
  }

  renderNumberStation() {
    return (
      <div>
        {this.state.resultCount !== undefined &&
          <div className="nb-station">Nombre de résultat(s) { this.state.resultCount }</div>
        }
      </div>
    );
  }

  renderFormSearch() {
    return (
      <form className={`velibForm ${this.state.formClassAffix}`} onSubmit={this.handleSubmit}>
        <span className="close_search">
          <svg viewBox="0 0 78.5 78.4">
            <path d="M64.7,47.7c-4.7-4.7-4.7-12.3,0-17l10.2-10.2c4.7-4.7,4.7-12.3,0-17s-12.3-4.7-17,0L47.7,13.7c-4.7,4.7-12.3,4.7-17,0 L20.5,3.5c-4.7-4.7-12.3-4.7-17,0s-4.7,12.3,0,17l10.2,10.2c4.7,4.7,4.7,12.3,0,17L3.5,57.9c-4.7,4.7-4.7,12.3,0,17 c4.7,4.7,12.3,4.7,17,0l10.2-10.2c4.7-4.7,12.3-4.7,17,0l10.2,10.2c4.7,4.7,12.3,4.7,17,0c4.7-4.7,4.7-12.3,0-17L64.7,47.7z"/>
          </svg>
         </span>
        <div className="row">
          <div className="col">
            <div className="radio roll">
              <input type="radio" id="idSearchVelib" name="searchType" value="bike" checked={this.state.searchType === 'bike'} onChange={this.handleChangeSearchType} />
              <label htmlFor="idSearchVelib"><span>un velib</span></label>
              <span className="button_bg">
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
              </span>
            </div>
            <div className="search roll">
              <input type="text" id="idWhere" value={this.state.search} onChange={this.handleChangeSearch} placeholder="adresse" />
              <span className="button_bg">
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
              </span>
            </div>
            <div className="radio roll">
              <input type="radio" id="idSearchPlace" name="searchType" value="place" checked={this.state.searchType === 'place'} onChange={this.handleChangeSearchType} />
              <label htmlFor="idSearchPlace"><span>une place</span></label>
              <span className="button_bg">
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                  <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
              </span>
            </div>
          </div>
        </div>
        <button className="btn_search"><span>Rechercher</span></button>
      </form>
    );
  }

  render() {
    return (
      <div className="AppVelib">
        <Header />
        <div className="container-velib">
          { this.renderFormSearch() }
          <div className="filter">
            <svg version="1.1" viewBox="0 0 79.2 89.6">
            	<path d="M75.4,41.1h-6.3c-1.6-6.4-7.6-11.3-14.5-11.3s-12.8,4.8-14.5,11.3H3.8c-2.1,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7h36.4
            		c1.6,6.4,7.6,11.3,14.4,11.3S67.4,55,69.1,48.5h6.3c2.1,0,3.7-1.6,3.7-3.7S77.4,41.1,75.4,41.1z M54.6,53.7c-4.9,0-8.9-4-8.9-8.9
            		s4-8.9,8.9-8.9s8.9,4,8.9,8.9S59.6,53.7,54.6,53.7z"/>
            	<path d="M3.8,18.7h6.6C12,25.1,18,30,24.9,30c6.9,0,12.8-4.8,14.5-11.3h36.1c2.1,0,3.7-1.6,3.7-3.7c0-2.1-1.6-3.7-3.7-3.7H39.3
            		C37.7,4.9,31.7,0,24.8,0C17.9,0,12,4.7,10.4,11.3H3.8c-2.1,0-3.7,1.6-3.7,3.7C0.1,17.1,1.8,18.7,3.8,18.7z M24.8,6.1
            		c4.9,0,8.9,4,8.9,8.9c0,4.9-4,8.9-8.9,8.9c-4.9,0-8.9-4-8.9-8.9C15.9,10.1,19.9,6.1,24.8,6.1z"/>
            	<path d="M75.4,70.9H39.3c-1.6-6.4-7.6-11.3-14.5-11.3c-6.9,0-12.8,4.8-14.5,11.3H3.7c-2.1,0-3.7,1.6-3.7,3.7s1.6,3.7,3.7,3.7h6.6
            		c1.6,6.4,7.6,11.3,14.5,11.3c6.9,0,12.8-4.8,14.5-11.3h36.1c2.1,0,3.7-1.6,3.7-3.7S77.4,70.9,75.4,70.9z M24.8,83.5
            		c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c4.9,0,8.9,4,8.9,8.9S29.8,83.5,24.8,83.5z"/>
            </svg>
            </div>
          { this.renderNumberStation() }
          <div className="velib-station-list-wrapper">
            <div className="velib-station-list">
              {this.state.velibs && this.state.velibs.map(item =>
                <ItemVelib key={item.number} details={item} />
              )}
            </div>
          </div>
          { this.renderLoader() }
        </div>
      </div>
    );
  }
}

jQuery(document).ready(function() {
    function animateButton() {
        var a = jQuery(".roll ");
        a.each(function() {
            var b = jQuery(this),
                c = jQuery(this).find(".blob");
            b.on({
                mousemove: function(a) {
                    var d = .6 * (a.pageX - b.offset().left - b.width() / 2)
                      , e = .6 * (a.pageY - b.offset().top - b.height() / 2);
                    TweenLite.to(c.eq(1), 4.2, {
                        x: d,
                        y: e,
                        ease: Elastic.easeOut.config(1, .1)
                    }),
                    TweenLite.to(c.eq(2), 2.8, {
                        x: d,
                        y: -e,
                        ease: Elastic.easeOut.config(1, .1)
                    }),
                    TweenLite.to(c.eq(3), 2.8, {
                        x: -d,
                        y: -e,
                        ease: Elastic.easeOut.config(1, .1)
                    })
                },
                mouseleave: function(b) {
                    TweenLite.to(a.find(".blob"), 1.2, {
                        x: "0%",
                        y: "0%",
                        ease: Elastic.easeOut.config(1, .2)
                    }, "-=1.1")
                }
            })
        })
    };
    animateButton();

    jQuery(document).on('click', '.close_search', function(){

      jQuery('.velibForm').toggleClass('active');
    });

    jQuery(document).on('click', '.filter', function(){

      jQuery('.velibForm').toggleClass('active');

      if(jQuery('.filter').hasClass('hidden')){

        jQuery(this).removeClass('hidden');
      } else {

        jQuery(this).addClass('hidden');
      }
    });

    jQuery(document).on('click', '.btn_search', function(){

      jQuery('.velibForm').toggleClass('active');
    });


    //I get the value of data-point
    let numberOfPoint = jQuery(".velib-station-bike-available").attr("data-point");

    //I multiplied by 0.65 (ul = 650px | 1 pixel = 0.65point)
    let numberOfPointPx = numberOfPoint * 0.65;

    TweenMax.staggerTo(".point", 1,{
      width: numberOfPointPx
    }, 0.5);
});

export default Velib;
