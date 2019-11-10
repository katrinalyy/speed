import store from './index';
import { setStorage } from "../common/util"
const actions = {
    highScore(score) {
        setStorage('SCORE_HIGH',score)
        store.dispatch({
            type: 'HIGHEST_SCORE',
            score: score
        })

    },

}
export default actions;
