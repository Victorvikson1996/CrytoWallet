export const SET_TRADE_MODAL_VISIBILITY = 'SET_TRADE_MODAL_VISIBILITY'


export const setTradeModalVisibilitySucess = (isVisible) => ({
    type: SET_TRADE_MODEL_VISIBILITY,
    payload: { isVisible }
})


export function setTradeModalVisibility(isVisible) {
    return dispatch => {
        dispatch(setTradeModalVisibilitySucess(isVisible))

    }
}