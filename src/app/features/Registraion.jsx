import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from './authSlice';

function Registraion() {
    const [formData, setFormData] = useState({
        name: ' ',
        email: ' ',
        password: ' ',
    });

    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth);

    const submitForm = () => {
        if (formData.password === ' ') {
            alert("Form should not be empty")
        } else {
            dispatch(register(formData));
        }
    }

    useEffect(() => {

    }, [user, isError, isSuccess, isLoading, message]);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }


    return (
        <>
            <h2>Registraion</h2>
            <form >
                <label>Name</label>
                <input id='name' type='text' onChange={onChange} ></input>
                <label>Email</label>
                <input id='email' type='email' onChange={onChange}></input>
                <label>Password</label>
                <input id='password' type='password' onChange={onChange}></input>
            </form>
            <button onClick={submitForm}>Submit</button>
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>{message}</h3>}
            {isSuccess && <h3>{message}</h3>}
            {user && <div>
                <h3>{user.email}</h3>
                <h3>{user.name}</h3>
                <h3> {user.password}</h3>
            </div>
            }
        </>
    )
}

export default Registraion