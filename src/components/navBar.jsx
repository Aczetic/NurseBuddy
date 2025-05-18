import { IoLocation } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";


const NavBar = () => {
  const name = "User"; // will get from props

  return (
    <div style={{ fontFamily: "Urbanist, sans-serif" }}>
      <div className="nav-bar">
        <div>
          <div className="logo" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaHouseChimneyMedical size={19} color="#1E1E1E"/>
            <h1 style={{color:"#1E1E1E",fontWeight:"bolder"}}>NurseBuddy</h1>
          </div>

          <h1>Hi, {name}</h1>
          <h1>Welcome to Nursebuddy</h1>

          <div className="location" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <IoLocation size={15} />
            <h4>Bihar, India.</h4>
          </div>
        </div>

        <div className="icons">
          <FaCircleUser size = {25} style ={{marginTop:"0.2rem"}}/>
        <IoNotificationsCircle size={30} />
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
