export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ICON':
            state.iconName = action.payload.newIconName
            return {...state}

        case 'REMOVE_ALL':
            const newMessages = [...state.removeList]
            newMessages.push(action.payload.selectedMessage);
            state.removeList = newMessages;
            
    //     const deletedTitle = moves. toLowerCase();
    //     const messagesIndex = postList.findIndex((msg) => {
    //         const selectedTime = msg.postText 
    //         return selectedTime.toLowerCase() === deletedTitle ? postList.indexOf(selectedTime) : null


        default :
            return state;
    }
};

