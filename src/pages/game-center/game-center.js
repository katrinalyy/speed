import React, { Component } from 'react';
import './game-center.css';

const EVALUATE = {
    DEFAULT: '你神游了！！！！',
    ONE: '你好菜啊!',
    TWO: '还得努力呦!',
    THREE: '你好棒啊!',
    FOUR: '哇! 大神操作.'
}

const GameOver = (props) => {
    const { title, score, isGameOver, againStart } = props;
    return (
        isGameOver ? <div className='game-over-box'>
            <div className='score-max'>本次最高分：{score}</div>
            <div className='score-max-title'>{title}</div>
            <div className='again-button' onClick={againStart}>再来一次</div>
        </div> : ''
    )
}

class GameCenter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,               //分数
            classNameStatus: false, //指纹点击样式
            time: '',               //倒计时展示时间
            gameover: false,        //是否游戏结束
            title: ''               //游戏结束语
        }
    }

    render() {
        const { score, classNameStatus, time, gameover, title } = this.state;
        return (
            <div className="game-center-box">
                <div className="game-center-time">倒计时：{time}</div>
                <div className="game-center-score">{score}</div>
                <div
                    className={classNameStatus ? 'game-center-btn-color' : 'game-center-btn'}
                    onTouchStart={this.speedClick.bind(this)}
                    onTouchEnd={this.speedClick.bind(this)}>
                </div>
                <GameOver isGameOver={gameover} score={score} title={title} againStart={this.againStart.bind(this)} />
            </div>
        )
    }

    componentWillMount() {
        // 初始化倒计时最开始时间
        this.timeLength = 30;
        this.timeConvert(this.timeLength);
    }

    componentDidMount() {
        // 开始倒计时
        this.startCountDown();
    }

    back() {
        this.props.history.go(-1)
    }

    speedClick(e) {
        // 游戏结束不允许点击
        if (this.state.gameover) {
            return;
        }
        if (e.type === 'touchstart') {
            this.setState({
                classNameStatus: true
            })
        }
        if (e.type === 'touchend') {
            let a = this.state.score;
            this.setState({
                score: ++a,
                classNameStatus: false
            })
        }
    }

    // 传入时间以s为单位
    timeConvert(time) {
        // 时间转换成mm:ss格式输出
        time = parseInt(time);
        const mm = Math.floor(time / 60).toString().padStart(2, '0');
        const ss = (time % 60).toString().padStart(2, '0');
        const timeString = `${mm}:${ss}`;
        this.setState({
            time: timeString
        })
        if (!time) {
            this.isGameOverFun();
        }
    }

    isGameOverFun() {
        // 倒计时为0后的处理
        const { score } = this.state;
        const title = this.handleTitle(score);
        this.setState({ gameover: true, title });
        clearInterval(this.timer);
    }

    handleTitle(score) {
        // 游戏结束语，标准为30s
        if (score > 300) {
            return EVALUATE.FOUR;
        } else if (score > 250) {
            return EVALUATE.THREE;
        } else if (score > 200) {
            return EVALUATE.TWO;
        } else if (score > 100) {
            return EVALUATE.ONE;
        } else {
            return EVALUATE.DEFAULT
        }
    }

    startCountDown() {
        let time = Number(this.timeLength);
        this.timer = setInterval(() => {
            --time;
            this.timeConvert(time);
        }, 1000)
    }

    againStart() {
        // 再次游戏重制
        this.setState({
            score: 0,
            gameover: false,
        })
        this.timeLength = 30;
        this.startCountDown();
    }
}
export default GameCenter;