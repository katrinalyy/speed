import React, { Component } from 'react';
import './game-center.css';
const GameOver = (props)=> {
    const { title, score, isGameOver} = props;
    return (
        isGameOver ?  <div className='game-over-box'>
            <div className='score-max'>本次最高分：{score}</div>
            <div className='score-max-title'>{title}</div>
            <div className='again-button'>再来一次</div>
        </div> : ''
    )
}
class GameCenter extends Component {
	constructor(props) {
        super(props)
        this.state = {
            score:0,
            classNameStatus: false
        }
    }

    render() {
        const { score, classNameStatus } = this.state;
        return (
            <div className="game-center-box">
                <div className="game-center-score">{score}</div>
                <div 
                    className={classNameStatus ? 'game-center-btn-color':'game-center-btn'} 
                    onTouchStart={this.speedClick.bind(this)} 
                    onTouchEnd={this.speedClick.bind(this)}>
                </div>
            </div>
        )
    }

    back(){
        this.props.history.go(-1)
    }

    speedClick(e) {
        if( e.type === 'touchstart'){
            this.setState({
                classNameStatus: true
            })
        }
        if ( e.type === 'touchend' ) {
            let a = this.state.score;
            this.setState({
                score: ++a,
                classNameStatus: false
            })
        }
        
       
    }
}
export default GameCenter;