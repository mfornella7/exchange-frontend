import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Home.scss';
import Img_Order from '../../assets/images/orders.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 0,
      step: 0,
      assetOrBalance: 0,
      selectedTab: 0,
      marketTab: 0,
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

  renderStepbar() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <ul className="step-bar">
        <div 
          className={this.state.step === 0 ?"rect active" + wmode:"rect" + wmode}
          onClick={() => { this.setState({step: 0}); }}
        />
        <div className={"bar" + wmode}></div>
        <div 
          className={this.state.step === 1 ?"rect active" + wmode:"rect" + wmode}
          onClick={() => { this.setState({step: 1}); }}
        />
        <div className={"bar" + wmode}></div>
        <div 
          className={this.state.step === 2 ?"rect active" + wmode:"rect" + wmode}
          onClick={() => { this.setState({step: 2}); }}
        />
        <div className={"bar" + wmode}></div>
        <div 
          className={this.state.step === 3 ?"rect active" + wmode:"rect" + wmode}
          onClick={() => { this.setState({step: 3}); }}
        />
        <div className={"bar" + wmode}></div>
        <div 
          className={this.state.step === 4 ?"rect active" + wmode:"rect" + wmode}
          onClick={() => { this.setState({step: 4}); }}
        />
      </ul>
    )
  }

  renderMarketTab() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    if (this.state.marketTab === 0) {
      return (
        <div>
          <div className="input-row">
            <div className="ir-text">Price</div>
            <input className={"ir-input" + wmode} placeholder="" value="11510,16" id="p1"/>
            <div className="ir-asset">USDT</div>
          </div>
          <div className="input-row">
            <div className="ir-text">Amount</div>
            <input className={"ir-input" + wmode} placeholder="" value="0.0000086000"/>
            <div className="ir-asset">BTC</div>
          </div>
          {this.renderStepbar()}
          <div className="input-row">
            <div className="ir-text">Total</div>
            <input className={"ir-input" + wmode} placeholder="" defaultValue="11510,16"/>
            <div className="ir-asset">USDT</div>
          </div>
      </div>
      )
    } else if (this.state.marketTab === 1) {
      return (
        <div>
          <div className="input-row">
            <div className="ir-text">Price</div>
            <input className={"ir-input" + wmode} placeholder="" value="Market" id="p2"/>
            <div className="ir-asset">USDT</div>
          </div>
          <div className="input-row">
            <div className="ir-text">Amount</div>
            <input className={"ir-input" + wmode} placeholder="" value=""/>
            <div className="ir-asset">BTC</div>
          </div>
          {this.renderStepbar()}
        </div>
      )
    } else {
      return (
        <div>
          <div className="input-row">
            <div className="ir-text">Stop</div>
            <input className={"ir-input" + wmode} placeholder="" value=""/>
            <div className="ir-asset">USDT</div>
          </div>
          <div className="input-row">
            <div className="ir-text">Limit</div>
            <input className={"ir-input" + wmode} placeholder="" value="11510,16"/>
            <div className="ir-asset">USDT</div>
          </div>
          <div className="input-row">
            <div className="ir-text">Amount</div>
            <input className={"ir-input" + wmode} placeholder=""/>
            <div className="ir-asset">BTC</div>
          </div>
          {this.renderStepbar()}
          <div className="input-row">
            <div className="ir-text">Total</div>
            <input className={"ir-input" + wmode} placeholder=""/>
            <div className="ir-asset">BTC</div>
          </div>
        </div>
      );
    }
  }

  renderBuySell() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"buysell-block" + wmode}>
        <div className="bb-header">
          <div className="order-text">Place Order</div>
          <div className="order-icon">
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
        </div>
        <div className="bb-buttons1">
          <div 
            className={this.state.activeButton?"bb-button":"bb-button green" + wmode}
            onClick={() => this.setState({ activeButton: 0})}
          >BUY</div>
          <div 
            className={this.state.activeButton?"bb-button red" + wmode:"bb-button"}
            onClick={() => this.setState({ activeButton: 1})}
          >SELL</div>
        </div>
        <div className="bb-buttons2">
          <div className={this.state.marketTab === 0?"normal-button active" + wmode:"normal-button" + wmode}
            onClick={() => { this.setState({marketTab: 0}) }}>Limit</div>
          <div className={this.state.marketTab === 1?"normal-button active" + wmode:"normal-button" + wmode}
            onClick={() => { this.setState({marketTab: 1}) }}>Market</div>
          <div className={this.state.marketTab === 2?"mixed-button active" + wmode:"mixed-button" + wmode}
            onClick={() => { this.setState({marketTab: 2}) }}>
            <i className="fa fa-clock-o clock" aria-hidden="true"></i>
            <div className="text">Stop-limit</div>
            <i className="fa fa-caret-down down" aria-hidden="true"></i>
          </div>
        </div>
        <div className="usdt-balance">
            <i className="fas fa-wallet" aria-hidden="true"></i>
            0.00000000000USDT
        </div>
        {this.renderMarketTab()}
        <div className={this.state.activeButton?"buy-button sell" + wmode:"buy-button" + wmode}>
          {this.state.activeButton?"Sell BTC":"Buy BTC"}
        </div>
      </div>
    )
  }

  renderAssets() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"assets-block" + wmode}>
        <div className="ab-buttons">
          <div 
            className={this.state.assetOrBalance=== 0?"ab-button active" + wmode:"ab-button" + wmode}
            onClick={() => { this.setState({assetOrBalance: 0}) }}
          >Assets</div>
          <div 
            className={this.state.assetOrBalance=== 1?"ab-button active" + wmode:"ab-button" + wmode}
            onClick={() => { this.setState({assetOrBalance: 1}) }}
          >Balance</div>
        </div>
        {this.state.assetOrBalance === 0 ? 
          <div className="asset-content">
            <div className={"search-row" + wmode}>
              <i className="fa fa-search" aria-hidden="true"></i>
              <input className={"sr-input" + wmode} placeholder="Search"/>
            </div>
            <div className="table-content">
              <div className="table-header">
                <div className={"th-cell th-first" + wmode}>Name</div>
                <div className={"th-cell" + wmode}>Price</div>
                <div className={"th-cell" + wmode}>Change</div>
                <div className={"th-cell th-last" + wmode}>
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
                        <div className={"symbol" + wmode}>{asset.symbol}</div>
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
              <div className={"search-row b-search" + wmode}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className={"sr-input" + wmode} placeholder="Search"/>
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
                      <div className={balance.id % 2 === 0?"tc-row secondary" + wmode:"tc-row"}>
                        <div className="name-cell">
                          <div className="nc-image"></div>
                          <div className="nc-text">{balance.symbol}</div>
                        </div>
                        <div className="price">{balance.p1}</div>
                      </div>
                      <div className={balance.id % 2 === 0?"tc-row secondary" + wmode:"tc-row"}>
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
                      <div className={balance.id % 2 === 0?"tc-row secondary" + wmode:"tc-row"}>
                        <div className="name-cell">
                        </div>
                        <div className="price bold">{balance.p3}</div>
                      </div>
                      <div className={balance.id % 2 === 0?"tc-row secondary" + wmode:"tc-row"}>
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
              <div className={"dw-button" + wmode}>Deposit</div>
              <div className={"dw-button" + wmode}>Withdraw</div>
            </div>
          </div>
        }
      </div>
    )
  }

  renderTop() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"top-container" + wmode}>
        {this.renderBuySell()}
          <div className={"middle-block" + wmode}></div>
        {this.renderAssets()}
      </div>
    )
  }

  renderBottom() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"bottom-container" + wmode}>
        <div className="bc-header">
          <div className="tab-buttons">
            <div 
              className={this.state.selectedTab === 0?"tab active" + wmode:"tab" + wmode}
              onClick={() => { this.setState({selectedTab: 0}); }}
            >
              Open Orders(0)
            </div>
            <div 
              className={this.state.selectedTab === 1?"tab active" + wmode:"tab" + wmode}
              onClick={() => { this.setState({selectedTab: 1}); }}
            >Order History</div>
            <div 
              className={this.state.selectedTab === 2?"tab active" + wmode:"tab" + wmode}
              onClick={() => { this.setState({selectedTab: 2}); }}
            >Trade History</div>
            <div 
              className={this.state.selectedTab === 3?"tab active" + wmode:"tab" + wmode}
              onClick={() => { this.setState({selectedTab: 3}); }}
            >Funds</div>
          </div>
          {this.state.selectedTab === 3?
          <div className="check">
            <input type="checkbox" id="hide" name="hide"/>
            <label htmlFor="hide">Hide small balances</label>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>:<div/>}
        </div>
        {this.renderBottomTable()}
      </div>
    )
  }
  renderBottomTable() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    if(this.state.selectedTab === 0)
      return (
        <div className={"bottom-table" + wmode}>
          <div className="close-row">
            <div className="check">
              <input type="checkbox" id="hide" name="hide"/>
              <label htmlFor="hide">Hide Other Pairs</label>
            </div>
            <div className="close-button">Cancell All</div>
          </div>
          <div className="table-row">
            <div className="cell">Date</div>
            <div className="cell">Pair</div>
            <div className="cell">Type</div>
            <div className="cell">Side</div>
            <div className="cell">Price</div>
            <div className="cell">Amount</div>
            <div className="cell">Filled</div>
            <div className="cell">Total</div>
            <div/>
            <div className="cell1">
              <div>Trigger Conditions</div>
              <div className="red">Cancel All</div>
              <div>|</div>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <div/>
          </div>
          <div className="img-row">
            <img src={Img_Order} alt=""/>
            <div className="text">You have no open orders</div>
          </div>
        </div>
      )
    if(this.state.selectedTab === 1)
      return (
        <div className={"bottom-table" + wmode}>
          <div className="close-row">
            <div className="check">
              <input type="checkbox" id="hide" name="hide"/>
              <label htmlFor="hide">Hide Other Pairs</label>
            </div>
            <div className="close-button">Cancell All</div>
          </div>
          <div className="table-row">
            <div className="cell">
              Coin
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </div>
            <div className="cell">Total Balance</div>
            <div className="cell">Balance Available</div>
            <div className="cell">In order</div>
            <div className="cell">BTC Value</div>
            <div/>
          </div>
        </div>
      )
    if(this.state.selectedTab === 2)
      return (
        <div className={"bottom-table" + wmode}>
          <div className="close-row">
            <div className="check">
              <input type="checkbox" id="hide" name="hide"/>
              <label htmlFor="hide">Hide Other Pairs</label>
            </div>
            <div className="close-button">Cancell All</div>
          </div>
          <div className="date-row">
            <div className={"period active" + wmode}>1 Day</div>
            <div className="period">1 Week</div>
            <div className="period">1 Month</div>
            <div className="period">3 Months</div>
            <input className="filter-input" placeholder="YYYY-MM-DD - YYYY-MM-DD"/>
            <div className={"period active" + wmode}>Search</div>
          </div>
          <div className="table-row">
            <div className="cell">Data</div>
            <div className="cell">Pair</div>
            <div className="cell">Side</div>
            <div className="cell">Price</div>
            <div className="cell">Concluded</div>
            <div className="cell">Fee</div>
            <div className="cell">Total</div>
            <div/>
            <div/>
          </div>
        </div>
      )
    if(this.state.selectedTab === 3)
      return (
        <div className={"bottom-table" + wmode}>
          <div className="close-row">
            <div className="check">
              <input type="checkbox" id="hide" name="hide"/>
              <label htmlFor="hide">Hide Other Pairs</label>
            </div>
            <div className="close-button">Cancell All</div>
          </div>
          <div className="date-row">
            <div className={"period active" + wmode}>1 Day</div>
            <div className="period">1 Week</div>
            <div className="period">1 Month</div>
            <div className="period">3 Months</div>
            <input className="filter-input" placeholder="YYYY-MM-DD - YYYY-MM-DD"/>
            <div className={"period active" + wmode}>Search</div>
          </div>
          <div className="table-row">
            <div className="cell">Data</div>
            <div className="cell">Pair</div>
            <div className="cell">Type</div>
            <div className="cell">Average</div>
            <div className="cell">Price</div>
            <div className="cell">Concluded</div>
            <div className="cell">Amount</div>
            <div className="cell">Total</div>
            <div className="cell">Activity Conditions</div>
            <div className="cell">Status<i className="fa fa-caret-down" aria-hidden="true"></i></div>
            <div/>
            <div/>
          </div>
        </div>
      )
  }
  render() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"Home" + wmode}>
        {this.renderTop()}
        {this.renderBottom()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mode: state.setting.mode
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);