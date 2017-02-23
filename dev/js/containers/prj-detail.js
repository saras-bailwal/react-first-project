import React, {Component} from 'react';
import {connect} from 'react-redux';
import FaInr from 'react-icons/lib/fa/inr';


class PrjDetail extends Component {

  renderMain() {
      return this.props.users.map((user) => {
          return (
              <div className="sub-main"
                  key={user.id}>
                  <img src={user.image} className="top-slide-image" />
                  <br/>

                  <p className="top-text">{user.title}</p>

                  <div className="price">
                    <span className="price-now"><FaInr />{user.current_price}</span>
                  </div>

                  <div className="price-off">

                  <span className="discount">{user.off_percent}% OFF</span>
                  <span className="orig-cost">
                      <FaInr />{user.original_price}
                  </span>

                  </div>

                  <div className="merchant-btn">
                    <span className="merchant-name">{user.merchant.name}</span>
                    <button className="btn btn-secondary getdeal">Get Deal</button>
                  </div>

                  <div className="auth">
                    <span className="auth-name">{user.user.name}</span>
                  </div>
              </div>
          );
      });
  }



    render() {
        return (
            <div>

              <div className="main-header">
                <ul className="nav navbar-nav swipes">
                  <li>
                    <a href="#" className="active"><b>Best Online Deals</b></a>
                  </li>
                </ul>
              </div>

                <div className="main">{this.renderMain()}</div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(PrjDetail);
