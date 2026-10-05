import { useParams } from 'react-router'
import NavBar from '../atoms/NavBar';
import fetchHelper from '../helpers/fetchHelper';
import { useEffect, useState } from 'react';


export default function Messaging() {
  let { userid } = useParams();
  const currentUser = localStorage.getItem("userIdChatter")

  return (
    <div className='flex flex-row w-full h-screen'>
      <NavBar userId={currentUser} currentChat={userid} />
      <p>{userid}</p>
    </div>
  )
}
