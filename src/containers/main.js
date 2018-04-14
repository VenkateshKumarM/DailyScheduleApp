import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DailyScheduleComponent } from "../components/dailyScheduleComponent";
import { getDailyScheduleAction } from "../actions/dailyScheduleAction";
import * as _ from "lodash";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDailySchedule();
    }

    render() {
        return (
            <DailyScheduleComponent dailySchedule={this.props.schedule} />
        )
    }
}

const returnEmptyObjectIfNull = (value, type) => {
    return !_.isEmpty(value) ? value : type;
};

function mapStateToProps(state) {
    return {
        schedule: returnEmptyObjectIfNull(state.dailyScheduleReducer.users.schedule, {})
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDailySchedule: bindActionCreators(getDailyScheduleAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);