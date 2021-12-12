import React from "react";
import { Field, reduxForm } from "redux-form";
import { DatePicker } from "react-widgets";
import "react-widgets/styles.css";

import { LocationSearchInput } from "./LocationSearchInput";


const renderDateTimePicker = ({ input: { onChange, value }, defaultValue }) =>
    <DatePicker
        onChange={onChange}
        value={ !value ? defaultValue : new Date(value)}
        includeTime
    />


function SearchInfoBar(props) {
    const { handleSubmit, search_info } = props;
    
    return (
        <form onSubmit={handleSubmit} className="searchInfoBar">
            <div className="row">
                <div className="col-6">
                    <Field name="address" component={LocationSearchInput} defaultValue={search_info.address} />
                </div>
                <div className="col-4">
                    <Field
                        name="timein"
                        component={renderDateTimePicker}
                        defaultValue={new Date(Date.parse(search_info.timein))}
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