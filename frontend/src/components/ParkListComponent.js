import React, { Component, useEffect } from "react";
import {
    Rating, CardMedia, CardContent, Box, Card, CardHeader,
    AppBar, Tabs, styled, Paper, ButtonBase, CircularProgress
} from "@mui/material";
import { baseUrl } from '../shared/baseUrl';
import { Loading } from "./LoadingComponent";
import { Media } from "reactstrap";
import { useTheme } from "@emotion/react";
import { Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import ParkDetail from "./ParkDetailComponent";
import { fetchComments, fetchParkInfo, postComment, fetchParkStatus, postReport } from "../redux/ActionCreators";
import { connect } from "react-redux";


function RenderParkCard({ park, selectedPark, setSelectedPark }) {
    const handleSelect = (id) => {
        setSelectedPark(id);
    }
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <ButtonBase
                    style={{ textAlign: "initial", width: "100%", height: "100%" }}
                    onClick={() => handleSelect(park.id)} >
                    <CardMedia
                        component="img"
                        sx={{ width: 150 }}
                        image={baseUrl + park.image}
                        alt={park.name} />
                    <Box>
                        <CardContent>
                            <h5>{park.name}</h5>
                            <Box sx={{ display: 'flex' }}>
                                <Rating size="small" name="rating" value={park.rate} precision={0.1} readOnly />
                                <Box sx={{ ml: 1 }}>({park.numOfRate})</Box>
                            </Box>
                            <Box sx={{ display: 'flex' }} style={{ marginTop: "10px" }}>
                                <div>
                                    <h5><i class="fas fa-dollar-sign"></i> {park.price}</h5>
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <h5><i class="fas fa-route"></i> {park.distance}</h5>
                                </div>
                            </Box>
                        </CardContent>
                    </Box>
                </ButtonBase>
            </Card>
        </div >
    );
}

function ParkList(props) {
    const { selectedPark, setSelectedPark } = props;
    if (props.isLoading) {
        return (
            <div className="container">
                <CircularProgress color="success" />
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className='container'>
                <h4>{props.errMess}</h4>
            </div>
        );
    } else {
        return (
            <div className="container">
                <Media list>
                    {props.parks.parks.map((park) => {
                        return (
                            <div key={park.id} style={{ margin: "15px 0px 0px -70px" }}>
                                <RenderParkCard park={park} selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
                            </div>
                        );
                    })}
                </Media>
            </div>
        );
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other} >
            {value === index && (
                <div>{children}</div>
            )}
        </div>
    );
}

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    fontFamily: 'Nunito',
    '&:hover': {
        color: '#3E7C17',
        opacity: 1,
        fontWeight: "Bold",
    },
    '&.Mui-selected': {
        color: '#3E7C17',
        fontWeight: "Bolder",
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const mapStateToProps = state => {
    return {
        park_status: state.park_status,
        park_info: state.park_info,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => ({
    postComment: (park_id, rating, comment) => dispatch(postComment(park_id, rating, comment)),
    postReport: (park_id, content) => dispatch(postReport(park_id, content)),
    fetchParkStatus: (park_id) => { dispatch(fetchParkStatus(park_id)) },
    fetchParkInfo: () => { dispatch(fetchParkInfo()) },
    fetchComments: () => { dispatch(fetchComments()) }
});

function ParkListTabs(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const { parks } = props;
    const [selectedPark, setSelectedPark] = React.useState(-1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }


    useEffect(
        () => {
            if (selectedPark >= 0) {
                props.fetchParkStatus(selectedPark);
                props.fetchParkInfo();
                props.fetchComments();
            }
        }, [selectedPark]
    )

    return (
        <div className="row">
            <div className="col-4">
                {parseInt(selectedPark) == -1 &&
                    <div class="park-list-tab">
                        <AppBar position="static" color="transparent">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                                aria-label="full width tabs" >
                                <AntTab label="Tốt nhất" {...allyProps(0)} />
                                <AntTab label="Rẻ nhất" {...allyProps(1)} />
                                <AntTab label="Gần nhất" {...allyProps(2)} />
                            </Tabs>
                        </AppBar>
                        <Paper class="park-list-tab" style={{ maxHeight: 450, overflow: 'auto' }}>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <Media list>
                                        <ParkList parks={parks} selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
                                    </Media>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Media list>
                                        <ParkList parks={parks} />
                                    </Media>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <Media list>
                                        <ParkList parks={parks} />
                                    </Media>
                                </TabPanel>
                            </SwipeableViews>
                        </Paper>
                    </div>
                }
                {
                    parseInt(selectedPark) >= 0 && <div>
                        <ParkDetail
                            park_status={props.park_status}
                            park_info={props.park_info}
                            comments={props.comments}
                            postComment={props.postComment}
                            postReport={props.postReport}
                            selectedPark={selectedPark}
                            setSelectedPark={setSelectedPark} />
                    </div>
                }
            </div>
            <div className="col-4"></div>

        </div>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(ParkListTabs);