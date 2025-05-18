import procedures from "./NurseProcedures.json";
const ProceduresList = () =>{
   return (
    <>
      {procedures.map((item, index) => (
        <div key={index} className="procedure-card">
          <div className="card-inside" style={{marginLeft:"2vw",display:"flex",flexDirection:"column"}}>
            <div className="image-wrapper">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="procedure-image"
                  />
                )}
                {item.tag && (
                  <span className="tag">{item.tag}</span>
                )}
        </div>
          <h2 style ={{fontSize:"1.12vw",fontWeight:"bolder",marginBottom:"1vw"}}>{item.title}</h2>
          <p style ={{fontSize:"0.65vw",marginBottom:"1vw"}}>{item.description}</p>
          <div style ={{fontSize:"1.6vw",fontWeight:"bolder"}}>{item.price}</div>
          </div>
        </div>
      ))}   
    </>
   );
}

export default ProceduresList;