import React from 'react';
import ReactDOM from 'react-dom';

import { getQueriesForElement } from '@testing-library/dom';
import Footer from '../../components/Footers/Footer';


test('renders the Footer component' , () => {
    const footer = document.createElement('div');
    ReactDOM.render(<Footer />, footer);
    const { getByText } = getQueriesForElement(footer);
    const footer_text =  getByText(/Let's Keep in touch/i);
})