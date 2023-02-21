import React, { useState } from 'react'

const Validation = () =>{
    
    const [fullName , setName] = useState({
        fName:  '' ,
        lName : '' ,
        email: '' ,
        phone: '' ,
    });
    
    const inputEvent = (event) =>{
        console.log(event.target.value)
        
        // const value = event.target.value;
        // const name = event.target.name;

        const{value , name} = event.target;

        setName((preValue) => {
            
            return{
                ...preValue,
                [name] : value,
            }

            // if(name === 'fName'){
        //     return{
        //     fName:  value ,
        //     lName : preValue.lName ,
        //     }
        // }else if(name === 'lName'){
        //     return{
        //     fName:  preValue.fName ,
        //     lName : value ,
        //     }
        // }else if(name === 'email'){
        //     return{
        //     fName:  preValue.fName ,
        //     lName : preValue.lName ,
        //     email : value ,
        //     phone : preValue.phone,
        //     }
        // }else if(name === 'phone'){
        //     return{
        //     fName:  preValue.fName ,
        //     lName : preValue.lName ,
        //     email : preValue.email,
        //     phone : value,
        //     }
        // } 
        });
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        alert('submitted');
    }

    return(
        <>
        <div>
        <form onSubmit={onSubmit}>
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input type='text' placeholder='Enter Your Name' value={fullName.fName} name='fName' onChange={inputEvent}/>
            <br/>
            <br/>
            <input type='text' placeholder='Enter Your Name' value={fullName.lName} name='lName' onChange={inputEvent}/>
            <br/>
            <br/>
            <input type='email' placeholder='Enter Your Email' value={fullName.email} name='email' onChange={inputEvent}/>
            <br/>
            <br/>
            <input type='phone' placeholder='Enter Your Number' value={fullName.phone} name='phone' onChange={inputEvent}/>
            <br/>
            <br/>
            <button type='submit'>Click Me</button>
        </form>
        </div>    
        </>
    );

}

export default Validation