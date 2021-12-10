import React, { useEffect } from "react"
import ListTable from "./ListTableComponent";
import { connect } from "react-redux";
import { deleteParks, fetchParkList, verifiedPark } from "../../redux/AdminActionCreators";
import SideBar from "./SideBarComponent";

const headCells = [
    {
        id: 'ID',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Tên',
    },
    {
        id: 'isActived',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Giá',
    },
    {
        id: 'location',
        numeric: false,
        disablePadding: false,
        label: 'Vị trí',
    },
    {
        id: 'owner',
        numeric: false,
        disablePadding: false,
        label: 'Chủ sở hữu',
    },
];

const mapStateToProps = state => {
    return {
        park_list: state.park_list,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchParkList: () => dispatch(fetchParkList()),
    deleteParks: (parks_delete) => dispatch(deleteParks(parks_delete)),
    verifiedPark: (park_id) => dispatch(verifiedPark(park_id))
});

function ParkList(props) {

    const [isParksChange, setIsParksChange] = React.useState(false);

    useEffect(
        () => {
            props.fetchParkList()
        }, []
    )

    useEffect(() => {
        if (isParksChange == true) {
            props.fetchParkList();
            setIsParksChange(false);
        }
    }, [isParksChange])

    return (
        <div className="row">
            <div className="col-2"><SideBar /></div>
            <div className="col-10">
                <ListTable
                    rows={props.park_list.park_list}
                    headCells={headCells}
                    typeTable="Bãi đỗ"
                    handleDeleteSelected={props.deleteParks}
                    handleActive={props.verifiedPark}
                    setIsListChange={setIsParksChange} />
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkList);