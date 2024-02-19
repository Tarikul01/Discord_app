import { chatActions } from "../actions/chatActions";
const initState={
    chosenChatDetails:null,
    chatType:null,
    messages:[]
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case chatActions.SET_CHOSEN_CHAT_DETAILS:
            return {
                ...state,
                chosenChatDetails:action.chatDetails,
                chatType:action.chatType,
                message:[]
            };
        case chatActions.SET_MESSAGES:
                return {
                    ...state,
                    message:action.message
                };
        default:
            return {
                ...state
            }
    }
}

export default reducer;