import React from 'react';

//Components
import WrapperLogIn from './WrapperLogIn';

const LogIn = () => (
  <WrapperLogIn>
    <form>
      <input type="email" placeholder="Email..."/>
      <input type="password" placeholder="Password..."/>
      <button>Log In</button>
      </form>
  </WrapperLogIn>
)
 
export default LogIn;

    
