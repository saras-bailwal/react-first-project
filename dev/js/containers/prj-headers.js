import React, {Component} from 'react';
import {connect} from 'react-redux';

class PrjHeaders extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="row firstHeader">
              <div className="col-md-5"></div>
              <div className="col-md-5"></div>
              <div className="col-md-1"><a href="#">LOGIN</a></div>
              <div className="col-md-1"><a href="#">SIGN UP</a></div>
            </div>

            <div className="row">
              <div className="col-md-4 logo">
                <img alt="DesiDime – India’s Largest Online Shopping Community" itemprop="logo" src="https://cdn0.desidime.com/assets/desidime-logo-8381e01bfd155583ebe75c9e3d7fbd77.png" title="Desidime" />
              </div>
              <div className="col-md-6">
                <div className="input-group search">
                    <input type="search" className="form-control" placeholder="Search For Deals, Coupons, Stores &amp; Forums" />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary"><span className="glyphicon glyphicon-search"></span></button>
                    </span>
                  </div>
                </div>
            </div>

            <div className="row menubar">
              <ul className="nav navbar-nav header">
                <li><a href="#">CATEGORIES</a></li>
                <li><a href="#">COUPONS</a></li>
                <li><a href="#">DEALS</a></li>
                <li><a href="#">PRICE COMPARISON</a></li>
                <li><a href="#">FORUMS</a></li>
                <li className="right-tab">
                <img alt="Deal baba small" src="https://cdn1.desidime.com/assets/deal_baba_Small-a89a754d7fce1fec48e0751bd4edef40.png" />DEAL BABA CORNER
                </li>
              </ul>
            </div>

            <div className="second-header">
              <ul className="nav navbar-nav swipes">
                <li>
                  <a href="#" className="active"><b>Featured Deals & Offers</b></a>
                </li>
              </ul>
            </div>
            
          </div>
        );
    }
}



export default PrjHeaders;
