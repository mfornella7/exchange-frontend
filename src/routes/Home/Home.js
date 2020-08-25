import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 0,
      step: 0,
      assetOrBalance: 0,
      selectedTab: 0,
      assets: [
        {id: 0, symbol: 'AOA', name:'Aurora', price: 15.45, change: '-2.47%', volume: '39, 183m'},
        {id: 1, symbol: 'AOA', name:'Aurora', price: 15.45, change: '-2.47%', volume: '39, 183m'},
        {id: 2, symbol: 'AOA', name:'Aurora', price: 15.45, change: '-2.47%', volume: '39, 183m'},
        {id: 3, symbol: 'AOA', name:'Aurora', price: 15.45, change: '-2.47%', volume: '39, 183m'},
        {id: 4, symbol: 'AOA', name:'Aurora', price: 15.45, change: '-2.47%', volume: '39, 183m'},
      ],
      balances: [
        {id: 0, symbol: 'AOA', p1: 80.14, p2: 0.01, p3: 0, p4: 0},
        {id: 1, symbol: 'USD', p1: 0.00, p2: 0.00, p3: 0, p4: 0},
        {id: 2, symbol: 'AOA', p1: 80.14, p2: 0.01, p3: 304.73, p4: 0},
        {id: 3, symbol: 'USD', p1: 0.00, p2: 0.00, p3: 125.05, p4: 0},
      ]
    }
  }

  renderBuySell() {
    return (
      <div className="buysell-block">
        <div className="bb-header">
          <div className="order-text">Place Order</div>
          <div className="order-icon">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <div className="bb-buttons1">
          <div 
            className={this.state.activeButton?"bb-button":"bb-button green"}
            onClick={() => this.setState({ activeButton: 0})}
          >BUY</div>
          <div 
            className={this.state.activeButton?"bb-button red":"bb-button"}
            onClick={() => this.setState({ activeButton: 1})}
          >SELL</div>
        </div>
        <div className="bb-buttons2">
          <div className="normal-button active">Limit</div>
          <div className="normal-button">Market</div>
          <div className="mixed-button">
            <i className="fa fa-clock-o clock" aria-hidden="true"></i>
            <div className="text">Stop-limit</div>
            <i className="fa fa-caret-down down" aria-hidden="true"></i>
          </div>
        </div>
        <div className="usdt-balance">
            <i className="fas fa-wallet" aria-hidden="true"></i>
            0.00000000000USDT
        </div>
        <div className="input-row">
          <div className="ir-text">Price</div>
          <input className="ir-input" placeholder="" defaultValue="11510,16"/>
          <div className="ir-asset">USDT</div>
        </div>
        <div className="input-row">
          <div className="ir-text">Amount</div>
          <input className="ir-input" placeholder="" defaultValue="0.0000086000"/>
          <div className="ir-asset">BTC</div>
        </div>
        <ul className="step-bar">
          <div 
            className={this.state.step === 0 ?"rect active":"rect"}
            onClick={() => { this.setState({step: 0}); }}
          />
          <div className="bar"></div>
          <div 
            className={this.state.step === 1 ?"rect active":"rect"}
            onClick={() => { this.setState({step: 1}); }}
          />
          <div className="bar"></div>
          <div 
            className={this.state.step === 2 ?"rect active":"rect"}
            onClick={() => { this.setState({step: 2}); }}
          />
          <div className="bar"></div>
          <div 
            className={this.state.step === 3 ?"rect active":"rect"}
            onClick={() => { this.setState({step: 3}); }}
          />
          <div className="bar"></div>
          <div 
            className={this.state.step === 4 ?"rect active":"rect"}
            onClick={() => { this.setState({step: 4}); }}
          />
        </ul>
        <div className="input-row">
          <div className="ir-text">Total</div>
          <input className="ir-input" placeholder="" defaultValue="11510,16"/>
          <div className="ir-asset">USDT</div>
        </div>
        <div className={this.state.activeButton?"buy-button sell":"buy-button"}>
          {this.state.activeButton?"Sell BTC":"Buy BTC"}
        </div>
      </div>
    )
  }

  renderAssets() {
    return (
      <div className="assets-block">
        <div className="ab-buttons">
          <div 
            className={this.state.assetOrBalance=== 0?"ab-button active":"ab-button"}
            onClick={() => { this.setState({assetOrBalance: 0}) }}
          >Assets</div>
          <div 
            className={this.state.assetOrBalance=== 1?"ab-button active":"ab-button"}
            onClick={() => { this.setState({assetOrBalance: 1}) }}
          >Balance</div>
        </div>
        {this.state.assetOrBalance === 0 ? 
          <div className="asset-content">
            <div className="search-row">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input className="sr-input" placeholder="Search"/>
            </div>
            <div className="table-content">
              <div className="table-header">
                <div className="th-cell th-first">Name</div>
                <div className="th-cell">Price</div>
                <div className="th-cell">Change</div>
                <div className="th-cell th-last">
                  Volume
                  <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                </div>
              </div>
              {this.state.assets.map(asset => {
                return (
                  <div className="table-row" key={asset.id}>
                    <div className="t-cell t-first">
                      <div className="tf-image"></div>
                      <div className="tf-detail">
                        <div className="symbol">{asset.symbol}</div>
                        <div className="name">{asset.name}</div>
                      </div>
                    </div>
                    <div className="t-cell">{asset.price}</div>
                    <div className="t-cell">{asset.change}</div>
                    <div className="t-cell t-last">{asset.volume}</div>
                  </div>
                )
              })}
            </div>
          </div>:
          <div className="balance-content">
            <div className="b-search-row">
              <div className="search-row b-search">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className="sr-input" placeholder="Search"/>
              </div>
              <div className="balance-details">
                <div className="text">Balance details</div>
                <div className="check">
                  <input type="checkbox" id="scales" name="scales"/>
                  <label htmlFor="scales">Hide small balances</label>
                </div>
              </div>
            </div>
            <div className="table-content">
              <div className="tc-left">
                <div className="tc-header">
                  <div className="tch-cell">Name<i className="fa fa-sort" aria-hidden="true"></i></div>
                  <div className="tch-cell">Exchange<i className="fa fa-sort" aria-hidden="true"></i></div>
                </div>
                {this.state.balances.map(balance => {
                  return (
                    <div className="tc-rows" key={balance.id}>
                      <div className={balance.id % 2 === 0?"tc-row secondary":"tc-row"}>
                        <div className="name-cell">
                          <div className="nc-image"></div>
                          <div className="nc-text">{balance.symbol}</div>
                        </div>
                        <div className="price">{balance.p1}</div>
                      </div>
                      <div className={balance.id % 2 === 0?"tc-row secondary":"tc-row"}>
                        <div className="name-cell">
                        </div>
                        <div className="price bold">{balance.p2}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="tc-right">
                <div className="tc-header">
                  <div className="tch-cell">Funding<i className="fa fa-sort" aria-hidden="true"></i></div>
                </div>
                {this.state.balances.map(balance => {
                  return (
                    <div className="tc-rows" key={balance.id}>
                      <div className={balance.id % 2 === 0?"tc-row secondary":"tc-row"}>
                        <div className="name-cell">
                        </div>
                        <div className="price bold">{balance.p3}</div>
                      </div>
                      <div className={balance.id % 2 === 0?"tc-row secondary":"tc-row"}>
                        <div className="name-cell">
                        </div>
                        <div className="price bold">{balance.p4}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="dw-buttons">
              <div className="dw-button">Deposit</div>
              <div className="dw-button">Withdraw</div>
            </div>
          </div>
        }
      </div>
    )
  }

  renderTop() {
    return (
      <div className="top-container">
        {this.renderBuySell()}
          <div className="middle-block"></div>
        {this.renderAssets()}
      </div>
    )
  }

  renderBottom() {
    return (
      <div className="bottom-container">
        <div className="bc-header">
          <div className="tab-buttons">
            <div 
              className={this.state.selectedTab === 0?"tab active":"tab"}
              onClick={() => { this.setState({selectedTab: 0}); }}
            >
              Open Orders(0)
            </div>
            <div 
              className={this.state.selectedTab === 1?"tab active":"tab"}
              onClick={() => { this.setState({selectedTab: 1}); }}
            >Order History</div>
            <div 
              className={this.state.selectedTab === 2?"tab active":"tab"}
              onClick={() => { this.setState({selectedTab: 2}); }}
            >Trade History</div>
            <div 
              className={this.state.selectedTab === 3?"tab active":"tab"}
              onClick={() => { this.setState({selectedTab: 3}); }}
            >Funds</div>
          </div>
          <div className="check">
            <input type="checkbox" id="hide" name="hide"/>
            <label htmlFor="hide">Hide small balances</label>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        {this.renderBottomTable()}
      </div>
    )
  }
  renderBottomTable() {
    return (
      <div className="bottom-table">

      </div>
    )
  }
  render() {
    return (
      <div className="Home">
        {this.renderTop()}
        {this.renderBottom()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);