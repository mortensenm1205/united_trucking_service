import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Types from '../Components/Services/Types';
import HeavyDutyTowing from '../Components/Services/Types/HeavyDutyTowing';
import CarTowing from '../Components/Services/Types/CarTowing';

class ScreenServices extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/services" component={Types} />
                <Route path="/services/heavyDutyTowing" component={HeavyDutyTowing} />
                <Route path="/services/carTowing" component={CarTowing} />
            </Switch>
        )
    }
}

export default ScreenServices;