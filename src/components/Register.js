// src/components/LoginForm.js
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { Home } from "../pages";

function Login() {
  const [student, setStudent] = useState({  email: '', password: '' });
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    try {
        const resp = await axios.post('http://localhost:8083/api/students/login', student);
        console.log(resp);
        if (resp.status === 200) {
          toast.success("User Logged in Successfully");
          localStorage.setItem('student', JSON.stringify({id: resp.data.id, email: resp.data.email, name: resp.data.name}));
            navigate("/dashboard");
        } else {
          toast.error("Error While logging");
        }
      } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        toast.error("Error While logging");
      }
      
  }
  return (
    <div className="whole">
      <br />
      <br />
      <div className="login-border">
        <form onSubmit={handleSubmit}>
          <h1>Sign in your account</h1>
          
          <label>Enter email:</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          ></input>
          <label>Enter password:</label>
          <input
            type="password"
            placeholder="Password"
            value={student.password}
            onChange={(e) =>
              setStudent({ ...student, password: e.target.value })
            }
          ></input>

          <button className="button1" type="submit" >

            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
