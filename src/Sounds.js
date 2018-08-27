import Sound from 'react-sound';
import soundfile from './sounds/Reignite.mp3';
import soundclip from './sounds/voiceclips/Comment.m4a';
import React, {Component} from 'react';

class Sounds extends Component {
    render(){

        if(this.props.soundid === "comment"){
            return(
                <div>
                    <Sound url={soundclip} playStatus={Sound.status.PLAYING}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying} />    
                </div>
            );                
        }
        return(            
            <div>
                <h1>hhhh</h1>
                <Sound url={soundfile} playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying} />
            </div>
        );
    }
}

export default Sounds;