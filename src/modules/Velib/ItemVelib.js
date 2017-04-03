import React, { Component } from 'react';
import Moment from 'moment';
import './ItemVelib.scss';

class ItemVelib extends Component {

  static checkBikeAvailable(bikeAvailable) {
    let bikeMany = '';
    if (bikeAvailable === 0) {
      bikeMany = 'low';
    } else if (bikeAvailable <= 10) {
      bikeMany = 'medium';
    } else {
      bikeMany = 'high';
    }
    return bikeMany;
  }

  static checkAvailableBikeStands(availableBikeStands) {
    let bikeStandsMany = '';
    if (availableBikeStands === 0) {
      bikeStandsMany = 'low';
    } else if (availableBikeStands <= 10) {
      bikeStandsMany = 'medium';
    } else {
      bikeStandsMany = 'high';
    }
    return bikeStandsMany;
  }

  render() {
    const details = this.props.details;
    return (
      <div className="velib-station">
        <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="max_point"/>
            <circle cx="50" cy="50" r="45" className="circle green" data-point={details.available_bikes}/>
          </svg>
          <div className="velib-station-content">
            <div className="velib-station-name">
              {details.name}
            </div>
            <div className="velib-station-address">
              {details.address}
            </div>
            <div className="velib-station-stands-container">
            </div>
            {(details.bonus === 'True') ?
              <div className="velib-station-bonus">
                <span className="text">Bonus temps</span>
              </div>
              :
              <span>&nbsp;</span>
            }
            <div className="velib-station-footer">
              <div className="velib-station-update">
                <span>Mise à jour le {Moment(details.last_update).format('DD/MM/YYYY à HH:mm:ss')}</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

ItemVelib.defaultProps = {
  details: '',
};

ItemVelib.propTypes = {
  details: React.PropTypes.shape({}),
};


export default ItemVelib;