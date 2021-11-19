import * as tabActionTypes from "./tabActions"


const initialState = {
    isTradeModalVisible: false

}


const tabReducer = (state = initalState, action) => {
    switch (action.type) {
        case tabActionTypes.SET_TRADE_MODEL_VISIBILITY:
            return {
                ...state,
                isTradeModalVisible: action.payload.isTradeModalVisible
            }
        default:
            return state
    }
}

export default tabReducer