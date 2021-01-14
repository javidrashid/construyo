import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
import React from 'react';
import ReactDOM from 'react-dom';

import {LoginForm} from 'components/Forms/LoginForm';


expect.extend({toHaveAttribute, toHaveTextContent})
test('renders the Login Form component with Email Field' , () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div)
    expect(div.querySelector('input')).toHaveAttribute('type', 'email');
    expect(div.querySelector('label')).toHaveTextContent('Helllo');
})