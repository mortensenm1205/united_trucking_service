import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ServicesContainer from "../components/Services";
import HeavyDutyTowing from "../components/Services/Types/HeavyDutyTowing";
import CarTowing from "../components/Services/Types/CarTowing";
import RoadsideAssistance from "../components/Services/Types/Roadside";
import WreckerService from "../components/Services/Types/WreckerService";

class ScreenServices extends Component {
  render() {
    return (
      <ServicesContainer>
        <Switch>
          <Route path="/services/heavyDutyTowing" component={HeavyDutyTowing} />
          <Route path="/services/carTowing" component={CarTowing} />
          <Route path="/services/roadsideAssistance" component={RoadsideAssistance} />
          <Route path="/services/wreckerService" component={WreckerService} />
        </Switch>
      </ServicesContainer>
    );
  }
}

export default ScreenServices;
