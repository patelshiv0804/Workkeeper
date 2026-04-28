import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboardPage from './admin/AdminDashboardPage';
const username = "admin@gmail.com" ;
const pass = "admin123" ;


const Login = () => {
    const[email , setEmail] = useState("")
    const[password , setpassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        if ( email == "" || password == ""){
            alert("please fill all fields");
            return
        }

        if(email == username && password == pass){
            alert("admin login successfully");   
            navigate("/admin/dashboard");
        }
       
    }
    return(
        <div className = "container">
            <div className = "main">
                <h2> Sign In</h2>
                <p>Access your WorkKeeper account</p>

                <form onSubmit={handleSubmit}>
                    <div className = "form">
                        <label>Email Address</label>
                        <input type="email" placeholder='enter the email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className = "form">
                        <label>password </label>
                        <input type="password" placeholder='enter the password' value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>

                    <button type="submit"> log In</button>
                </form>

            </div>
        </div>
    );
}

export default Login;