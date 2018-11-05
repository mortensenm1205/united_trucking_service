import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import HeavyDutyTowing from '../Components/Services/Types/HeavyDutyTowing';
import Services from '../Components/Services';

class ScreenServices extends Component {
    render() {
        return(
            <Switch>
                <Route path="/services" component={Services} />
                <Route path="/services/:service" component={HeavyDutyTowing} />
            </Switch>
        )
    }
}

export default ScreenServices;