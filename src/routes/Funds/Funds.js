import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import { updateFundsTab }   from '../../store/reducers/setting';

import Img_QR from '../../assets/images/QR.png';
import './Funds.scss';

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    }
  }

  componentWillMount() {
    if (this.props.fundsTab >= 0) {
      this.setState({
        selectedTab: this.props.fundsTab
      });
      this.props.updateFundsTab({
        fundsTab: -1
      });
    }
  }
  componentDidUpdate() {
    if (this.props.fundsTab >= 0) {
      this.setState({
        selectedTab: this.props.fundsTab
      });
      this.props.updateFundsTab({
        fundsTab: -1
      });
    }
  }

  renderContent() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    if (this.state.selectedTab === 0)
      return(
        <div className="fund-content">
          <div className={"balance-block" + wmode}>
            <div className="balance-item">
              <div className="grey-text">Estimated Balance</div>
              <div className="balance">
                <div className="price">0.000</div>
                <div className="usd">USD</div>
              </div>
              <div className="grey-text">≈ 0.0000000 BTC</div>
            </div>
            <div className="balance-item">
              <div className="grey-text">Available Balance</div>
              <div className="balance">
                <div className="price green">0.000</div>
                <div className="usd">USD</div>
              </div>
              <div className="grey-text">≈ 0.0000000 BTC</div>
            </div>
            <div className="balance-item">
              <div className="grey-text">In Orders</div>
              <div className="balance">
                <div className="price red">0.000</div>
                <div className="usd">USD</div>
              </div>
              <div className="grey-text">≈ 0.0000000 BTC</div>
            </div>
          </div>
          <div className="title">Balance</div>
          <div className={"wallet-block" + wmode}>
            <div className="wb-header">
              <div className="check-option">
                <div className={"check" + wmode}>
                  <div className={"circle" + wmode}></div>
                </div>
                <div className="co-text">Show zero balance wallets</div>
              </div>
              <div className={"search-row" + wmode}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className="sr-input" placeholder="Search in my balances..."/>
              </div>
            </div>
            <div className="text">No assets found</div>
          </div>
        </div>
      );
    if (this.state.selectedTab === 1)
      return(
        <div className={"fund-content" + wmode}>
          <div className={"deposit-block" + wmode}>
            <div className="db-header">
              <div className="db-title">Deposits</div>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"} alt="" className="btc-img"></img>
              <div className="currency">
                BTC<i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="av-text">Available BTC 0.000000000</div>
            </div>
            <div className="white-text">BTC Address</div>
            <div className="image_QR">
              <img src={Img_QR} alt="" />
            </div>
            <div className="grey-text">
              1M5vkVwxEJajWRd2HnxvKp1iKeGYlrvSp1
              <i className="fa fa-clone" aria-hidden="true"></i>
            </div>
          </div>
          <div className={"completed-block" + wmode}>
            <div className="cb-title">Completed Deposits | BTC</div>
              <div className="table-row">
                <div className="cell">Coin</div>
                <div className="cell">Status</div>
                <div className="cell">Amount</div>
                <div className="cell">Date</div>
                <div className="cell">Information</div>
                <div/>
                <div/>
              <div/>
            </div>
          </div>
        </div>
      );
    if (this.state.selectedTab === 2)
      return(
        <div className={"fund-content" + wmode}>
          <div className={"deposit-block" + wmode}>
            <div className="db-header">
              <div className="db-title">Withdrawals</div>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"} alt="" className="btc-img"></img>
              <div className="currency">
                BTC<i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="av-text">Available BTC <span className="green">0.000000000</span></div>
            </div>
            <div className="withdraw-form">
              <div className="text">Recipient's BTC address</div>
              <div className="wf-row">
                <input className="wf-input"/>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="text">Transfer Network</div>
              <div className="wf-row half">
                <input className="wf-input"/>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="text">Amount</div>
              <div className="wf-row">
                <input className="wf-input"/>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="text"><span>Available Balance</span> 0 BTC</div>
              <div className="text end"><span>Transaction Fee</span>- BTC</div>
              <div className="text end"><span>You will Get</span>- BTC</div>
              <div className="submit">Submit</div>
            </div>

           </div>
          <div className={"completed-block" + wmode}>
            <div className="cb-title">Withdrawal Requests | BTC</div>
            <div className="table-row">
              <div className="cell">ID</div>
              <div className="cell">Amount</div>
              <div className="cell">Fee</div>
              <div className="cell">Address</div>
              <div/>
              <div className="cell">Status</div>
              <div className="cell">Created On</div>
              <div className="cell">Cancel</div>
              <div/>
            </div>
            </div>
          <div className={"completed-block" + wmode}>
            <div className="cb-title">Completed Withdrawals | BTC</div>
              <div className="table-row">
                <div className="cell">Coin</div>
                <div className="cell">Status</div>
                <div className="cell">Amount</div>
                <div className="cell">Date</div>
                <div className="cell">Information</div>
                <div/>
                <div/>
                <div/>
              </div>
            </div>
        </div>
      );
      if (this.state.selectedTab === 3) {
        return (
          <div className={"fund-content" + wmode}>
            <div className={"order-block" + wmode}>
              <div className="ob-title">Open Orders</div>
              <div className="blue-text">No Live Orders</div>
              <div className="white-text">You have no live orders.</div>
              <div className="white-text">Once placed, orders are displayed here. Live orders can be edited or cancelled.</div>
            </div>
          </div>
        )
      }
      if (this.state.selectedTab === 4) {
        return (
          <div className={"fund-content" + wmode}>
            <div className={"order-block" + wmode}>
              <div className="ob-title">Transactions</div>
              <div className="account-row">
                <div className="text">Select Account</div>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"} alt=""></img>
                <div className="text">BTC</div>
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div className="blue-text">No Live Orders</div>
              <div className="white-text">You have no trasnactions yet.</div>
              <div className="white-text">Transactions are generated by buying/selling Executions, lending-related activities, and deposit/withdrawal actions.</div>
            </div>
            <div className="title" style={{marginLeft: '30px'}}>Overview Report</div>
            <div className={"overview-block" + wmode}>
              <div className="ob-title">Select Range</div>
              <div className="filter-row second">
                <div className="ftext">From</div>
                <div className="dfilters">
                  <div className="item">
                    2020 <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div className="item">
                    May <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div className="item">
                    20 <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="filter-row second">
                <div className="ftext">To</div>
                <div className="dfilters">
                  <div className="item">
                    2020 <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div className="item">
                    May <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <div className="item">
                    20 <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div className="sub-title">Transacted Volume:</div>
              <div className="text">Accounts with zero transacted volume during selected period will not be displayed.</div>
              <div className="send-button">Send Report Via Email</div>
            </div>
          </div>
        )
      }
  }

  render() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className={"Funds" + wmode}>
        <div className={"f-tabs" + wmode}>
          <div className={this.state.selectedTab===0?"tab active":"tab"}
            onClick={() => {this.setState({selectedTab: 0})}}>Balance</div>
          <div className={this.state.selectedTab===1?"tab active":"tab"}
            onClick={() => {this.setState({selectedTab: 1})}}>Deposits</div>
          <div className={this.state.selectedTab===2?"tab active":"tab"}
            onClick={() => {this.setState({selectedTab: 2})}}>Withdrawals</div>
          <div className={this.state.selectedTab===3?"tab active":"tab"}
            onClick={() => {this.setState({selectedTab: 3})}}>Open Orders</div>
          <div className={this.state.selectedTab===4?"tab active":"tab"}
            onClick={() => {this.setState({selectedTab: 4})}}>Transactions</div>
        </div>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mode: state.setting.mode,
  fundsTab: state.setting.fundsTab
});

const mapDispatchToProps = {
  updateFundsTab: updateFundsTab
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Funds);