import React, { Component } from 'react';
import TypeSelection from './Selection';

class TypesContainer extends Component {

    change = e => {
        const { value } = e.currentTarget;
        const { history } = this.props;
        history.push("/services/" + camelText(value));
        console.log(this.props)
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <TypeSelection change={this.change} />
                {children}
            </div>
        )
    }
}

const camelText = text => {
    return text.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

export default TypesContainer;