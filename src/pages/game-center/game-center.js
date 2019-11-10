import React, { Component } from 'react';
import './game-center.css';
class GameCenter extends Component {
	constructor(props) {
        super(props)
        this.state = {
            score:0,
            classNameStatus: false,
            time:''
        }
        this.timeConvert = this.timeConvert.bind(this); 
    }

    render() {
        const { score, classNameStatus, time } = this.state;
        return (
            <div className="game-center-box">
                <div className="game-center-time">倒计时：{time}</div>
                <div className="game-center-score">{score}</div>
                <div 
                    className={classNameStatus ? 'game-center-btn-color':'game-center-btn'} 
                    onTouchStart={this.speedClick.bind(this)} 
                    onTouchEnd={this.speedClick.bind(this)}>
                </div>
            </div>
        )
    }

    componentWillMount(){
        this.timeConvert(60);
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

    // 传入时间以s为单位
    timeConvert(time){
        console.log("time====",time)
        time = parseInt(time);
        const mm = Math.floor( time / 60 ).toString().padStart(2,'0');
        const ss = (time % 60).toString().padStart(2,'0');
        const timeString = `${mm}:${ss}`;
        this.setState({
            time: timeString
        })
        
    }
}
export default GameCenter;