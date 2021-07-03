import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const BankDetails = () => {
    //Initial Setting the States
    const [data, setData] = useState({Bank_Name: '', Account_Number: '', Branch:'', IFSC_Code:''})

    //Destructuring the State
    const { Bank_Name, Account_Number, Branch, IFSC_Code } = data

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
    },[Bank_Name, Account_Number, Branch, IFSC_Code])
    
    //Initiating the useHistory to history
    const history = useHistory()

    //adding input key value to Individual_Data key
    //While Routing /step3 to /finish
    const clickHandler=(pass)=>{
        const get = JSON.parse(localStorage.getItem('Individual_Data'))
        var temp = {
            ...get, ...pass
        }
        localStorage.setItem('Individual_Data',JSON.stringify(temp))
        localStorage.removeItem('input')
        history.push('/finish')
    }

    return (
        <div className="container">
            <h1>Bank Details</h1>
            <div className="form_details">
                <label>Bank Name</label>
                <input type="text" value={Bank_Name} name="Bank_Name" placeholder="Bank Name"  onChange={changeHandler}/>
                <label>Account Number</label>
                <input type="text" value={Account_Number} name="Account_Number" placeholder="A/C No" onChange={changeHandler}/>
                <label>Branch</label>
                <input type="text" value={Branch} name="Branch" placeholder="Branch" onChange={changeHandler}/>
                <label>IFSC Code</label>
                <input type="text" value={IFSC_Code} name="IFSC_Code" placeholder="IFSC Code" onChange={changeHandler}/>
            </div>
            <div className="btn">
                <button onClick={()=>{clickHandler(data)}}>Submit</button>
            </div>
        </div>
    )
}

export default BankDetails
