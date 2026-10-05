import { Link } from "react-router"

export default function UserList({ users, currentChat=null }) {
  const defaultImage = "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/3840px-Windows_10_Default_Profile_Picture.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
  
  let listOfUsers = users.map(user =>{
    if (user.id == currentChat){
      return (
        <div key={user.id} className='flex flex-col p-2 gap-2 border-l-5 border-l-blue-400'>
          <div className='flex flex-row gap-2 justify-center items-center'>
            {user.img ? <img src={user.image}/> : <img className='max-w-10' src={defaultImage}/>}
            <h3>{user.name}</h3>
          </div>
          <Link to={"/message/"+user.id} className='bg-customBlack text-customWhite invisible text-center p-1 cursor-pointer hover:bg-black'>message</Link>

        </div>
      )
    }else{
      return (
        <div key={user.id} className='flex flex-col p-2 gap-2 border-l-5 border-l-customDarkBlue'>
          <div className='flex flex-row gap-2 justify-center items-center'>
            {user.img ? <img src={user.image}/> : <img className='max-w-10' src={defaultImage}/>}
            <h3>{user.name}</h3>
          </div>
          <Link to={"/message/"+user.id} className='bg-customBlack text-customWhite text-center p-1 cursor-pointer hover:bg-black'>message</Link>
          
        </div>
      )
    }
  } 

  )
  return (
    listOfUsers
  )
}
