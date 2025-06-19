import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  console.log("email", email);
  console.log("Password", password);

function handleFormSubmit(event){
    event.preventDefault();
    console.log("email", email);
    console.log("Password", password);
    if(email == 'akansha@gmail.com' && password == '1234'){
        alert("successfully login")
        navigate('/')
    }else{
        alert("Credentials are invalid")
        navigate('/login')
    }
}

  return (
    <div>
      <div className="container w-50 mx-auto my-5 customFormContainer p-5 shadow rounded">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
