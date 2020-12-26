const initialState = {
    issues: null,
    isLoading: true,
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_ALL_ISSUES':
            return {
                ...state,
                issues: payload.issues,
                isLoading: payload.isLoading,
            };
        default:
            return state;
    }
};
