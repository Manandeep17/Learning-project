// src/components/LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [student, setStudent] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(student);
    const resp = await axios.post(
      "http://localhost:8083/api/students",
      student
    );
    console.log(resp);
    if (resp.status == 201) {
      toast.success("User Registered Successfully");
    } else {
      toast.error("Error While registration");
    }
  };
  return (
    <div className="whole">
      <br />
      <br />
      <div className="login-border">
        <form onSubmit={handleSubmit}>
          <h1>Sign up your account</h1>
          <label>Enter name:</label>
          <input
            type="text"
            placeholder="Username"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          ></input>
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

          <button className="button1" type="submit"  onClick={()=>navigate('/dashboard')}>

            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
