import React, { Component } from 'react';
import './ItemAutolib.scss';

class ItemAutolib extends Component {

  render() {
    const details = this.props.details;
    return (
      <div className="velib-station ">
        <div className="velib-station-content">
          Ville : {details.ville} <br />
          Adresse : {details.adresse} / {details.cp} <br />
          {details.prises_tiers_t3 &&
            <div>prises_tiers_t3 : { details.prises_tiers_t3 }</div>
          }
          prises_autolib : {details.prises_autolib} <br />
          type : {details.type} <br />

        </div>
      </div>
    );
  }
}

ItemAutolib.defaultProps = {
  details: '',
};

ItemAutolib.propTypes = {
  details: React.PropTypes.shape({}),
};

export default ItemAutolib;
