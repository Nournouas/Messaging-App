import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function LandinPage() {
  let navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token){
      navigate("/homepage")
    }else{
      navigate("/login");
    }
  },[]);
  
  return (
    <div>LandinPage</div>
  )
}
