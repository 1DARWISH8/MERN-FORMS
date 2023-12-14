import React from 'react'
import { useState } from 'react'

function Iforms() {

    let [data,setData]=useState({
        name:"",
        company:"",
        role:"",
        experience:"",
        gender:""
    })

    let [error,setError]=useState({})

    function handleData(event){
        let name =event.target.name;
        let value =event.target.type==="checkbox"?event.target.checked:event.target.value;
        setData({...data,[name]:value})
    }

    function handleForm(event){
        event.preventDefault()
        // console.log(data)
        let errors=validateEmployee(data);
        if(Object.keys(errors).length===0)
        {
            setError({})
            console.log(data)
        }
        else
        {
            setError(data)
        }
        console.log(error)
    }

  return (
    <div>
        <h1>FORM BY ME</h1>
        <form onSubmit={handleForm}>
        <div>
            <label htmlFor='name'>NAME:</label>
            <input type='text' id="name" name="name" onChange={handleData} />
            {error.name&&<p>{error.name}</p>}
        </div>
        <div>
            <label htmlFor='company'>COMPANY:</label>
            <input type='text' id="company" name="company" onChange={handleData} />
        </div>
        <div>
            <label htmlFor='role'>ROLE:</label>
            <input type='text' id="role" name="role" onChange={handleData} />
        </div>
        <div>
            <label htmlFor='experience'>EXPERIENCE:</label>
            <input id='experience' name='experience' min={0} max={40} type='number' onChange={handleData} />
        </div>
        <div>
            <label htmlFor='gender'>GENDER: </label>
            <select id='gender' name='gender' onChange={handleData}>
                <option >SELECT</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="NOT-SPECIFIED">-</option>
            </select>
        </div>
        <div>
            <label>SKILLS:</label>
            <input type='checkbox' id='C' name='C' onChange={handleData}></input>
            <label htmlFor='C'>C</label>
            <input type='checkbox' id='JS' name='JS' onChange={handleData}></input>
            <label htmlFor='JS'>JS</label>
            <input type='checkbox' id='JAVA' name='JAVA' onChange={handleData}></input>
            <label htmlFor='JAVA'>JAVA</label>
            <input type='checkbox' id='REACT' name='REACT' onChange={handleData}></input>
            <label htmlFor='REACT'>REACT</label>
            <input type='checkbox' id='PYTHON' name='PYTHON' onChange={handleData}></input>
            <label htmlFor='PYTHON'>PYTHON</label>
        </div>
        <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Iforms

function validateEmployee(data){
    let error={};
    if((!data.name)&& (data.name.length <=2))
    {
        error.name="ENTER VALID NAME"
    }
    if((!data.company))
    {
        error.company="ENTER VALID COMPANY NAME"
    }
    if((!data.role))
    {
        error.role="ENTER ROLE"
    }
    if(!data.experience)
    {
        error.experience="SELECT YOUR EXPERIENCE"
    }
    if(!data.gender)
    {
        error.gender="SELECT YOUR GENDER"
    }
    if(!((data.C==="")||(data.JS==="")||(data.JAVA==="")||(data.REACT==="")||(data.PYTHON==="")))
    {
        error.skillls="SELECT YOUR SKILLS"
    }
    return error;
}