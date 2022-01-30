import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import './../scss/home.scss';

const DELETE_USER = 'DELETE_USER';


const Home = () => {

  const userlist = useSelector(( state ) => state );
	const dispatch = useDispatch();

	const deleteUser = ( id ) => {
		dispatch({ type: DELETE_USER, payload:id });
		toast.success( 'User deleted successfully!' );
	}

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__addbtn">
          <NavLink className="home__add" to="/add">Add Users</NavLink>
        </div>
        <div className="home__content">
          <table className="home__table">
            <thead className="home__thead">
              <tr>
                <th className='home__title'scope="col">#</th>
                <th className='home__title'scope="col">Name</th>
                <th className='home__title'scope="col">Email</th>
                <th className='home__title'scope="col">Number</th>
                <th className='home__title'scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              { userlist.map(( user, id ) => (
                <tr className='home__tr' key={ id }>
                  <td className="home__td">{ id + 1 }</td>
                  <td className="home__td">{ user.name }</td>
                  <td className="home__td">{ user.email }</td>
                  <td className="home__td">{ user.number }</td>
                  <td className="home__btns">
                    <NavLink to={ `/edit/${ user.id }` } className="home__edit">
                      Edit
                    </NavLink>
                    <button onClick={() => deleteUser( user.id )} type="button" className="home__delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
