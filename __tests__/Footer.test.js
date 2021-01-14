import React from 'react';
import ReactDOM from 'react-dom';

import { getQueriesForElement } from '@testing-library/dom';
import Footer from 'components/Footers/Footer';


test('renders the Footer component with correct test for callout' , () => {
    const footer = document.createElement('div');
    ReactDOM.render(<Footer />, footer);
    const { getByText } = getQueriesForElement(footer);
    const footer_text_callout =  getByText(/Let's Keep in touch/i);
})

test('renders the Footer component with correct test for links' , () => {
    const footer = document.createElement('div');
    ReactDOM.render(<Footer />, footer);
    const { getByText } = getQueriesForElement(footer);
    const footer_text_subtitle =  getByText(/Find us on any of these platforms, we respond 1-2 business days./i);
})