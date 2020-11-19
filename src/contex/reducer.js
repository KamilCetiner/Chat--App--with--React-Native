export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ICON':
            state.iconName = action.payload.newIconName
            return {...state}

        case 'ADD_USER':
            state.userName = action.paylod.newUserName
            return {...state}

        default :
            return state;
    }
};

