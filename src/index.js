import React from 'react';
import ReactDOM from 'react-dom';
// import { Auth0Provider } from '@auth0/auth0-react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="209381175810-g8but1s520412hhnvhu7v9ae5qngta2t.apps.googleusercontent.com">
    {/* <Auth0Provider  */}
     {/* domain='dev-820u8r04.us.auth0.com'
     clientId='FtOS43NgGwxiS1AF25EjuuVA258NGdyc' 
     redirectUri={window.location.origin}> */}
      <App />
      </GoogleOAuthProvider>;
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
