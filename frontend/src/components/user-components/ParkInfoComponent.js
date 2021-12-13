import { ImageList, ImageListItem, CircularProgress } from "@mui/material";
import React from "react";
import { baseUrl } from "../../shared/baseUrl";

function RenderParkInfo({ park_info }) {
    if (park_info != null) {
        return (
            <div>
                <div style={{ paddingTop: "15px", display: "inline-flex" }}>
                    {park_info.hasCamera == 1 && <div style={{ marginRight: "10px" }}><i class="fas fa-video"></i> CCTV</div>}
                    {park_info.hasRoof == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="bx:bxs-car-garage"></span> Mái che</div>}
                    {park_info.allowBooking == 1 && <div style={{ marginRight: "10px" }}><span class="iconify" data-icon="cib:hatena-bookmark"></span> Đặt trước</div>}
                    {park_info.allowOvernight == 1 && <div><i class="fas fa-moon"></i> Gửi qua đêm</div>}
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>{park_info.description}</p>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <ImageList sx={{ width: 360 }} cols={3} rowHeight={134}>
                        {park_info.image.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={baseUrl + item.img}
                                    alt=""
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        );
    }
}

const ParkInfo = (props) => {
    if (props.isLoading) {
        return (
            <div>
                <CircularProgress color="success" />
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div>
                <h4>{props.errMess}</h4>
            </div>
        );
    }
    else if (props.park_info != null) {
        return (
            <RenderParkInfo park_info={props.park_info.park_info} />
        );
    }
}

export default ParkInfo;