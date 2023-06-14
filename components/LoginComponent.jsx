import {useState} from 'react';
import styled from './logincomponent.module.css'
import {signIn} from 'next-auth/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log(`email - ${email}, password - ${password}, userType - ${userType}`);
        const formData = {email, password, userType};
        const res = await signIn('credentials', {redirect: false, password: password, email: email, userType: userType});
        console.log(res);
    }
  return (
    <>
    <div className={styled.center}>
      <form onSubmit={handleSubmit} >
        <label>
          UserType:{" "}
          <select value={userType} onChange={(e)=>setUserType(e.target.value)}>
            <option value="user">Users</option>
            <option value="expert">Expert</option>
          </select>
          <br></br>
        </label>
        <label>
          Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br></br>
        </label>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />{" "}
        </label>
        <button> Log In </button>
      </form>
      </div>
    </>
  );
}
