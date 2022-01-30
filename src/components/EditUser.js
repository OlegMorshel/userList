import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import './../scss/edit.scss';

const UPDATE_USER = "UPDATE_USER";

const EditUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const { id } = useParams();

  const userlist = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentUser = userlist.find((user) => user.id === parseInt(id));
  const history = useNavigate();

  useEffect(() => {
    if ( currentUser ) {
      setName( currentUser.name );
      setEmail( currentUser.email );
      setNumber( currentUser.number );
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = userlist.find(
      (user) => user.id !== parseInt(id) && user.email === email
    );
    const checkNumber = userlist.find(
      (user) => user.id !== parseInt(id) && user.number === parseInt(number)
    );
    const checkName = userlist.find(
      (user) => user.id !== parseInt(id) && user.name === name
    );

		// checking input data
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
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: UPDATE_USER, payload: data });

    toast.success("User updated succcessfully!");
		
    history("/");
  };

  return (
    <div className="adduser">
      {currentUser ? (
        <>
          <h1 className="adduser__title">Edit User {id}</h1>
          <form className="adduser__wrapper" onSubmit={handleSubmit}>
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
            <div className="edituser__btns">
              <input
                className="edituser__btn green"
                type="submit"
                value="Edit user"
              />

              <NavLink to="/" className="edituser__btn red">
                Cancel
              </NavLink>
            </div>
          </form>
        </>
      ) : (
        <h1>User with id {id} not exists</h1> //examination existed user
      )}
    </div>
  );
};

export default EditUser;
