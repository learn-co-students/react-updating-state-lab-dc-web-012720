// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {

    constructor(){
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resoClick = () => {
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

    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.bitClick}></button>
                <button className="resolution" onClick={this.resoClick}></button>
            </div>
        )

    }
}

export default YouTubeDebugger