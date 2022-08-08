import ActionTypes from '../actions/ActionTypes';

const initialState = {
    card: [],
    slotsAnnounced: []
}

export default function cardSliceData(state = initialState, action) {
    const payload = action.payload;
    let newState = {};
    switch (action.type) {
        case ActionTypes.SET_CARD_LIST:
            newState =  {...state, card: payload};
            break;
        case ActionTypes.SET_SELECTED_SLOT:
            newState = {...state, slotsAnnounced: payload};
            break;
        case ActionTypes.SET_COLUMN_BINGO:
            newState = {...state, rowBingos: payload};
            break;
        case ActionTypes.SET_ROW_BINGO:
            newState = {...state, columnBingos: payload};
            break;
        case ActionTypes.SET_DIAGONAL_BINGO:
            newState = {...state, diagonalBingos: payload};
            break;
        case ActionTypes.CLEAR_CARD_LIST:
            newState = {};
            break;
        default:
            newState = state;
    }
    return newState;
}