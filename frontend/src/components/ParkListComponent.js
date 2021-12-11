import React, { useEffect } from "react";
import { AppBar, Tabs, styled, Paper } from "@mui/material";
import { Media, Row, Col } from "reactstrap";
import { useTheme } from "@emotion/react";
import { Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import ParkDetail from "./ParkDetailComponent";
import {
    fetchComments, fetchParkInfo, postComment, fetchParkStatus, postReport, fetchBestParks,
    fetchCheapParks, fetchNearParks
} from "../redux/ActionCreators";
import { useSelector, useDispatch } from "react-redux";
import { ParkList } from "./RenderParkListComponent";
import Map from './Map'

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
    fontSize: theme.typography.pxToRem(18),
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

function ParkListTabs(props) {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [selectedPark, setSelectedPark] = React.useState(-1);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const best_parks = useSelector(state => state.best_parks)
    const cheap_parks = useSelector(state => state.cheap_parks)
    const near_parks = useSelector(state => state.near_parks)
    const park_status = useSelector(state => state.park_status)
    const park_info = useSelector(state => state.park_info)
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()

    useEffect(
        () => {
            if (selectedPark < 0) {
                dispatch(fetchBestParks());
                dispatch(fetchCheapParks());
                dispatch(fetchNearParks());
            }
            if (selectedPark >= 0) {
                dispatch(fetchParkStatus(selectedPark));
                dispatch(fetchParkInfo(selectedPark));
                dispatch(fetchComments(selectedPark));
            }
        }, [selectedPark]
    )

    return (
        
        <Row>
            <Col sm='4' xs='12'>
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
                                        <ParkList parks={best_parks} selectedPark={selectedPark} setSelectedPark={setSelectedPark} />
                                    </Media>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <Media list>
                                        <ParkList parks={cheap_parks} />
                                    </Media>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <Media list>
                                        <ParkList parks={near_parks} />
                                    </Media>
                                </TabPanel>
                            </SwipeableViews>
                        </Paper>
                    </div>
                }
                {
                    parseInt(selectedPark) >= 0 && <div>
                        <ParkDetail
                            park_status={park_status}
                            park_info={park_info}
                            comments={comments}
                            postComment={postComment}
                            postReport={postReport}
                            selectedPark={selectedPark}
                            setSelectedPark={setSelectedPark} />
                    </div>
                }
            </Col>
            <Col>
            <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDFOk5Vvai-PKsIMWPWqJcT23U5zMKaaCQ&callback=initMap&v=weekly`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat= {51.0168864} lng = {105.7855574}
          />
            </Col>
        </Row>
    );
}


export default ParkListTabs;