import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import logo from "../assets/cabbon-logo.png";
import { useNavigate } from 'react-router-dom';

const Login = ({ height, width }) => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission

    if (!category) {
      document.getElementById("error").textContent = 'Please select a category';
      setTimeout(() => {
        document.getElementById("error").textContent = ""
      }, 2000);
      return;
    }

    if (category === 'boyscaptain') {
      navigate('/boyscaptain'); // Redirect to BcHome.jsx
    } else if (category === 'agrade' || category === 'bgrade' || category === 'general') {
      navigate('/boys'); // Redirect to the default home page
    } else if (category === 'captain' || category === 'vicecaptain') {
      navigate('/captain');
    } else {
      document.getElementById("error").textContent = "Invalid category selected";
      setTimeout(() => {
        document.getElementById("error").textContent = "";
      }, 2000);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      <img
        className="logo"
        src={logo}
        alt="Logo"
        style={{ width: `100px`, height: `100px` }}
      />
      <h3 className="mb-5" style={{ fontFamily: "Joan, serif" }}>
        CABBON
      </h3>
      <Form onSubmit={handleLogin}>
        <div className="border border-secondary rounded p-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="mb-5">Log In</h3>

          <Form.Select
            className="mb-3"
            aria-label="Select Category"
            style={{ width: `${width * 0.7}px` }}
            value={category}
            onChange={(e) => setCategory(e.target.value)} // Update category on selection
          >
            <option hidden value="">Select Category</option>
            <option value="manager">Manager</option>
            <option value="captain">Captain</option>
            <option value="vicecaptain">Vice Captain</option>
            <option value="agrade">A Grade</option>
            <option value="bgrade">B Grade</option>
            <option value="general">General</option>
            <option value="boyscaptain">Boy's Captain</option>
          </Form.Select>
          <InputGroup className="mb-3" style={{ width: `${width * 0.7}px` }}>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="User ID"
              autoComplete="username" // Specify autocomplete for username
            />
          </InputGroup>
          <InputGroup className="mb-2" style={{ width: `${width * 0.7}px` }}>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Password"
              type="password"
              autoComplete="current-password" // Specify autocomplete for password
            />
          </InputGroup>
          <div>
            <span id='error' style={{ color: "red" }}></span>
          </div>
          <Button className="mt-2" variant="primary" type="submit" >
            Sign In
          </Button>

        </div>
      </Form>
    </div>
  );
};

export default Login;
