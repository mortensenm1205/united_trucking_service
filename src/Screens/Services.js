import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import HeavyDutyTowing from '../Components/Services/Types/HeavyDutyTowing';

class ScreenServices extends Component {
    render() {
        return(
            <Switch>
                <Route path={"/services/:service"} component={HeavyDutyTowing} />
            </Switch>
        )
    }
}

export default ScreenServices;