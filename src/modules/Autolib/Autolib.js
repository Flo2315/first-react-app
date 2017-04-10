import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import ItemAutolib from './ItemAutolib';
import './Autolib.scss';

class Autolib extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      formClassAffix: '',
      loader: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ajax() {
    this.showLoader();

    let filterSearch = '';
    if (this.state.search !== '') {
      filterSearch = `&q=${this.state.search}`;
    }

    axios.get(`https://opendata.paris.fr/api/records/1.0/search/?dataset=stations_et_espaces_autolib_de_la_metropole_parisienne&rows=50&facet=ville${filterSearch}`)
      .then((res) => {
        const autolibs = res.data.records.map(obj => obj.fields);

        this.hideLoader();
        this.setState({
          autolibs,
          resultCount: autolibs.length,
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
  renderFormSearch() {
    return (
      <form className={`autolibForm ${this.state.formClassAffix}`} onSubmit={this.handleSubmit}>
        <div className="col">
          <label htmlFor="idWhereAutolib">Ou ?</label>
          <input type="text" id="idWhereAutolib" value={this.state.search} onChange={this.handleChangeSearch} placeholder="Recherche Adresse / Code Postal / Lieu" />
        </div>
        <input type="submit" value="Rechercher" />
      </form>
    );
  }
  render() {
    return (
      <div className="AppAutolib">
        <Header />
        <div className="container-autolib">
          { this.renderFormSearch() }
          <div className="autolib-station-list-wrapper">
            <div className="autolib-station-list">
              {this.state.autolibs && this.state.autolibs.map(item =>
                <ItemAutolib key={item.id_dsp} details={item} />
              )}
            </div>
          </div>
          { this.renderLoader() }
        </div>
      </div>
    );
  }
}

export default Autolib;
