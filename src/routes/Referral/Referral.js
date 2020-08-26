import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { compose }          from 'redux';

import './Referral.scss';

class Referral extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let wmode = this.props.mode === 'white' ? ' wmode' : '';
        return (
            <div className="Referral">
                <div className="header">
                    <div className={"title" + wmode}>Invite friends and earn together</div>
                    <div className="rule">Read the Rules</div>
                </div>
                <div className={"invite-block" + wmode}>
                    <div className="details">
                        <div className="item">
                            <div className="description">
                                Your commission
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </div>
                            <div className={"percent" + wmode}>30%</div>
                            <div className="description">Of their trading fees</div>
                        </div>
                        <div className="item">
                            <div className="description">
                                Friend's Discount
                                <i className="fa fa-question-circle" aria-hidden="true"></i>
                            </div>
                            <div className={"percent" + wmode}>10%</div>
                            <div className="description">Of their trading fees</div>
                        </div>
                    </div>
                    <div className="invite-button">
                        Invite your Friends
                    </div>
                </div>
                <div className={"payout-block" + wmode}>
                    <div className="pb-header">
                        <div className="tab">
                            <div className="text">Total Payout <i className="fa fa-question-circle" aria-hidden="true"></i></div>
                            <div className="usd">≈ 0 USD</div>
                        </div>
                        <div className={"tab deactive" + wmode}>
                            <div className="text">Expected Payout(24H) <i className="fa fa-question-circle" aria-hidden="true"></i></div>
                            <div className="usd">≈ 0 USD</div>
                        </div>
                        <div className={"tab deactive" + wmode}>
                            <div className="text">Active Referees <i className="fa fa-question-circle" aria-hidden="true"></i></div>
                            <div className="usd">0</div>
                        </div>
                    </div>
                    <div className="text-white">You have no total payouts</div>
                    <div className='text-grey'>Invite people to Company to earn commissions</div>
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(Referral);