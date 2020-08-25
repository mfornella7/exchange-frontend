import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Funds.scss';

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    }
  }

  renderContent() {
    return(
      <div className="fund-content">

      </div>
    )
  }

  render() {
    return (
      <div className="Funds">
        <div className="f-tabs">
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
});

const mapDispatchToProps = {
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Funds);