import React, { useEffect, useState } from 'react'
import fetchHelper from '../helpers/fetchHelper';
import NavBar from '../atoms/NavBar';

export default function Homepage() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    async function getStuff() {
      try{
        const resultId = await fetchHelper("http://localhost:3000/protected", "GET", {}, true);
        localStorage.setItem("userIdChatter", resultId);
        setCurrentUser(resultId);
      } catch (err) {
        console.error(err)
      }
    } 
    getStuff();
  }, [])


  return (
    <div className='flex flex-row w-full h-screen'>
      {currentUser && <NavBar userId={currentUser} />}
    </div>
  )
}
