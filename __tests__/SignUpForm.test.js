import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
import React from 'react';
import ReactDOM from 'react-dom';

import {SignUpForm} from 'components/Forms/SignUpForm';


expect.extend({toHaveAttribute, toHaveTextContent})
test('renders the Login Form component with Email Field' , () => {
    const div = document.createElement('div')
    ReactDOM.render(<SignUpForm />, div)
    expect(div.querySelector('input')).toHaveAttribute('type', 'email');
    expect(div.querySelector('label')).toHaveTextContent('Email address');
})