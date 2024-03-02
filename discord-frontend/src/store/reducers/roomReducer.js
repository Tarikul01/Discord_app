import { roomActions } from "../actions/roomActions";

const initState={
    isUserInRoom:false,
    isUserRoomCreator:false,
    roomDetails:null,
    activeRooms:[],
    localStreams:null,
    audioOnly:false,
    screenSharingStream:null,
    isScreenSharingActive:false,
}
const reducer=(state=initState,action)=>{
switch(action.type){
    case roomActions.OPEN_ROOM:
        return  {
            ...state,isUserInRoom:action.isUserInRoom,
            isUserRoomCreator:action.isUserRoomCreator
        }
    default:
        return state;
}
};
export default reducer;