import React, {useState} from "react";

export default ()=>{
    var[tiempo, setTiempo]=useState(0);
    setTimeout(()=>setTiempo(tiempo+1),1000);
    return(
        <p>Segundo:{tiempo}</p>
    );
}