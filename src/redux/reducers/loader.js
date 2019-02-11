import { HIDE_LOADER, SHOW_LOADER } from '../actionTypes';

const initialState = {
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADER: {
            return {
                ...state,
                loading: true
            };
        }
        case HIDE_LOADER: {
            return {
                ...state,
                loading: false
            };
        }
        default:
            return state;
    }
}
