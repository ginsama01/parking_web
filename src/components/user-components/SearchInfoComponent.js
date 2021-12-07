import React, { Component } from "react";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { postSearchInfo } from "../../redux/UserActionCreators";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "react-widgets";
import "react-widgets/styles.css";

import { LocationSearchInput } from "./LocationSearchInput";

const renderDateTimePicker = ({ input: { onChange, value } }) =>
    <DatePicker
        onChange={onChange}
        value={!value ? null : new Date(value)}
        minDate={new Date()}
        defaultValue={new Date()}
        includeTime
    />


let SearchInfoBar = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="searchInfoBar">
            <div className="row">
                <div className="col-5">
                    <Field name="address" component={LocationSearchInput} />
                </div>
                <div className="col-3">
                    <Field
                        name="timein"
                        component={renderDateTimePicker}
                    />
                </div>
                <div className="col-3">
                    <Field
                        name="timeout"
                        component={renderDateTimePicker}
                    />
                </div>
                <div className="col-1">
                    <button type="submit" style={{ color: "white", backgroundColor: "#2e7d32" }}>Tìm kiếm</button>
                </div>
            </div>
        </form>

    );
}

SearchInfoBar = reduxForm({
    form: "searchinfoBar-form"
})(SearchInfoBar);


const mapDispatchToProps = dispatch => ({
    postSearchInfo: (address, timein, timeout) => dispatch(postSearchInfo(address, timein, timeout))
});

class SearchInfo extends Component {

    constructor(props) {
        super(props)

        this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    }

    handleSubmitSearch() {
        this.props.postSearchInfo(this.props.address, this.props.timein, this.props.timeout);
    }

    render() {
        return (
            <div>
                <SearchInfoBar handleSubmit={this.handleSubmitSearch} />
            </div>
        );
    }
}

const searchinfoBar_selector = formValueSelector("searchinfoBar-form")

export default connect(state => {
    const { address, timein, timeout } = searchinfoBar_selector(state, 'address', 'timein', 'timeout');
    return {
        address,
        timein,
        timeout
    }
}, mapDispatchToProps)(SearchInfo);