import React from 'react';
import './Form.css';
// import formimg from './login.svg';


function Form() {
    return (
        <form className="user-form">
            {/* <div className="form-title">
                <h1 className="form-text-title">Login</h1>
            </div>

          <div className="form-image">
            <img className="image" src={formimg} alt="Login Form" />
          </div>
 */}
          <div className="form-group">
            <label for="username" className="form-label">Username :</label>
            <input type="text" name="username" className="user-input"></input>
          </div>
          <div className="form-group">
            <label for="password" className="form-label">Password :</label>
            <input type="text" name="password" className="user-input"></input>
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>

    )
}

export default Form;

// style={{height: 150, width: 500}}