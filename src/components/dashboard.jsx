import { useState } from "react";
import NavBar from "./navBar";
import NurseProcedures from "./nurse-pocedure/nurseProcedures";
const Dashboard =() =>{
    const name = "shivam"; 
    return (
      <>
        <NavBar/>
        <NurseProcedures/>
      </>
    );
}

export default Dashboard;