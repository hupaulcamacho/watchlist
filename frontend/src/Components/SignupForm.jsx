import React from 'react';

const SignupForm = ({
  username,
  password,
  handleChange,
  signupUser,
  avatar_url
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    signupUser()
  }

  return (
    <div className='form-container'>
      <h2> Sign-Up </h2>
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
        Avatar: <input
          type="text"
          name="avatar_url"
          value={avatar_url}
          placeholder="Enter avatar url"
          onChange={handleChange}
        /><br/>
        <input className='submit-button' type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default SignupForm;