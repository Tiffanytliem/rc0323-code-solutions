import {useState} from 'react';

export default function RegistrationFormControlled (){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log('Username:',username, 'Password:', password);
  }


  return (
    <form id='login-form'>
      <label for="username">Username:</label>
      <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <label for="password">Password:</label>
      <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
