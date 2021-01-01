import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from '../../components/Forms/LoginForm';


test('renders the Login Form component' , () => {
    const loginForm = document.createElement('div');
    ReactDOM.render(<LoginForm />, loginForm);
   expect(loginForm.querySelector('input').type).toBe('email')
   expect(loginForm.querySelector('#password').type).toBe('password')
})