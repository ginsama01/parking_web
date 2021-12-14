import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchParkStatus, fetchBookList, postNewStatus, putBooking, deleteBooking } from "../../redux/OwnerActionCreators";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { Grid, CircularProgress, IconButton, Stack } from "@mui/material";
import AlertDialog from "../DialogComponent"

function ParkStatus(props) {
    const { park_status, book_list, postNewStatus, setIsChange } = props;
    const iniFreeNum = (park_status.total_space - park_status.total_in - book_list.length);
    const [freeNum, setFreeNum] = useState(iniFreeNum);

    useEffect(() => {
        setFreeNum(iniFreeNum)
    }, [iniFreeNum])

    // thêm hay bớt xe trong bãi đỗ
    const handleChangeStatus = (value) => {
        postNewStatus(park_status.park_id, value);
        setFreeNum(park_status.total_space - park_status.total_in - book_list.length);
        setIsChange(true);
    }
    return (
        <div style={{ margin: "20px" }}>
            <Grid align='left' style={{ color: "#22577E", marginBottom: "30px" }}>
                <h3 style={{ fontWeight: "bolder" }}>Quản lý trạng thái</h3>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>Sức chứa: {park_status.total_space}</Grid>
                <Grid item xs={12}>
                    Số lượng xe hiện tại:
                    {park_status.total_in > 0 ?
                        (<IconButton color="success" aria-label="close" size="large"
                            onClick={() => handleChangeStatus(false)} >
                            <i class="far fa-minus-square"></i>
                        </IconButton>) :
                        (<IconButton color="success" aria-label="close" size="large" >
                            <i class="far fa-minus-square"></i>
                        </IconButton>)}
                    {park_status.total_in}
                    {park_status.total_in < (park_status.total_space - book_list.length) ?
                        (<IconButton color="success" aria-label="close" size="large"
                            onClick={() => handleChangeStatus(true)} >
                            <i class="far fa-plus-square"></i>
                        </IconButton>)
                        : (<IconButton color="success" aria-label="close" size="large" >
                            <i class="far fa-plus-square"></i>
                        </IconButton>)}
                </Grid>
                <Grid item xs={12}>Số lượng xe đặt trước: {book_list.length}</Grid>
                <Grid item xs={12}>Số chỗ trống: {freeNum}</Grid>
            </Grid>
        </div>
    );
}

function BookList(props) {
    const { book_list, handleDeleteBooking, handlePutBooking, setIsChange } = props;
    
    // xóa một lượt đặt trước
    const deleteBooking = (pending_id) => {
        handleDeleteBooking(pending_id);
        setIsChange(true);
    }

    // xác nhận lượt đặt trước
    const putBooking = (pending_id) => {
        handlePutBooking(pending_id);
        setIsChange(true);
    }
    
    return (
        <div style={{ margin: "20px" }}>
            <Grid align='center' style={{ color: "#22577E", marginBottom: "30px" }}>
                <h3 style={{ fontWeight: "bolder" }}>Các xe đặt trước bãi đỗ</h3>
            </Grid>
            <Paper style={{ maxHeight: 800, overflow: 'auto' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="booking list table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="left">Tài khoản</TableCell>
                                <TableCell align="left">Người đặt trước</TableCell>
                                <TableCell align="right">Số điện thoại</TableCell>
                                <TableCell align="center">Thời gian gửi</TableCell>
                                <TableCell align="center">Hành động</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {book_list.map((row) => (
                                <TableRow
                                    key={row.pending_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.pending_id}
                                    </TableCell>
                                    <TableCell align="left">{row.username}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="center">{row.time_start}</TableCell>
                                    <TableCell align="center">
                                        <Stack spacing={2} direction="row">
                                            <AlertDialog
                                                title={"Xóa"}
                                                content={row.name + " đã không đến bãi đỗ của bạn để gửi xe?"}
                                                label={"Xóa"}
                                                color={"warning"}
                                                handleAction={() => deleteBooking(row.pending_id)} />
                                            <AlertDialog
                                                title={"Xác nhận"}
                                                content={row.name + " đã đến gửi xe tại bãi đỗ của bạn"}
                                                label={"Xác nhận"}
                                                color={"success"}
                                                handleAction={() => putBooking(row.pending_id)} />
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        book_list: state.book_list,
        owner_park_status: state.owner_park_status
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBookList: (park_id) => dispatch(fetchBookList(park_id)),
    fetchParkStatus: (park_id) => dispatch(fetchParkStatus(park_id)),
    postNewStatus: (park_id, value) => dispatch(postNewStatus(park_id, value)),
    putBooking: (pending_id) => dispatch(putBooking(pending_id)),
    deleteBooking: (pending_id) => dispatch(deleteBooking(pending_id))
});

function OwnerParkStatus(props) {
    const { id } = useParams();
    const [isChange, setIsChange] = useState(false);

    useEffect(() => {
        props.fetchBookList(id);
        props.fetchParkStatus(id);
    }, [id])

    useEffect(() => {
        if (isChange == true) {
            props.fetchBookList(id);
            props.fetchParkStatus(id);
            setIsChange(false)
        }
    }, [isChange])

    if (props.book_list.isLoading || props.owner_park_status.isLoading) {
        return (
            <div>
                <CircularProgress />
            </div>
        );
    } else if (props.book_list.errMess || props.owner_park_status.errMess) {
        return (
            <div>
                <h4>{props.book_list.errMess}</h4>
                <h4>{props.owner_park_status.errMess}</h4>
            </div>
        );
    } else if (props.book_list.book_list != null && props.owner_park_status.owner_park_status != null) {
        return (
            <div>
                <Grid align='center' style={{ color: "#22577E", margin: "40px" }}>
                    <h1 style={{ fontWeight: "bolder" }}>ID: {props.owner_park_status.owner_park_status.park_id} - {props.owner_park_status.owner_park_status.name}</h1>
                </Grid>
                <div className='row'>
                    <div className="col-1"></div>
                    <div className="col-3">
                        <ParkStatus
                            park_status={props.owner_park_status.owner_park_status}
                            book_list={props.book_list.book_list}
                            postNewStatus={props.postNewStatus}
                            setIsChange={setIsChange} />
                    </div>
                    <div className="col-8">
                        <BookList
                            book_list={props.book_list.book_list}
                            handlePutBooking={props.putBooking}
                            handleDeleteBooking={props.deleteBooking}
                            setIsChange={setIsChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerParkStatus);