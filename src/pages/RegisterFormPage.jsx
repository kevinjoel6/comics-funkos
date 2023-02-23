import React, { useContext, useRef } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import UserContext from '../context/UserContext'

const RegisterFormPage = () => {

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const inputName = useRef(null)
    const inputSurnames = useRef(null)
    const inputEmail = useRef(null)
    const inputPass1 = useRef(null)
    const inputPass2 = useRef(null)

    const newUser = async (params) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        };

        try {
            const response = await fetch('http://localhost:4001/register', options);

            const data = await response.json();
            if (data.token) {
                console.log("registrado");
                // Context
                setUser(data);
                // LocalStarage
                localStorage.setItem('user', JSON.stringify(data));
                // Redirect
                navigate("/lista-comics");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password
        if (inputPass1.current.value != inputPass2.current.value) {
            alert("Password no match");
            return false;
        }
        const data = {
            "name": inputName.current.value,
            "surname": inputSurnames.current.value,
            "email": inputEmail.current.value,
            "password": inputPass1.current.value
        }
        newUser(data);
    }

  return (
    <div className='form-container'>
            <div>
                <h1>REGISTER</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <p><input type="text" ref={inputName} placeholder="name" /></p>
                    <p><input type="text" ref={inputSurnames} placeholder="surname" /></p>
                    <p><input type="email" ref={inputEmail} placeholder="email" /></p>
                    <p><input type="password" ref={inputPass1} placeholder="password" /></p>
                    <p><input type="password" ref={inputPass2} placeholder="password2" /></p>
                    <input type="submit" value="Enviar"/>
                </form>
                <p> 
                    If you already have and account:
                    <Link to="/login" className='logRedirect'> LOGIN</Link>
                </p>
            </div>
        </div>
  )
}

export default RegisterFormPage