import ActionTypes from './ActionTypes';

export const setCardList = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SET_CARD_LIST, payload: data});;
};




