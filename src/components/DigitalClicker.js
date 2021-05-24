// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
    state = {
        timesClicked: 0,
    }

    handleOnClick = (e) => {
        this.setState(previousState => {
            return {timesClicked: previousState.timesClicked + 1}
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.handleOnClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
export default DigitalClicker