export const INITIAL_STATE = {
    isValid: {
        post: true,
        title: true,
        text: true
    },
    values: {
        post: '',
        title: '',
        text: ''
    },
    isFormReadyToSubmit: false
}

export function formReduser(state, action) {
    switch(action.type) {
        case 'RESET_VALIDITY':
            return {...state, isValid: INITIAL_STATE.isValid};
        case 'SUBMIT': {
            const titleValidity = state.values.title?.trim().length;
            const postValidity = state.values.post?.trim().length;
            const textValidity = state.values.text?.trim().length;
            return {
                ...state,
                isValid: {
                    post: postValidity,
                    title: titleValidity,
                    text: textValidity
                },
                isFormReadyToSubmit: titleValidity && postValidity && textValidity
                
            }
        }
        case 'CLEAR': {
            return {...state, values: INITIAL_STATE.values};
        }
        case 'SET_VALUE': {
            return {...state, values: {...state.values, ...action.payload}};
        }
            
    }
}