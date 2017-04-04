import React, { Component } from 'react';
import { Link } from 'react-router';
import './Homepage.scss';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="AppHome">
        <div className="page-header">
          <h1></h1>
        </div>
        <div className="nav-velib nav">
          <Link to="/velib" className="button" title="Velib">
            <span className="link-wrapper">
              <span className="title">Velib</span>
            </span>
            <span className="button_bg">
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
            </span>
          </Link>
        </div>
        <div className="nav-autolib nav">
          <Link to="/autolib" className="button" title="Autolib">
              <span className="link-wrapper">
              <span className="title">Autolib</span>
            </span>
            <span className="button_bg">
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
                <span className="blob" style={{transform:' matrix(1, 0, 0, 1, 0, 0)'}}></span>
            </span>
          </Link>
        </div>
      </div>
    );
  }
}


jQuery(document).ready(function() {
    function animateButton() {
        var a = jQuery(".nav");
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

    function animateBody(){

      jQuery(document).on('click', '.nav', function(){

        jQuery(this).addClass('body_animate');
      })
    };

    animateBody();
});

export default Homepage;
