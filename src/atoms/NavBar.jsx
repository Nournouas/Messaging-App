import { useState } from 'react';
import UserList from '../atoms/UserList';
import { Link } from 'react-router';
import fetchHelper from '../helpers/fetchHelper';
import { useEffect } from 'react';

export default function NavBar({ userId, currentChat=null }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getStuff() {
      try{
        const resultUsers = await fetchHelper(`http://localhost:3000/api/${userId}/users`, "GET", {}, true);
        setUsers(resultUsers);
      } catch (err) {
        console.error(err)
      }
    } 
    getStuff();
  }, [])

  return (
      <div className='flex flex-col h-full items-center justify-between max-w-60 pt-4 bg-customDarkBlue text-customWhite'>
        <div id='scroller' className='flex flex-col items-center gap-4 overflow-y-auto'> 
          <h2 className='text-lg font-bold'>Users</h2>
          <UserList users={users} currentChat={currentChat} />
        </div>
        <div className='flex flex-col gap-2 items-center font-semibold py-4 bg-customBlue w-full'>
          <Link className='hover:underline'>My Profile</Link>
          <Link className='hover:underline'>Settings</Link>
          <Link className='hover:underline' to="/logout">Log out</Link>
        </div>
      </div>
  )
}
