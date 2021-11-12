import React from "react";
import { CardMedia, CardContent, Box, Card, AppBar, Tabs, styled, Paper } from "@mui/material";
import { baseUrl } from '../shared/baseUrl';
import { Loading } from "./LoadingComponent";
import { Media } from "reactstrap";
import { useTheme } from "@emotion/react";
import { Tab } from "@mui/material";
import SwipeableViews from "react-swipeable-views";


function RenderParkCard({ park }) {
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={baseUrl + park.image}
                    alt={park.name} />
                <Box sx={{ display: 'flex' }}>
                    <CardContent>
                        <h4>
                            {park.name}
                        </h4>
                        <p>
                            {park.description}
                        </p>
                        <Box sx={{ display: 'flex', alignItems: "center" }}>
                            <div className="col offset-1">
                                <h4>
                                    <i class="fas fa-dollar-sign"></i> {park.price}
                                </h4>
                            </div>
                            <div className="col order-6">
                                <h4>
                                    <i class="fas fa-route"></i> {park.distance}
                                </h4>
                            </div>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </div>
    );
}

function ParkList(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {props.parks.parks.map((park) => {
                            return (
                                <div key={park.id} class="park-card">
                                    <RenderParkCard park={park} />
                                </div>
                            );
                        })}
                    </Media>
                </div>
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
    fontSize: theme.typography.pxToRem(22),
    fontFamily: 'Patrick Hand',
    '&:hover': {
        color: '#40a9ff',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#1890ff',
        fontWeight: "Bolder",
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function ParkListTabs(props) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    return (
        <div className="col-5">

            <div class="park-list-tab">
                <AppBar position="static" color="transparent">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs" >
                        <AntTab label="Tốt nhất" {...a11yProps(0)} />
                        <AntTab label="Rẻ nhất" {...a11yProps(1)} />
                        <AntTab label="Gần nhất" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <Paper style={{ maxHeight: 450, overflow: 'auto' }}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div>
                                <Media list>
                                    <ParkList parks={props.parks} />
                                </Media>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div>
                                <Media list>
                                    <ParkList parks={props.parks} />
                                </Media>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <div>
                                <Media list>
                                    <ParkList parks={props.parks} />
                                </Media>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Paper>
            </div>
        </div>
    );
}


export default ParkListTabs;