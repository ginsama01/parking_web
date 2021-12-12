import { connect } from "react-redux";
import { fetchOwnerParkInfo, fetchParkReview } from "../../redux/OwnerActionCreators";
import {
    ImageList, ImageListItem, Grid, Button, Rating, Avatar, ListItem,
    List, ListItemAvatar, ListItemText, Divider, Paper
} from "@mui/material";
import { ListInlineItem } from "reactstrap";
import { baseUrl } from "../../shared/baseUrl";
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function RenderParkReview(props) {
    const { comments } = props;
    return (
        <div>
            <Paper style={{ maxHeight: 320, overflow: 'auto', backgroundColor: "#E5E5E5" }}>
                <List sx={{ width: '100%' }}>
                    {comments.map((comment) => {
                        return (
                            <div>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>{comment.name[0]}</Avatar>
                                    </ListItemAvatar>
                                    <ListInlineItem>
                                        <ListItemText primary={comment.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Rating size="small" name="rating" value={comment.rating} precision={0.1} readOnly />
                                                    <div>{comment.content}</div>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListInlineItem>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </div>
                        );
                    })}
                </List>
            </Paper>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        park_info: state.owner_park_info.owner_park_info,
        park_review: state.owner_park_review.owner_park_review
    }
}

const mapDispatchToProps = dispatch => ({
    fetchOwnerParkInfo: (park_id) => dispatch(fetchOwnerParkInfo(park_id)),
    fetchParkReview: (park_id) => dispatch(fetchParkReview(park_id))
});

function ShowParkInfo(props) {

    const { id } = useParams();

    useEffect(() => {
        props.fetchOwnerParkInfo(id);
        props.fetchParkReview(id);
        console.log(props.park_review.comment)
    }, [id])

    const data = {
        labels: ["5 sao", "4 sao", "3 sao", "2 sao", "1 sao"],
        datasets: [
            {
                label: "Đánh giá",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                data: [
                    props.park_review.rating_five,
                    props.park_review.rating_four,
                    props.park_review.rating_three,
                    props.park_review.rating_two,
                    props.park_review.rating_one,
                ]
            }
        ]
    }

    return (
        <div>
            <div>
                <h2>ID: {props.park_info.id} - {props.park_info.name}</h2>
                <div className="row">
                    <div className="col-5">
                        {/* <ImageList sx={{ width: 360 }} cols={3} rowHeight={150}>
                            {props.park_info.image_url.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={baseUrl + item}
                                        alt=""
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList> */}
                    </div>
                    <div className="col-7">
                        <Grid container spacing={2}>
                            <Grid item xs={12}><i class="fas fa-map-marker-alt"></i> {props.park_info.location}</Grid>
                            <Grid item xs={12}><i class="fas fa-car"></i> {props.park_info.total_space} xe</Grid>
                            <Grid item xs={12}><i class="fas fa-money-check-alt"></i> {props.park_info.price} K</Grid>
                            <Grid item xs={12}>
                                <div style={{ display: "inline-flex" }}>
                                    {props.park_info.hasCamera == 1 && <div style={{ marginRight: "10px" }}><i class="fas fa-video"></i> CCTV</div>}
                                    {props.park_info.hasRoof == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="bx:bxs-car-garage"></span> Mái che</div>}
                                    {props.park_info.allowBooking == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="cib:hatena-bookmark"></span> Đặt trước</div>}
                                    {props.park_info.allowOvernight == 1 && <div><i class="fas fa-moon"></i> Gửi qua đêm</div>}
                                </div>
                            </Grid>
                            <Grid item xs={12}><i class="fas fa-file-medical"></i> {props.park_info.description}</Grid>
                            <Grid item xs={12}><i class="far fa-clock"></i> {props.park_info.allow24h ? ("Mở cửa 24/24") : ("Mở cửa từ: " + props.park_info.open_time + " - " + props.park_info.close_time)}</Grid>
                        </Grid>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div>{props.park_review.avg_rating}</div>
                        <div>{props.park_review.total_rating} lượt đánh giá</div>
                    </div>
                    <div className="col-4">
                        <Bar
                            data={data}
                            options={{
                                indexAxis: 'y',
                                plugins: {
                                    title: {
                                        display: true,
                                        text: 'Lượng đánh giá bãi đỗ'
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="col-6">
                        <RenderParkReview comments={props.park_review.comment}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowParkInfo);