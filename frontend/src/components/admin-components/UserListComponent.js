import React, { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { fetchUserList, deleteUsers } from "../../redux/AdminActionCreators";
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
    },
    {
        id: 'Penalty',
        numeric: false,
        disablePadding: false,
        label: 'Cảnh cáo',
    },
];

const mapStateToProps = state => {
    return {
        user_list: state.user_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUserList: () => dispatch(fetchUserList()),
    deleteUsers: (users_delete) => dispatch(deleteUsers(users_delete)),
});

function UserList(props) {

    const [isUsersChange, setIsUsersChange] = React.useState(false)

    useEffect(
        () => {
            props.fetchUserList()
        }, []
    )

    useEffect(() => {
        if (isUsersChange == true) {
            props.fetchUserList();
            setIsUsersChange(false);
        }
    }, [isUsersChange])

    return (
        <div className="row">
            <div className="col-2"><SideBar /></div>
            <div className="col-10">
                <ListTable
                    rows={props.user_list.user_list}
                    headCells={headCells}
                    typeTable="Người dùng"
                    handleDeleteSelected={props.deleteUser}
                    setIsListChange={setIsUsersChange} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);