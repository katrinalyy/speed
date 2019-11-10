import states from './state.js';

function reducer(state = states, action) {
    if (action.type === 'HIGHEST_SCORE') {
        const a = { ...state, score: action.score }
        return a
    }
    return state;
}
export default reducer;