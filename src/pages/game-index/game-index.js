import React, { Component } from 'react';
import './game-index.css'
import store from '../../store';
import { rmStorage } from '../../common/util';
import actions from '../../store/actions'
class GameIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: store.getState() ? store.getState().score : 0
        }
    }

    render() {
        const { score } = this.state;
        return (
            <div className="game-index-box">
                <div className='game-index-talk'>
                    最高分
                    <div className='arrow'></div>
                </div>
                <div className="game-score-box">
                    <div className="score-bg"></div>
                    <div className="game-score">{score}</div>
                </div>
                <div className="game-button" onClick={this.buttonClick.bind(this)}></div>
                <div className='clear-history-storage' onClick={this.clear.bind(this)}> 一键清除历史记录</div>
            </div>
        )
    }

    buttonClick() {
        this.props.history.push('/center');
    }

    clear() {
        rmStorage('SCORE_HIGH');
        actions.highScore(0);
        this.setState({
            score: 0
        })
    }
}
export default GameIndex;