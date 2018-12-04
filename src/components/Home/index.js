import React, { Component } from 'react';
import { downloadImage } from '../../repeats/Image';
import HomeContent from './Content';
import HomeImage from './Image';

class HomeContainer extends Component {

    state = {
        homeImageURL: ""
    }

    componentDidMount() {
        downloadImage(this.props.location.pathname).then(url => {
            this.setState({ homeImageURL: url })
        })
    }

    render() {
        const { location } = this.props;
        const { homeImageURL } = this.state;
        return (
            <div>
                <h1>UNITED TRUCKING SERVICE</h1>
                <HomeContent />
                <HomeImage url={homeImageURL} location={location} />
            </div>
        )
    }
}

export default HomeContainer;
