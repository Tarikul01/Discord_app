import React from 'react';
import {styled} from "@mui/system";
import PendingInvitationsListItem from './PendingInvitationsListitem';

const DummyFnd=[
  {
    _id:'1',
    senderId:{
      username:'Mark',
      mail:"dummy@ad.com"
    }
  },
  {
    _id:'2',
    senderId:{
      username:'John',
      mail:"John@ad.com"
    }
  }
]
const MainContainer=styled('div')({
    width:"100%",
    height:'22%',
    display:"flex",
    flexDirection:'column',
    alignItems:'center',
    overflow:"auto"
})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
{DummyFnd.map((f)=>(
  <PendingInvitationsListItem
   key={f._id}
   id={f.id}
   username={f.senderId.username}
   mail={f.senderId.mail}

  />
))}

    </MainContainer>
  )
}

export default PendingInvitationsList
