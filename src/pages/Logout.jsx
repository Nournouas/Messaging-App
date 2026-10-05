import { Link } from "react-router";

export default function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userIdChatter");
  return (
    <div  className='flex flex-col items-center justify-center w-full min-h-screen'>
      <div className='flex flex-col gap-3 min-w-70 mb-2 items-center'>
        <h1>You have been logged out</h1>
        <Link className='bg-customDarkBlue min-w-70 text-center text-sm text-customBeige rounded-sm hover:bg-black p-1 cursor-pointer'
              to="/signup"
        > Sign up</Link>
        <Link className='bg-customDarkBlue min-w-70 text-center text-sm text-customBeige rounded-sm hover:bg-black p-1 cursor-pointer'
              to="/login"
        > Log in</Link>
      </div>
    </div>
  )
}
