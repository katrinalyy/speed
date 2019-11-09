import React, { Component } from 'react';
import './game-index.css'
class GameIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }

    render() {
        const { score } = this.state;
        return (
            <div className="game-index-box">
                <div className="game-score-box">
                    <div className="score-bg"></div>
                    <div className="game-score">{score}</div>
                </div>
                
                <div className="game-button" onClick={this.buttonClick.bind(this)}></div>
            </div>
        )
    }

    buttonClick() {
        this.props.history.push('/center');
    }
}
export default GameIndex;