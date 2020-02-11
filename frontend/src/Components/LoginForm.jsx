import React from 'react';

const LoginForm = ({
  username,
  password,
  handleChange,
  loginUser
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <div className='form-container'>
      <h2> Log-In </h2>
      <form onSubmit={handleSubmit}>
        Username: <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        /><br/>
        Password: <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        /><br/>
        <input className='submit-button' type="submit" value="log-in" />
      </form>
    </div>
  )
}

export default LoginForm;