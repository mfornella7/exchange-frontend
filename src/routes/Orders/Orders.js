import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import { updateFundsTab }   from '../../store/reducers/setting';
import './Orders.scss';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let wmode = this.props.mode === 'white' ? ' wmode' : '';
    return (
      <div className="Orders">
        <div className={"o-tabs" + wmode}>
          <div className="tab" onClick={() => {
            this.props.updateFundsTab({fundsTab: 0});
            this.props.history.push('/funds');
          }}>Balance</div>
          <div className="tab" onClick={() => {
            this.props.updateFundsTab({fundsTab: 1});
            this.props.history.push('/funds')
          }}>Deposits</div>
          <div className="tab" onClick={() => {
            this.props.updateFundsTab({fundsTab: 2});
            this.props.history.push('/funds')
          }}>Withdrawals</div>
          <div className="tab active">Open Orders</div>
          <div className="tab" onClick={() => {
            this.props.updateFundsTab({fundsTab: 4});
            this.props.history.push('/funds')
          }}>Transactions</div>
        </div>
        <div className={"title" + wmode}>Open Orders</div>
        <div className={"detail-block" + wmode}>
          <div className="blue-text">No Live Orders</div>
          <div className="white-text">You have no live orders.</div>
          <div className="white-text">Once placed, orders are displayed here. Live orders can be edited or cancelled.</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mode: state.setting.mode
});

const mapDispatchToProps = {
  updateFundsTab: updateFundsTab
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Orders);