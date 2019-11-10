import { getStorage } from './../common/util.js';
export default {
    score: getStorage('SCORE_HIGH') || 0
}