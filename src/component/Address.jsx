import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router'



const Address = () => {

     //Initial Setting the States
    const [data, setData] = useState({Address_Line_1: '', Address_Line_2: '', Landmark:'', Country:'', State: '', Pincode:''})

    //Destructuring the State
    const { Address_Line_1, Address_Line_2, Landmark, Country, State, Pincode } = data

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
    },[Address_Line_1, Address_Line_2, Landmark, Country, State, Pincode])

    //Initiating the useHistory to history
    const history = useHistory()

    //adding input key value to Individual_Data key
    //While Routing /step2 to /step3
    const clickHandler=(pass)=>{
        const get = JSON.parse(localStorage.getItem('Individual_Data'))
        var temp = {
            ...get, ...pass
        }
        localStorage.setItem('Individual_Data',JSON.stringify(temp))
        localStorage.removeItem('input')

        history.push("/step3")
    }

    return (
        <div className="container">
            <h1>Address</h1>
            <div className="form_details">
                <label>Address Line 1</label>
                <input type="text" value={Address_Line_1} name="Address_Line_1" placeholder="Address" onChange={changeHandler}/>
                <label>Address Line 2</label>
                <input type="text" value={Address_Line_2} name="Address_Line_2" placeholder="Address" onChange={changeHandler}/>
                <label>Landmark</label>
                <input type="text" value={Landmark} name="Landmark" placeholder="Landmark" onChange={changeHandler}/>
                <label>Country</label>
                <input type="text" value={Country} name="Country" placeholder="Country" onChange={changeHandler}/>
                <label>State</label>
                <input type="text" value={State} name="State" placeholder="State" onChange={changeHandler}/>
                <label>Pincode</label>
                <input type="text" value={Pincode} name="Pincode" placeholder="Pincode" onChange={changeHandler}/>
            </div>
            <div className="btn">
                <button onClick={()=>{clickHandler(data)}}>Next</button>
            </div>
        </div>
    )
}

export default Address
