import React, {Component} from 'react';

class AgeState extends Component {
    render(){
        return(
            <div>
            <h3>{this.props.date}</h3>
            </div>
        )
    }
}

export default AgeState;