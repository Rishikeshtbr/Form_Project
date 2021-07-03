import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router'

const PersonalDetails = () => {

     //Initial Setting the States
    const [data, setData] = useState({Name: '', Email: '', Mobile_No:'', Gender:'', DOB: ''})

    //Destructuring the State
    const { Name,Email,Mobile_No,Gender,DOB } = data

    //Creating a Onchange Handler to control forms
    const changeHandler=(e)=>{
        let value = e.target.value
        let name = e.target.name 
        setData(prev=>({...prev, [name] : value}))
    }

    //Presisting the Entered value while reload
    useEffect(()=>{
        const input = JSON.parse(localStorage.getItem('input'))
        if(input){
            setData(prev=>({...prev,...input}))
        }
    },[])

    //Storing the form value in temporary key name in LocalStorage
    useEffect(()=>{
        localStorage.setItem("input",JSON.stringify(data))
    },[Name,Email,Mobile_No,Gender,DOB])

    //Initiating the useHistory to history
    const history = useHistory()

    //adding input key value to Individual_Data key
    //While Routing /step1 to /step2
    const clickHandler=(pass)=>{

        const get = JSON.parse(localStorage.getItem('Individual_Data'))
        var temp = {
            ...get, ...pass
        }
        localStorage.setItem('Individual_Data',JSON.stringify(temp))
        localStorage.removeItem('input')

        history.push("/step2")
    }

    return (
        <div className="container">
            <h1>Personal Details</h1>
            <div className="form_details">
                <label>Name</label>
                <input type="text" value={Name} name="Name" placeholder="Ex. Jhone Smith" onChange={changeHandler}/>
                <label>Email</label>
                <input type="email" value={Email} name="Email" placeholder="Ex. email@email.com" onChange={changeHandler}/>
                <label>Mobile Number</label>
                <input type="text" value={Mobile_No} name="Mobile_No" placeholder="Ex. 9865431256" onChange={changeHandler}/>
                <label>Gender</label>
                <input type="text" value={Gender} name="Gender" placeholder="Male/Female/Others" onChange={changeHandler}/>
                <label>Date of Birth</label>
                <input type="text" value={DOB} name="DOB" placeholder="DD/MM/YYYY" onChange={changeHandler}/>   
            </div>
            <div className="btn">
                <button onClick={()=>{clickHandler(data)}}>Next</button> 
            </div>
        </div>
    )
}

export default PersonalDetails
