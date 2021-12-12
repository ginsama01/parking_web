import ParkInfoForm from "./ParkInfoForm";
import { useParams } from "react-router-dom";
import { fetchOwnerParkInfo, pushEditParkInfo, postParkImages } from "../../redux/OwnerActionCreators";
import { formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { useEffect } from "react";

const parkInfo_selector = formValueSelector("park-info-form")

const mapStateToProps = state => {
    const { name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h } = parkInfo_selector(state, 'name', 'total_space', "location", "price", "hasCamera", "hasRoof", "allowOvernight", "allowBooking", "description", "open_time", "close_time", "allow24h");
    return {
        name,
        total_space,
        location, price,
        hasCamera,
        hasRoof,
        allowOvernight,
        allowBooking,
        description,
        open_time,
        close_time,
        allow24h,
        initialValues: state.owner_park_info.owner_park_info,
    }
}

const mapDispatchToProps = dispatch => ({
    pushEditParkInfo: (park_id, name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h, removeImages) => dispatch(pushEditParkInfo(park_id, name, total_space, location, price, hasCamera, hasRoof, allowOvernight, allowBooking, description, open_time, close_time, allow24h, removeImages)),
    postParkImages: (park_id, images) => dispatch(postParkImages(park_id, images)),
    fetchOwnerParkInfo: (park_id) => dispatch(fetchOwnerParkInfo(park_id))
});

function EditParkInfo(props) {

    const { id } = useParams();

    useEffect(() => {
        props.fetchOwnerParkInfo(id);
    }, [id])

    return (
        <ParkInfoForm
            initialValues={props.initialValues}
            titleForm={"Chỉnh sửa thông tin bãi đỗ"}
            typeForm={"Lưu thông tin"}
            postInfo={props.pushEditParkInfo}
            postImage={props.postParkImages}
            name={props.name}
            total_space={props.total_space}
            location={String(props.location)}
            price={props.price}
            hasCamera={Boolean(props.hasCamera)}
            hasRoof={Boolean(props.hasRoof)}
            allowOvernight={Boolean(props.allowOvernight)}
            allowBooking={Boolean(props.allowBooking)}
            description={props.description}
            open_time={props.open_time}
            close_time={props.close_time}
            allow24h={Boolean(props.allow24h)}
            is24hSelected={Boolean(props.allow24h)} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(EditParkInfo);