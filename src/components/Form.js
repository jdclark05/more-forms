import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
   
    
const Form = (props) => {
    const{inputs, setInputs} = props;
    const [error, setError] = useState(false);
    const [validFirst, setValidFirst] = useState("");
    const [validLast, setValidLast] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [validPassword, setValidPassword] = useState("");
    const [validConfPassword, setValidConfPassword] = useState("");
    
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        handleChange(e)
    }
    const isEmail = (email)=> {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(email)){
          return false;
        } else {
            return true;
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        if (inputs.firstName.length < 2){
            setValidFirst('First Name must be at least 3 characters...')
            setError(true);
        } else {
            setValidFirst('Correct format')
            setError(false);
        }
        if(inputs.lastName.length <2){
            setValidLast('Last Name must be at least 3 characters...')
            setError(true);
        } else {
            setValidLast('Correct format')
            setError(false)
        }
        if (isEmail(inputs.email) === false ) {
            setValidEmail('Invalid Email...')
            setError(true);
        } else {
            setValidEmail('Correct format')
            setError(false);
        }
        if(inputs.password.length < 8){
            setValidPassword('Password must be at least 8 characters...')
            setError(true);
        } else {
            setValidPassword('Correct format')
            setError(false);
        }
        if(inputs.confirmPassword !== inputs.password){
            setValidConfPassword('Passwords must match...')
            setError(true);
            console.log("error is true")
        } else {
            setValidConfPassword('Passwords match')
            setError(false);
            console.log("error is false")
        }
        if(error === false){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            }) 
        }
    }   
    return(
        <div className="d-flex justify-content-center m-5">
            <span className="block-example d-flex justify-content-center rounded mt-3" style={{width: '40rem', height: '35rem'}}>
                <form onSubmit={ (e) => e.preventDefault() }>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-2 m-b-3" style={{width: '30rem', color: '#666'}}>
                        <h3 className="d-md-inline"> New User Form </h3>
                    </div>
                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="firstName" className="d-flex flex-row">First Name: </label> 
                        <input type="text" onChange={onChange}  name="firstName" style={{ width: '17rem', borderRadius: '10px'}} />
                    </div>
                    <div className="" style={{ height: '2rem', color: "red"}}>{ validFirst? <p><small>{validFirst}</small></p>: '' }</div>

                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="lastName">Last Name: </label> 
                        <input type="text" onChange={onChange} name="lastName" style={{ width: '17rem', borderRadius: '10px'}} />
                    </div>
                    <div className="" style={{ height: '2rem', color: "red"}}>{ validLast? <p><small>{validLast}</small></p>: '' }</div>

                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="email">Email Address: </label> 
                        <input type="text" onChange={onChange} name="email" style={{ width: '17rem', borderRadius: '10px'}} />
                    </div>
                    <div className="" style={{ height: '2rem', color: "red"}}>{ validEmail? <p><small>{validEmail}</small></p>: '' }</div>

                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="password">Password: </label>
                        <input type="password" onChange={onChange} name="password" style={{ width: '17rem', borderRadius: '10px'}} />
                    </div>
                    <div className="" style={{ height: '2rem', color: "red"}}>{ validPassword? <p><small>{validPassword}</small></p>: '' }</div>

                    <div className="d-flex flex-row justify-content-start justify-content-between m-2 p-2" style={{ backgroundColor: '#999', borderRadius: '8px'}}>
                        <label htmlFor="confirmPassword" className="text-align-left">Confirm Password: </label>
                        <input type="password" onChange={onChange} name="confirmPassword" style={{ width: '17rem', borderRadius: '10px'}} />
                    </div>
                    <div className="" style={{ height: '2rem', color: "red"}}>{ validConfPassword? <p><small>{validConfPassword}</small></p>: '' }</div>
                    <div className="d-flex justify-content-center m-1">
                        <input type="submit" onClick={onChange} value="Click to Validate" />
                    </div>
                </form>
            </span>
        </div>

    );
};
    
export default Form;