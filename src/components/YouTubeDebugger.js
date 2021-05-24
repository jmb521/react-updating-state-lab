// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component {
    state = {
        
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }

    handleOnClick = (e) => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }

    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    ...this.state.settings.video, 
                    resolution: '720p'
                }
            }
        })
    }
    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleOnClick}>Bitrate</button>
                <button className="resolution" onClick={this.handleClickResolution}>Resolution</button>
            </div>
        ) 
    }
}
export default YouTubeDebugger