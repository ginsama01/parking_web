import ParkListTabs from "./ParkListComponent";
import Start from "./StartComponent";
import { useRouteMatch, Switch, Route, Redirect } from "react-router";


function MainUser() {
    let { path, url } = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={`${url}/start`}><Start /></Route>
                <Route exact path={`${url}/parks`}><ParkListTabs /></Route>
            </Switch>
        </div>
    );
}

export default MainUser;