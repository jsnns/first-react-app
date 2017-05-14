import React, { Component, PropTypes } from 'react';

class AuthenticatedRoute extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    };
    
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            ...this.getStoreData()
        };
    }

    componentWillMount() {
        
    }
}