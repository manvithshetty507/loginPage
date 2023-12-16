import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have a separate CSS file

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const [emailBorderColor, setEmailBorderColor] = useState('black');
  const [passwordBorderColor, setPasswordBorderColor] = useState('black');
  const [confirmPasswordBorderColor, setConfirmPasswordBorderColor] = useState('black');

  const validateEmail = (input) => {
    return input.toLowerCase().includes('@gmail.com');
  };

  const validatePassword = (input) => {
    return input.length >= 8;
  };

  useEffect(() => {
    setEmailBorderColor(email === '' ? 'black' : (emailValid ? 'green' : 'red'));
  }, [email, emailValid]);

  useEffect(() => {
    setPasswordBorderColor(password === '' ? 'black' : (passwordValid ? 'green' : 'red'));
  }, [password, passwordValid]);

  useEffect(() => {
    setConfirmPasswordBorderColor(confirmPassword === '' ? 'black' : (confirmPasswordValid ? 'green' : 'red'));
  }, [confirmPassword, confirmPasswordValid]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(validatePassword(newPassword));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div className="app">
      <label>Email</label>
      <input
        type="text"
        placeholder='Enter your email'
        value={email}
        onChange={handleEmailChange}
        onFocus={() => setEmailBorderColor('blue')}
        className="input"
        style={{ borderColor: emailBorderColor }}
      />
      {!emailValid && <p className="error-message">Invalid email format</p>}

      <label>Password</label>
      <input
        type="password"
        placeholder='Enter your password'
        value={password}
        onChange={handlePasswordChange}
        onFocus={() => setPasswordBorderColor('blue')}
        className="input"
        style={{ borderColor: passwordBorderColor }}
      />
      {!passwordValid && <p className="error-message">Password must be at least 8 characters long</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        placeholder='Confirm your password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        onFocus={() => setConfirmPasswordBorderColor('blue')}
        className="input"
        style={{ borderColor: confirmPasswordBorderColor }}
      />
      {!confirmPasswordValid && <p className="error-message">Passwords do not match</p>}

      <button onClick={handleSubmit}>Sign up</button>
    </div>
  );
};

export default App;
