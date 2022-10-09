import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { auth } from '../services/Firebase';

const Profile = ({ user,setAuthenticated }) => {
    const handleSignOut = ()=>{
    auth.signOut().then(()=>setAuthenticated(false));
}
  return (
    <Container as='main' fluid='sm' className='bg-dark d-flex flex-column align-items-center p-2'>
         {user.email}
        {user.displayName && <p>{user.displayName}</p> }
<Button variant='primary' onClick={handleSignOut}>Sign Out</Button>
    </Container>)
}

export default Profile