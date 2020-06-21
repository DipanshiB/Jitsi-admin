import React from 'react';
import Form from './Form';
import './App.css';
// import formimg from './form-img.png';
import formimg from './login.svg';

function App() {
  return (
      <div className="welcome">
        <div className="header">
          <img alt="Logo of Jitsi.org" src="https://335wvf48o1332cksy23mw1pj-wpengine.netdna-ssl.com/wp-content/themes/jitsi/images/logo-web-2020.png" />
          <h1 className="header-text-title">
            Administrative login for Jitsi Meet
          </h1>
          <h6 className="header-text-prompt">
            Enter your details below to login as an administrative user in Jitsi Meet
          </h6>
        </div>
        <div className="login">
          <h1 className="form-text-title">Login</h1>
          <img className="image" src={formimg} alt="Login Form"/>
          <Form />
        </div>
        <div className="footer">
          <h6 className="header-text-prompt">
            Jitsi Meet is an open source video conferencing platform. This website will allow you to register an administrative account on the same to use the platform with admin privileges.
          </h6>
        </div>
      </div>
  );
}

export default App;
