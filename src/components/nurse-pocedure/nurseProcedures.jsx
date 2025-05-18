import React from "react";
import procedures from "./NurseProcedures.json"; 
import ProceduresList from "./proceduresList";
const NurseProcedures= () => {
  return (
    <>
    <div>
      <h1 style={{color:"#3D90D7",fontWeight:"bolder",margin:"1.5rem",fontSize:"1.3rem"}}>Nurse Procedure</h1>
      </div> 


    <div className="procedure-grid" style={{color:" #595959 " ,margin:"1.5rem"}}>
       <ProceduresList/> 
    </div>
    </>
  );
};

export default NurseProcedures;
