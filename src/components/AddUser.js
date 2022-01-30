import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import './../scss/adduser.scss';

const ADD_USER = "ADD_USER";

const AddUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const userlist = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = userlist.find((user) => user.email === email && user);
    const checkNumber = userlist.find(
      (user) => user.number === parseInt(number)
    );
    const checkName = userlist.find((user) => user.name === name && user);

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkNumber) {
      return toast.error("This number already Exists");
    }
    if (checkEmail) {
      return toast.error("This email already Exists");
    }

    if (checkName) {
      return toast.error("This name already Exists");
    }


    const data = {
      id: userlist.length ,
      name,
      email,
      number,
    };


    dispatch({ type: ADD_USER, payload: data });
    toast.success("User added succcessfully!");
    history("/");
  };

  return (
    <div className="adduser">
      <h1 className="adduser__title">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="adduser__form">
          <input
            className="adduser__input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="adduser__form">
          <input
            className="adduser__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="adduser__form">
          <input
            className="adduser__input"
            type="number"
            placeholder="Phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="adduser__form">
          <input className="adduser__btn red" type="submit" value="Add user" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
