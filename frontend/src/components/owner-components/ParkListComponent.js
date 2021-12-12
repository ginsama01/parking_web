import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, Grid, Stack } from '@mui/material';
import { connect } from 'react-redux';
import { fetchOwnerParks, deletePark } from "../../redux/OwnerActionCreators";
import { useHistory } from "react-router-dom";
import AlertDialog from '../DialogComponent';

function ParkCard(props) {

    const { park, deletePark } = props;

    const handleSubmitDelete = (event) => {
        deletePark(park.id)
    }

    return (
        <Card sx={{ width: 400, height: 400 }} style={{ backgroundColor: '#DFEEEA' }}>
            <CardHeader
                title={"ID: " + park.id + " - " + park.name}
            />
            <CardMedia
                component="img"
                height="194"
                image="../../../public/assets/logo192.png"
                alt={park.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Địa chỉ: {park.location}
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={2} direction="row">
                    <AlertDialog
                        title={"Chắc chắn muốn xóa"}
                        content={"Bạn chắc chắn muốn xóa bãi đỗ ID: " + park.id + " " +  park.name}
                        label={"Xóa"}
                        color={"warning"}
                        handleAction={handleSubmitDelete} />
                    {/* <Button variant="contained" color="warning">Xóa</Button> */}
                    <Button variant="contained" color="info">Xem</Button>
                    <Button variant="contained" color="success">Quản lý</Button>
                </Stack>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        owner_parks: state.owner_parks,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOwnerParks: () => dispatch(fetchOwnerParks()),
    deletePark: (park_id) => dispatch(deletePark(park_id))
});

function OwnerParks(props) {

    const history = useHistory();

    React.useEffect(() => {
        props.fetchOwnerParks()
    }, [])

    return (
        <div>
            <Grid align='center' style={{ margin: "20px 0px" }}>
                <h1>Danh sách bãi đỗ</h1>
            </Grid>
            <div style={{ margin: "3% 0% 3% 3%" }}>
                {props.owner_parks.owner_parks.length > 0 &&
                    <Grid container spacing={4}>
                        <Grid item>
                            <Card sx={{ width: 400, height: 400 }} style={{ backgroundColor: '#CEE5D0' }}>
                                <div style={{ margin: "90px 0px 0px 130px" }}><i class="far fa-plus-square fa-10x"></i></div>
                                <CardActions>
                                    <Button variant="contained" color="secondary"
                                        style={{ margin: "20px 0px 0px 110px" }}
                                        onClick={() => history.push("/owner/newpark")}>Thêm bãi đỗ mới</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        {props.owner_parks.owner_parks.map((park) => {
                            return (
                                <Grid item>
                                    <ParkCard
                                        park={park}
                                        deletePark={props.deletePark} />
                                </Grid>
                            );
                        })}</Grid>}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnerParks);