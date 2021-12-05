import { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { fetchOwnerList } from "../../redux/AdminActionCreators";
import SideBar from "./SideBarComponent";

const headCells = [
    {
        id: 'ID',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: false,
        label: 'Tài Khoản',
    },
    {
        id: 'isActived',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'phone',
        numeric: false,
        disablePadding: false,
        label: 'Điện thoại',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Địa chỉ',
    }
];

const mapStateToProps = state => {
    return {
        owner_list: state.owner_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOwnerList: () => dispatch(fetchOwnerList())
});

function OwnerList(props) {

    useEffect(
        () => {
            props.fetchOwnerList()
        }, []
    )

    return (

        // viet isLoading and errMess
        <div className="row">
            <div className="col-2"><SideBar /></div>
            <div className="col-10">
                <ListTable rows={props.owner_list.owner_list} headCells={headCells} typeTable="Chủ bãi đỗ" />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerList);