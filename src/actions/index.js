import ActionTypes from './ActionTypes';

export const setCardList = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_CARD_LIST, payload: data});
};

export const setSelectedSlot = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_SELECTED_SLOT, payload: data});
};

export const setRowBingos = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_ROW_BINGO, payload: data});
}

export const setColBingos = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_COLUMN_BINGO, payload: data});
}

export const setDiagBingos = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_DIAGONAL_BINGO, payload: data});
}



