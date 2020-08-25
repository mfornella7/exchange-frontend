import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Orders.scss';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="Orders">
        <div className="o-tabs">
          <div className="tab">Balance</div>
          <div className="tab">Deposits</div>
          <div className="tab">Withdrawals</div>
          <div className="tab active">Open Orders</div>
          <div className="tab">Transactions</div>
        </div>
        <div className="title">Open Orders</div>
        <div className="detail-block">
          <div className="blue-text">No Live Orders</div>
          <div className="white-text">You have no live orders.</div>
          <div className="white-text">Once placed, orders are displayed here. Live orders can be edited or cancelled.</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Orders);