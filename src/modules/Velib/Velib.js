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
    if (this.state.resultCount !== undefined) {
      return (
        <div className="nb-station">
          Nombre de résultat(s) { this.state.resultCount }
        </div>
      );
    }
  }

  renderFormSearch() {
    return (
      <form className={`velibForm ${this.state.formClassAffix}`} onSubmit={this.handleSubmit}>
        <div className="col">
          <span>Je cherche</span>
          <div className="radio">
            <label htmlFor="idSearchVelib">
              <input type="radio" id="idSearchVelib" name="searchType" value="bike" checked={this.state.searchType === 'bike'} onChange={this.handleChangeSearchType} />
              Un velib
            </label>
          </div>
          <div className="radio">
            <label htmlFor="idSearchPlace">
              <input type="radio" id="idSearchPlace" name="searchType" value="place" checked={this.state.searchType === 'place'} onChange={this.handleChangeSearchType} />
              Une place
            </label>
          </div>
        </div>
        <div className="col">
          <label htmlFor="idWhere">Ou ?</label>
          <input type="text" id="idWhere" value={this.state.search} onChange={this.handleChangeSearch} placeholder="Recherche Adresse / Code Postal / Lieu" />
        </div>
        <input type="submit" value="Rechercher" />
      </form>
    );
  }

  render() {
    return (
      <div className="AppVelib">
        <Header />
        <div className="container-velib">
          { this.renderFormSearch() }
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

export default Velib;
