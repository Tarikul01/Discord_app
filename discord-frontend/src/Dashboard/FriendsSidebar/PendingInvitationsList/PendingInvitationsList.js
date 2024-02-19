import React from 'react';
import {styled} from "@mui/system";
import PendingInvitationsListItem from './PendingInvitationsListitem';
import {connect} from "react-redux"
const MainContainer=styled('div')({
    width:"100%",
    height:'22%',
    display:"flex",
    flexDirection:'column', 
    alignItems:'center',
    overflow:"auto"
})

const PendingInvitationsList = ({pendingFriendsInvitations}) => {
  return (
    <MainContainer>
{pendingFriendsInvitations.map((f)=>(
  <PendingInvitationsListItem
   key={f._id}
   id={f._id}
   username={f.senderId.username}
   mail={f.senderId.mail}

  />
))}

    </MainContainer>
  )
}
const mapStoreStateToProps=({friends})=>{
  return {
    ...friends
  }
}

export default connect(mapStoreStateToProps)(PendingInvitationsList); 
