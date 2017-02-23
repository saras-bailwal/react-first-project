import React, {Component} from 'react';
import {connect} from 'react-redux';


class PrjList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <div className="swiper-slide"
                    key={user.id}>
                    <img src={user.image} className="top-slide-image" />
                    <br/>
                    <p className="top-slide-text">{user.title}</p>
                </div>
            );
        });
    }

    render() {
        return (
          <div className="swiper-container">
          <div className="swiper-wrapper">
              {this.renderList()}
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
          </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(PrjList);
