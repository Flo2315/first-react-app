import React, { Component } from 'react';
import Header from '../../Header';
import ItemVelib from './ItemVelib';
import './Velib.scss';
import axios from 'axios';

class Velib extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'status': 'all',
      'searchType': 'all',
      'search': '',
      'bonus': 'all',
      'banking': 'all',
      'formClassAffix': '',
      'loader': ''
    };

    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeBonus = this.handleChangeBonus.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeBanking = this.handleChangeBanking.bind(this);
    this.handleChangeSearchType = this.handleChangeSearchType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  ajax(){
    this.showLoader();

    let filterStatus = "";
    switch(this.state.status) {
      case 'OPEN':
          filterStatus = "&refine.status=OPEN"
          break;
      case 'CLOSED':
          filterStatus = "&refine.status=CLOSED"
          break;
      default:
          filterStatus = ""
    }
    let filterBonus = "";
    switch(this.state.bonus) {
      case 'True':
          filterBonus = "&refine.bonus=True"
          break;
      case 'False':
          filterBonus = "&refine.bonus=False"
          break;
      default:
          filterBonus = ""
    }
    let filterBanking = "";
    switch(this.state.banking) {
      case 'True':
          filterBanking = "&refine.banking=True"
          break;
      case 'False':
          filterBanking = "&refine.banking=False"
          break;
      default:
          filterBanking = ""
    }
    let filterSearch = "";
    if(this.state.search !== ""){
      filterSearch = "&q="+this.state.search;
    }

    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=stations-velib-disponibilites-en-temps-reel&rows=200&refine.contract_name=Paris&sort=last_update${filterSearch}${filterStatus}${filterBonus}${filterBanking}`)
      .then(res => {
        const velibs = res.data.records.map(obj => obj.fields);

        // let arrayVelib = [];
        // let filterSearchType = this.state.searchType;
        // velibs.map(function(item){
        //   switch(filterSearchType) {
        //     case 'all':
        //       if(item.available_bikes > 0 || item.available_bike_stands > 0){
        //         arrayVelib.push(item);
        //       }
        //       break;
        //     case 'bikeAvailable':
        //       if(item.available_bikes > 1){
        //         arrayVelib.push(item);
        //       }
        //       break;
        //     case 'availableBikeStands':
        //       if(item.available_bike_stands > 1){
        //         arrayVelib.push(item);
        //       }
        //       break;
        //     default:
        //       arrayVelib.push(item);
        //   }
        // });

        this.hideLoader();

        this.setState({
          'velibs': velibs,
          'resultCount': velibs.length,
          'formClassAffix': 'affix'
         });
      });
  }

  showLoader(){
    this.setState({
      'loader': 'show'
     });
  }
  hideLoader(){
    this.setState({
      'loader': ''
     });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.ajax();
  }
  handleChangeSearch(event) {
    this.setState({search: event.target.value});
  }
  handleChangeStatus(event) {
    this.setState({status: event.target.value});
  }
  handleChangeBonus(event) {
    this.setState({bonus: event.target.value});
  }
  handleChangeBanking(event) {
    this.setState({banking: event.target.value});
  }
  handleChangeSearchType(event) {
    this.setState({searchType: event.target.value});
  }

  renderLoader(){
    return (
      <div className={"loader "+this.state.loader}>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    );
  }

  renderNumberStation(){
    if (this.state.resultCount !== undefined) {
      return (
        <div className="nb-station">
          Nombre de résultat(s) { this.state.resultCount }
        </div>
      );
    }
  }

  renderFormSearch(){
    return (
      <form className={"velibForm "+this.state.formClassAffix} onSubmit={this.handleSubmit}>
        <div className="col">
          <label>Je cherche</label>
          <select onChange={this.handleChangeSearchType}>
            <option value="all">une place ou un vélib</option>
            <option value="bikeAvailable">un vélib</option>
            <option value="availableBikeStands">une place pour garer mon vélib</option>
          </select>
        </div>

        <div className="col">
          <label>Ou ?</label>
            <input type="text" value={this.state.search} onChange={this.handleChangeSearch} placeholder="Recherche Adresse / Code Postal / Lieu" />
        </div>
        <div className="col">
          <label>Station avec bonus</label>
          <select onChange={this.handleChangeBonus}>
            <option value="all">Toutes</option>
            <option value="True">Avec</option>
            <option value="False">Sans</option>
          </select>
        </div>
        <div className="col">
          <label>Station avec carte bancaire</label>
          <select onChange={this.handleChangeBanking}>
            <option value="all">Toutes</option>
            <option value="True">Avec</option>
            <option value="False">Sans</option>
          </select>
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
