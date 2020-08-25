import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import './Header.scss';

import Img_User from '../../assets/images/user.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="Header">
                <div className="header-left">
                    <div className="bar-icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className="logo">LOGO</div>
                    <div className="currency-pair">
                        <div className="currency-text">BTC/USDT</div>
                        <div className="down-icon">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="data-block">
                        <div className="data-item">
                            <div className="green-big">11,582.36</div>
                            <div className="white-6">R$9,828.14</div>
                        </div>
                        <div className="data-item">
                            <div className="white-6">24h Change</div>
                            <div className="green-normal">165.40 + 1.45%</div>
                        </div>
                        <div className="data-item">
                            <div className="white-6">24h High</div>
                            <div className="white-bold">11,617.52</div>
                        </div>
                        <div className="data-item">
                            <div className="white-6">24h Low</div>
                            <div className="white-bold">11,125.52</div>
                        </div>
                        <div className="data-item">
                            <div className="white-6">24h Volume</div>
                            <div className="white-bold">872,153,687.90 USDT</div>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="menu-text">Referral Program</div>
                    <div className="menu-text">Orders</div>
                    <div className="menu-text">Funds</div>
                    <div className="deposit-button">Deposits</div>
                    <div className="seperator">|</div>
                    <div className="user-image">
                        <img src={Img_User} alt=""></img>
                    </div>
                    <div className="username">VIP 0</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mode: state.setting.mode
});

const mapDispatchToProps = {

};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);