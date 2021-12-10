import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "react-widgets";
import "react-widgets/styles.css";

import { LocationSearchInput } from "./LocationSearchInput";


const renderDateTimePicker = ({ label, input: { onChange, value } }) =>
    <DatePicker
        onChange={onChange}
        value={!value ? null : new Date(value)}
        placeholder={label}
        includeTime
    />


function SearchInfoBar(props) {
    const { handleSubmit, search_info } = props;
    function convertTime(time) {
        var date = new Date(Date.parse(time));
        return(date.getHours() + ':' + date.getMinutes() + ', ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }
    return (
        <form onSubmit={handleSubmit} className="searchInfoBar">
            <div className="row">
                <div className="col-6">
                    <Field name="address" component={LocationSearchInput} label={search_info.address} />
                </div>
                <div className="col-4">
                    <Field
                        name="timein"
                        component={renderDateTimePicker}
                        label={convertTime(search_info.timein)}
                    />
                </div>
                <div className="col-2">
                    <button type="submit" style={{ color: "white", backgroundColor: "#2e7d32" }}>Tìm kiếm</button>
                </div>
            </div>
        </form>

    );
}

export default reduxForm({
    form: "searchinfoBar-form"
})(SearchInfoBar);