import ActionTypes from '../actions/ActionTypes';

export default function cardSliceData(state = {}, action) {
    const payload = action.payload;
    let newState = {};
    switch (action.type) {
        case ActionTypes.SET_CARD_LIST:
            newState =  {...state, card: payload};
            break;
        case ActionTypes.CLEAR_CARD_LIST:
            newState = {};
            break;
        default:
            newState = state;
    }
    return newState;
}