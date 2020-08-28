import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'
import './Header.scss';

import { updateMode, updateFundsTab } from '../../store/reducers/setting';
import Img_User from '../../assets/images/user.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmenu: false,
        };
    }
    componentDidMount() {
    }

    onChangeMode() {
        if (this.props.mode === 'dark') {
            this.props.updateMode({
                mode: 'white'
            });
            document.body.style.background = 'white';
        } else {
            this.props.updateMode({
                mode: 'dark'
            });
            document.body.style.background = 'black';
        }
    }

    onNavClick() {
        if(window.innerWidth < 1080) {
            this.setState({
                navmenu: true
            })
        }
    }

    renderNavMenu() {
        if(this.state.navmenu === false || window.innerWidth >= 1080)  return;
        return (
            <div className="navmenu">
                <div className="menu-text" onClick={() =>{
                    this.props.history.push("/referral");
                    this.setState({navmenu: false})
                }}>
                    Referral Program
                </div>
                <div className="menu-text" onClick={() =>{
                    this.props.history.push("/orders");
                    this.setState({navmenu: false})
                }}>Orders</div>
                <div className="menu-text" onClick={() =>{
                    this.props.updateFundsTab({fundsTab: 0});
                    this.props.history.push("/funds");
                    this.setState({navmenu: false})
                }}>Funds</div>
                <div className="menu-text" onClick={() =>{
                    this.props.updateFundsTab({fundsTab: 1});
                    this.props.history.push("/funds");
                    this.setState({navmenu: false})
                }}>Deposits</div>
            </div>
        )
    }

    render() {
        let wmode = this.props.mode === 'white' ? ' wmode' : '';
        return (
            <div className={"Header" + wmode}>
                {this.renderNavMenu()}
                <div className="header-left">
                    <div className="bar-icon" onClick={() => this.onNavClick()}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <div className="logo" onClick={() => {
                        this.props.history.push('/')
                    }}>LOGO</div>
                    <div className="currency-pair">
                        <div className="currency-text">BTC/USDT</div>
                        <div className="down-icon">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="mobile-data">
                        <div className="green-big">11,582.36</div>
                        <div className="mode" onClick={() => this.onChangeMode()}>
                            {this.props.mode === 'dark'?
                            <i class='fas fa-sun'></i>:
                            <i className="fa fa-moon-o" aria-hidden="true" style={{color: 'black'}}></i>
                            }
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
                    <div className="menu-text" onClick={() =>{
                        this.props.history.push("/referral");
                    }}>
                        Referral Program
                    </div>
                    <div className="menu-text" onClick={() =>{
                        this.props.history.push("/orders");
                    }}>Orders</div>
                    <div className="menu-text" onClick={() =>{
                        this.props.updateFundsTab({fundsTab: 0});
                        this.props.history.push("/funds");
                    }}>Funds</div>
                    <div className={"deposit-button" + wmode} onClick={() =>{
                        this.props.updateFundsTab({fundsTab: 1});
                        this.props.history.push("/funds");
                    }}>Deposits</div>
                    <div className="seperator">|</div>
                    <div className="mode" onClick={() => this.onChangeMode()}>
                        {this.props.mode === 'dark'?
                        <i class='fas fa-sun'></i>:
                        <i className="fa fa-moon-o" aria-hidden="true" style={{color: 'black'}}></i>
                        }
                    </div>
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
    updateMode: updateMode,
    updateFundsTab: updateFundsTab
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);