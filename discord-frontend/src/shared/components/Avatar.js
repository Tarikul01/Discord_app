import styled from '@emotion/styled'
import React from 'react'

const AvatarPreview=styled('div')({
    height:'42px',
    width:'42px',
    backgroundColor:'#5965f2',
    borderRadius:'42px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'20px',
    fontWeight:'700',
    marginLeft:'5px',
    color:'white',
})

const Avatar = ({username,large}) => {
  return (
    <AvatarPreview style={large?{height:'60px',width:'80px'}:{}} >
    {
        username.substring(0,2)
    }

    </AvatarPreview>
  )
}

export default Avatar