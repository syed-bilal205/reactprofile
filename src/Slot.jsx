import React  from "react";


const Slot=(props)=>{
    // let x= props.x; 
    // let y= props.y; 
    // let z= props.z; 
  let {x,y,z}=props;
    if((x===y)&&(y===z)){
      return(
        <>
          <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This Is Matching</h1>
            <hr></hr>
          </div>
        </>
      );
    }else{
      return(
        <>
          <div className='slot_inner'>
            <h1>{x} {y} {z}</h1>
            <h1>This Is Not Matching</h1>
            <hr></hr>
          </div>
        </>
      );  
    }
    }
export default Slot;