import React, { Component } from 'react';
import Moment from 'moment';
import './ItemVelib.scss';

class ItemVelib extends Component {

  checkBikeAvailable(bikeAvailable){
    let bikeMany = "";
    if(bikeAvailable === 0){
      bikeMany = "low";
    }else if(bikeAvailable <= 10){
      bikeMany = "medium";
    }else{
      bikeMany = "high";
    }
    return bikeMany;
  }

  checkAvailableBikeStands(availableBikeStands){
    let bikeStandsMany = "";
    if(availableBikeStands === 0){
      bikeStandsMany = "low";
    }else if(availableBikeStands <= 10){
      bikeStandsMany = "medium";
    }else{
      bikeStandsMany = "high";
    }
    return bikeStandsMany;
  }

  render() {
    // console.log(Moment.locale());
    const details = this.props.details;
    return (
      <div className="velib-station ">
        <div className="velib-station-content">
          <div className="velib-station-name">
            {details.name} / <span className={"velib-station-header " + (details.status === 'OPEN' ? 'open' : 'closed')}>{(details.status === 'OPEN') ? 'ouverte' : 'fermé'}</span>
          </div>
          <div className="velib-station-address">
            {details.address}
          </div>

          <div className="velib-station-stands-container">
            <div className="velib-station-stands">
              <div className="picto">
                <svg x="0px" y="0px" viewBox="0 0 100 125">
                  <path d="M74.748,12.751C68.137,6.14,59.348,2.5,49.999,2.5c-9.351,0-18.138,3.64-24.749,10.251  c-6.61,6.61-10.252,15.399-10.252,24.748c0,6.322,1.462,11.619,4.596,16.67c2.77,4.463,6.485,8.147,10.417,12.049  c7.251,7.199,15.47,15.354,18.974,30.476c0.109,0.472,0.53,0.807,1.014,0.807c0.483,0,0.904-0.335,1.015-0.807  c3.502-15.121,11.725-23.276,18.979-30.479c3.93-3.898,7.645-7.586,10.41-12.049c3.139-5.051,4.6-10.348,4.6-16.67  C85,28.151,81.355,19.361,74.748,12.751z M49.999,64.77c-15.037,0-27.27-12.231-27.27-27.271c0-15.035,12.233-27.269,27.27-27.269  c15.037,0,27.269,12.234,27.269,27.269C77.268,52.535,65.035,64.77,49.999,64.77z"/><path d="M59.985,32.859c-1.134,0-2.253,0.297-3.238,0.859l-0.095,0.055l0.69,0.854l0.068-0.036c0.787-0.422,1.68-0.647,2.571-0.647  c3.013,0,5.456,2.447,5.456,5.458c0,3.005-2.443,5.454-5.456,5.454c-2.414,0-4.569-1.621-5.237-3.945l-0.021-0.073l-1.104,0.097  l0.027,0.105c0.751,2.888,3.354,4.903,6.334,4.903c3.605,0,6.545-2.935,6.545-6.542C66.53,35.792,63.593,32.859,59.985,32.859z"/><path d="M43.928,34.159l-0.096-0.071l-0.438,1.034l0.058,0.043c1.285,1.046,2.019,2.587,2.019,4.239  c0,3.005-2.445,5.454-5.453,5.454c-3.009,0-5.456-2.448-5.456-5.454c0-3.011,2.447-5.458,5.456-5.458  c0.547,0,1.088,0.082,1.604,0.243l0.083,0.023l0.423-1.001l-0.097-0.031c-0.652-0.213-1.328-0.32-2.014-0.32  c-3.609,0-6.544,2.933-6.544,6.544c0,3.607,2.935,6.542,6.544,6.542c3.609,0,6.542-2.935,6.542-6.542  C46.56,37.322,45.603,35.41,43.928,34.159z"/><path d="M53.481,28.694c0.12,0.119,0.234,0.193,0.425,0.193c0.056,0,0.113-0.008,0.212-0.018c0.217-0.021,0.648-0.056,1.309-0.036  c0.854,0.028,1.14,0.198,1.33,0.309c0.119,0.069,0.238,0.14,0.41,0.149l0.074,0.002c0.276,0,1.381-0.157,1.575-0.333  c0.116-0.104,0.168-0.262,0.144-0.421c-0.039-0.234-0.234-0.441-0.666-0.64c-0.276-0.049-0.813-0.076-1.599-0.076  c-1.11,0-2.331,0.05-2.478,0.057c-0.293,0.016-0.604,0.165-0.739,0.351c-0.085,0.117-0.108,0.248-0.063,0.369L53.481,28.694z"/><path d="M53.452,39.034l1.098-0.101l0.01-0.078c0.107-1.091,0.543-2.116,1.254-2.96l0.049-0.059l-0.689-0.855l-0.074,0.082  c-0.963,1.086-1.528,2.419-1.631,3.86L53.452,39.034z"/><path d="M60.488,39.613c0.076-0.187,0.048-0.397-0.077-0.556l-5.354-6.593l1.036-2.702c0.053-0.135,0.049-0.283-0.008-0.415  c-0.063-0.134-0.168-0.234-0.309-0.288c-0.063-0.022-0.128-0.037-0.189-0.037c-0.225,0-0.432,0.142-0.508,0.352l-0.964,2.504  l-8.894-2.132l0.66-1.568c0.12-0.274-0.012-0.593-0.286-0.713c-0.009-0.002-0.014-0.002-0.021-0.005l0.027-0.036H42.88  c-0.97,0.005-1.759,0.745-1.759,1.646c0,0.901,0.789,1.641,1.759,1.648h0.195v-0.685l-0.192-0.002  c-0.591-0.005-1.077-0.435-1.077-0.961c0-0.523,0.486-0.956,1.152-0.96h1.771l-3.697,8.74c-0.279,0.465-1.115,1.757-1.625,2.102  c-0.118,0.082-0.198,0.207-0.226,0.351c-0.026,0.14,0.003,0.286,0.085,0.406c0.101,0.149,0.269,0.238,0.449,0.238  c0.109,0,0.215-0.035,0.305-0.095c0.813-0.555,1.848-2.28,1.995-2.538l2.175-5.136l5.754,6.948  c-0.125,0.239-0.188,0.507-0.188,0.777c0,0.035,0,0.066,0.003,0.101l-1.556,0.557v1.137h0.992v-0.753l0.746-0.272  c0.289,0.565,0.87,0.924,1.507,0.924c0.682,0,1.282-0.395,1.555-1.017l7.027-0.637C60.235,39.923,60.411,39.799,60.488,39.613z   M51.452,38.208c-0.25,0-0.49,0.055-0.718,0.16l-5.972-7.209l0.184-0.361l8.778,2.103l-2.04,5.324  C51.608,38.213,51.532,38.208,51.452,38.208z M53.093,39.479c-0.072-0.286-0.227-0.55-0.437-0.763l1.95-5.078l4.313,5.313  L53.093,39.479z"/>
                </svg>
              </div>
              <span className="value">{details.bike_stands}</span>
              <span className="text">Nombre de places totals</span>
            </div>

            <div className={"velib-station-bike-stands " + this.checkAvailableBikeStands(details.available_bike_stands)}>
              <div className="picto">
                <svg x="0px" y="0px" viewBox="0 0 50.4 63">
                	<path d="M41.552,20.571c-1.348,0-2.621,0.311-3.764,0.851l-1.786-2.707c-0.003-0.005-0.011-0.008-0.014-0.013l1.896-3.78   c0.164-0.326,0.146-0.713-0.045-1.023c-0.191-0.309-0.529-0.499-0.894-0.499h-4.719c-0.58,0-1.052,0.471-1.052,1.052   c0,0.581,0.472,1.052,1.052,1.052h3.017l-0.973,1.93H23.394c-0.052-0.064-0.104-0.129-0.167-0.178l1.12-2.363   c0.154-0.325,0.131-0.708-0.062-1.012c-0.192-0.305-0.528-0.49-0.888-0.49h-5.661c-0.581,0-1.052,0.47-1.052,1.052   c0,0.581,0.471,1.052,1.052,1.052h4l-2.67,5.634c-0.894-0.309-1.849-0.482-2.845-0.482c-0.915,0-1.796,0.144-2.625,0.408   c-1.112-1.271-2.728-2.091-4.544-2.091H2.104v-2.795c0-0.582-0.47-1.052-1.052-1.052C0.471,15.116,0,15.586,0,16.168v21.115   c0,0.581,0.471,1.052,1.052,1.052c0.582,0,1.052-0.471,1.052-1.052v-6.19h5.541c0.772,4.029,4.323,7.086,8.577,7.086   c4.85,0,8.798-3.917,8.798-8.731c0-3.108-1.623-5.839-4.062-7.404l1.228-2.587c0.007,0.003,0.017,0.003,0.025,0.006l6.296,10.093   c0.192,0.307,0.529,0.494,0.892,0.494h3.393c0.379,4.504,4.161,8.057,8.762,8.057c4.816,0,8.737-3.948,8.737-8.799   C50.289,24.491,46.368,20.571,41.552,20.571z M12.691,25.028c0,1.84-1.381,3.352-3.156,3.59c0.245-2.012,1.329-3.764,2.919-4.844   C12.599,24.168,12.691,24.586,12.691,25.028z M2.104,21.39h6.948c0.85,0,1.622,0.305,2.243,0.796   c-2.098,1.448-3.536,3.792-3.771,6.481H2.104V21.39z M23.054,29.447c0,3.734-3.066,6.77-6.833,6.77   c-3.185,0-5.846-2.217-6.563-5.185c3.056-0.31,5.458-2.866,5.458-6.004c0-0.785-0.161-1.53-0.434-2.219   c0.496-0.117,1.008-0.194,1.539-0.194c0.695,0,1.353,0.134,1.985,0.329l-2.8,5.908c-0.25,0.525-0.025,1.151,0.499,1.4   c0.145,0.069,0.298,0.102,0.45,0.102c0.393,0,0.771-0.223,0.949-0.601l2.802-5.914C21.883,25.074,23.054,27.124,23.054,29.447z    M36.002,22.536c-1.646,1.332-2.787,3.241-3.132,5.41h-1.504l3.537-7.073L36.002,22.536z M37.107,24.21l2.465,3.736h-4.715   C35.166,26.46,35.986,25.169,37.107,24.21z M24.737,19.538h8.483l-3.774,7.55L24.737,19.538z M41.552,36.135   c-3.512,0-6.381-2.673-6.757-6.085h6.73c0.387,0,0.742-0.212,0.925-0.554c0.184-0.34,0.164-0.753-0.047-1.076l-3.523-5.34   c0.822-0.346,1.725-0.54,2.672-0.54c3.732,0,6.772,3.036,6.772,6.768C48.324,33.07,45.284,36.135,41.552,36.135z"/>
                </svg>
              </div>
              <span className="value">{details.available_bike_stands}</span>
              <span className="text">Nombre de places libre</span>
            </div>

            <div className={"velib-station-bike-available " + this.checkBikeAvailable(details.available_bikes)}>
              <div className="picto">
                <svg x="0px" y="0px" viewBox="0 0 64 80">
                	<g>
                		<path d="M13.228,50.443c-6.651,0-12.062-5.411-12.062-12.063c0-6.651,5.411-12.062,12.062-12.062S25.29,31.73,25.29,38.381   C25.29,45.032,19.879,50.443,13.228,50.443z M13.228,28.319c-5.548,0-10.062,4.514-10.062,10.062   c0,5.549,4.514,10.063,10.062,10.063S23.29,43.93,23.29,38.381C23.29,32.833,18.776,28.319,13.228,28.319z"/><path d="M50.771,50.443c-6.65,0-12.062-5.411-12.062-12.063c0-6.651,5.411-12.062,12.062-12.062   c6.651,0,12.063,5.411,12.063,12.062C62.834,45.032,57.423,50.443,50.771,50.443z M50.771,28.319   c-5.548,0-10.062,4.514-10.062,10.062c0,5.549,4.514,10.063,10.062,10.063c5.549,0,10.063-4.514,10.063-10.063   C60.834,32.833,56.32,28.319,50.771,28.319z"/><rect x="13.964" y="18.653" width="7.997" height="2"/><path d="M12.229,37.792c-0.006-0.147-0.122-3.643,3.333-7.302c3.487-3.693,11.308-8.142,28.762-8.364l0.025,2   c-16.663,0.211-24.022,4.284-27.262,7.662c-2.911,3.036-2.863,5.806-2.86,5.922L12.229,37.792z"/><path d="M37.929,20.256c-0.246,0-0.421-0.005-0.496-0.009l0.08-1.998c1.508,0.058,3.947-0.19,4.689-0.927   c0.145-0.144,0.172-0.258,0.167-0.386c-0.001-0.044-0.004-0.136-0.158-0.281c-0.922-0.865-4.208-1.16-6.24-1.092l-0.066-1.999   c0.957-0.031,5.827-0.101,7.675,1.632c0.497,0.466,0.77,1.047,0.79,1.678c0.021,0.709-0.241,1.355-0.76,1.869   C42.229,20.11,39.169,20.256,37.929,20.256z"/><rect x="13.449" y="26.852" transform="matrix(0.5349 0.8449 -0.8449 0.5349 34.2999 -6.6086)" width="19.408" height="2"/><path d="M34.449,36.841l-1.227-1.58c0.085-0.065,8.513-6.667,9.972-12.423c0.448-1.768,0.171-3.202-0.851-4.387l1.516-1.306   c1.457,1.691,1.886,3.772,1.274,6.184C43.505,29.752,34.818,36.555,34.449,36.841z"/><rect x="39.494" y="29.598" transform="matrix(0.3596 0.9331 -0.9331 0.3596 58.7507 -24.4056)" width="15.323" height="2.001"/><path d="M31.088,45.338c-3.09,0-5.604-2.514-5.604-5.604s2.514-5.604,5.604-5.604s5.604,2.515,5.604,5.604   S34.178,45.338,31.088,45.338z M31.088,36.13c-1.987,0-3.604,1.617-3.604,3.604s1.617,3.604,3.604,3.604s3.604-1.616,3.604-3.604   S33.075,36.13,31.088,36.13z"/><circle cx="50.771" cy="38.381" r="1.689"/><circle cx="13.228" cy="38.381" r="1.689"/>
                	</g>
                </svg>
              </div>
              <span className="value">{details.available_bikes}</span>
              <span className="text">Vélo(s) disponible(s)</span>
            </div>
          </div>


          {(details.bonus === 'True') ?
            <div className="velib-station-bonus">
              <div className="picto">
                <svg x="0px" y="0px" viewBox="0 0 100 125">
                	<path d="M28.5,32.3C28.5,32.3,28.5,32.2,28.5,32.3L28.5,32.3L28.5,32.3c0-0.2,0-0.3,0-0.4l1-15.9c0-0.1,0-0.1,0-0.2l0,0l0,0  c0.2-1.3,1.3-2.3,2.6-2.3c1.4,0,2.5,1,2.6,2.4l0,0l0.9,14.4c0,0.4,0.2,0.8,0.5,1.2l6.4,7.7c0,0,0.1,0.1,0.1,0.1l0,0l0,0  c0.8,1,0.7,2.5-0.2,3.4c-1,1-2.5,1-3.5,0.1l0,0L30,35.4c-0.2-0.1-0.3-0.3-0.5-0.4C28.8,34.3,28.5,33.3,28.5,32.3  C28.5,32.3,28.5,32.3,28.5,32.3z M51.2,55.5c-0.2-0.3-0.5-0.6-0.7-0.9c-1.3-2-2.2-4.1-2.8-6.3c-4,3.7-9.4,6-15.3,6  C20,54.3,9.9,44.2,9.9,31.8C9.9,19.3,20,9.2,32.4,9.2c9.9,0,18.3,6.4,21.3,15.3c1.8-1.9,4-3.5,6.5-4.8C55.6,9,44.8,1.4,32.4,1.4  C15.7,1.4,2,15,2,31.8c0,16.7,13.6,30.3,30.3,30.3C39.5,62.1,46,59.6,51.2,55.5z M83.7,87.1c4.1-1.2,7.6-3.5,10.3-6.8  c7.4-9.2,4.3-22.6-6.4-28.3c-3.4-1.8-6.9-3.1-10.5-4.6c-2-0.8-4-1.8-5.7-3.1c-3.4-2.7-2.8-7.1,1.1-8.9c1.1-0.5,2.3-0.7,3.5-0.8  c4.6-0.3,9,0.5,13.2,2.4c2.1,1,2.8,0.6,3.4-1.5c0.7-2.3,1.3-4.6,1.9-6.9c0.4-1.6-0.1-2.6-1.6-3.2c-2.7-1.1-5.4-1.9-8.3-2.3  c-3.8-0.5-3.8-0.5-3.8-4.3c-0.1-5.3-0.1-5.3-5.4-5.3c-0.8,0-1.6,0-2.3,0c-2.5,0.1-2.9,0.5-2.9,3.1c0,1.1,0,2.3,0,3.4  c0,3.3,0,3.3-3.2,4.5c-7.7,2.9-12.4,8.3-12.8,16.7c-0.3,7.5,3.6,12.5,9.8,16c3.8,2.2,8,3.5,12,5.2c1.6,0.7,3.1,1.4,4.4,2.5  c3.9,3.1,3.3,8.4-1.3,10.5c-2.4,1.1-5,1.4-7.7,1.1c-4.1-0.5-8-1.5-11.7-3.3c-2.2-1.1-2.8-0.8-3.5,1.6c-0.6,2-1.1,4.1-1.7,6.1  c-0.7,2.8-0.4,3.4,2.2,4.6c3.4,1.6,6.9,2.3,10.6,2.9c2.9,0.4,2.9,0.5,3,3.5c0,1.3,0.1,2.7,0.1,4c0,1.7,0.9,2.7,2.6,2.7  c2,0,4,0,5.9-0.1c1.6-0.1,2.4-1,2.4-2.6c0-1.8,0-3.7-0.1-5.5C81.1,88.5,81.9,87.6,83.7,87.1z"/>
                </svg>
              </div>
              <span className="text">Bonus temps</span>
            </div>
            :
            <span></span>
          }

        </div>
        <div className="velib-station-footer">
          <div className="velib-station-update">
            <svg x="0px" y="0px" width="512px" height="512px" viewBox="0 0 344.37 344.37">
              <g>
                <path d="M334.485,37.463c-6.753-1.449-13.396,2.853-14.842,9.603l-9.084,42.391C281.637,40.117,228.551,9.155,170.368,9.155    c-89.603,0-162.5,72.896-162.5,162.5c0,6.903,5.596,12.5,12.5,12.5c6.903,0,12.5-5.597,12.5-12.5    c0-75.818,61.682-137.5,137.5-137.5c49.429,0,94.515,26.403,118.925,68.443l-41.674-8.931c-6.752-1.447-13.396,2.854-14.841,9.604    c-1.446,6.75,2.854,13.396,9.604,14.842l71.536,15.33c1.215,0.261,2.449,0.336,3.666,0.234c2.027-0.171,4.003-0.836,5.743-1.962    c2.784-1.801,4.738-4.634,5.433-7.875l15.331-71.536C345.535,45.555,341.235,38.911,334.485,37.463z" />
                <path d="M321.907,155.271c-6.899,0.228-12.309,6.006-12.081,12.905c1.212,36.708-11.942,71.689-37.042,98.504    c-25.099,26.812-59.137,42.248-95.844,43.46c-1.53,0.05-3.052,0.075-4.576,0.075c-47.896-0.002-92.018-24.877-116.936-65.18    l43.447,11.65c6.668,1.787,13.523-2.168,15.311-8.837c1.788-6.668-2.168-13.522-8.836-15.312l-70.664-18.946    c-3.202-0.857-6.615-0.409-9.485,1.247c-2.872,1.656-4.967,4.387-5.826,7.589L0.43,293.092    c-1.788,6.668,2.168,13.522,8.836,15.311c1.085,0.291,2.173,0.431,3.245,0.431c5.518,0,10.569-3.684,12.066-9.267l10.649-39.717    c29.624,46.647,81.189,75.367,137.132,75.365c1.797,0,3.604-0.029,5.408-0.089c43.381-1.434,83.608-19.674,113.271-51.362    s45.209-73.031,43.776-116.413C334.586,160.453,328.805,155.026,321.907,155.271z" />
              </g>
            </svg>

            <span>Mise à jour le {Moment(details.last_update).format("DD/MM/YYYY à HH:mm:ss")}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemVelib;
