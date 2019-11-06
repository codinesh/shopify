import React, { CSSProperties } from 'react'

interface IUserDetails {
  name: string
}

const style: CSSProperties = {
  marginRight: '1em',
  // display: 'flex',
  color: 'white',
  flexDirection: 'row'
}

const onlineindicator: CSSProperties = {
  color: 'green',
  backgroundColor: 'green',
  minHeight: '12px',
  maxHeight: '12px',
  maxWidth: '12px',
  borderRadius: 6
}

const UserDetails = (props: IUserDetails) => {
  return (
    <div style={style}>
      <span style={onlineindicator}></span>
      <span>{props.name}</span>
    </div>
  )
}

export default UserDetails
