import React, { useState } from 'react'

function Forms(){
    
    let [user,setUser]=useState({
        username:"",
        password:"",
        email:"",
        country:""
    })
    // let [password,setPassword]=useState('')
    // let [email,setEmail]=useState('')
    let [err,setErr]=useState({})

    function handleUser(event){
        let name = event.target.name;
        let value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        setUser({...user,[name]:value})
    }
    // function handleUsername(event){
    //     setUser(event.target.value)
    // }
    // function handlePassword(event){
    //     setPassword(event.target.value)
    // }
    // function handleEmail(event){
    //     setEmail(event.target.value)
    // }

    function handleFormSubmit(event){
        event.preventDefault()
        // to validate the form
         let errors = validateUser(user)
         if(Object.keys(errors).length===0)
         {
            setErr({})
            console.log(user)
         }
         else
         {
            setErr(errors)
         }
        // console.log(user)
        console.log(err)
    }

  return (
    <div>
        <h1 className="display-1" >Forms</h1>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor='username' className="mb-3">Username:</label>
                <input type="text" name='username' id="username" className='form-control' onChange={handleUser}></input>
            </div>
            {/* validation of username */}
            {err.username && <p>{err.username}</p>}
            <div>
                <label>GENDER:</label>
                <input type='radio' id='male' name="male" onChange={handleUser} ></input>
                <label htmlFor='male'>MALE</label>
                <input type='radio' id='female' name="female" onChange={handleUser}></input>
                <label htmlFor='female'>FEMALE</label>
                <input type='radio' id='--' name="--" onChange={handleUser}></input>
                <label htmlFor='--'>--</label>
            </div>
            <div>
                <label htmlFor='password' className="mb-3">Password:</label>
                <input type="password" name='password' id="password" className='form-control' onChange={handleUser}></input>
            </div>
            <div>
                <label htmlFor='email' className="mb-3">Email:</label>
                <input type="email" name='email' id="email" className='form-control' onChange={handleUser}></input>
            </div>
            <div>
                <label htmlFor="country" className='display-5'>COUNTRY</label>
                <select name="country" id="country" onChange={handleUser}>
                <option value="select">SELECT</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="kenya">KENYA</option>
                </select>
            </div>
            <div>
                <label>SKILLS:</label>
                <input type="checkbox" name='JAVA' id='JAVA' className='form-check-label' onChange={handleUser}/>
                <label htmlFor='JAVA' className='form-check-label' >JAVA</label>
                <input type="checkbox" name='JS' id='JS' className='form-check-label' onChange={handleUser}/>
                <label htmlFor='JS' className='form-check-label' >JS</label>
                <input type="checkbox" name='REACT' id='REACT' className='form-check-label' onChange={handleUser}/>
                <label htmlFor='REACT' className='form-check-label' >REACT</label>
            </div>
            <button type='submit' className='btn btn-success'>Log-In</button>
        </form>
    </div>
  )
}

export default Forms

function validateUser(user){
    let errors={};
    if(!user.username){
        errors.username='USERNAME is required'
    }
    if(user.username.length<=4)
    {
        errors.username="USERNAME should be more than 4"
    }
    return errors;
}