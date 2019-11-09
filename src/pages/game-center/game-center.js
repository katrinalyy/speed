import React, { Component } from 'react';
import './game-center.css';
class GameCenter extends Component {
	constructor(props) {
        super(props)
        this.state = {
            score:0
        }
    }

    render() {
        const { score } = this.state;
        return (
            <div className="game-center-box">
                <div className="game-center-score">{score}</div>
                <div 
                    className="game-center-btn" 
                    onClick={this.speedClick.bind(this)} >
                </div>
            </div>
        )
    }

    back(){
        this.props.history.go(-1)
    }

    speedClick(e) {
        let a = this.state.score;
        this.setState({score:++a})
        console.log(e.type)
       
    }
}
export default GameCenter;