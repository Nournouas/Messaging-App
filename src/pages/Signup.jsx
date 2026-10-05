import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import fetchHelper from '../helpers/fetchHelper';

export default function Signup() {
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  
  async function handleSignup(e) {
    e.preventDefault();
    try{
      const result = await fetchHelper("http://localhost:3000/signup", "POST", {
        name: e.target.name.value,
        password: e.target.password.value
      });

      if (result.signupPass){
        navigate("/login");
      }else if(result.sqlError){
        setErrors([{path: "sql", message: "Name already exists!"}]);
      }
      else{
        setErrors(result.errors);
      };

    } catch (err) {
      console.error(err)
      setErrors([{path: "sql", message: "err"}]);
    }

  }
  console.log(errors)
  let errorsList = errors.map((err) => 
    <li key={err.path}>
      <p>{err.message}</p>
    </li>
  );

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen'>
      <form onSubmit={(e) => handleSignup(e)} className='flex flex-col gap-3 min-w-70 mb-2'>
        <div className='flex flex-col gap-1'>
          <label className='text-sm' htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder='Your Name'
            className='p-2 text-sm'/>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-sm' htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder='Your Password'
           className='p-2 text-sm'/>
        </div>
        <button className='bg-customDarkBlue text-sm text-customBeige rounded-sm hover:bg-black p-1 cursor-pointer' 
        type="submit">Signup</button>
        <Link className='border-customDarkBlue text-center border-2 text-sm text-customDarkBlue rounded-sm hover:bg-black hover:text-customBeige p-1 cursor-pointer'
              to="/login"
        > Login Instead</Link>
      </form>
      {errorsList}
    </div>
  )
}
