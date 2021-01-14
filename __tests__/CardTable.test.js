import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
import React from 'react';
import ReactDOM from 'react-dom';

import {CardTable} from 'components/Cards/CardTable';


expect.extend({toHaveAttribute, toHaveTextContent})
test('renders the CardTable  component with Proper Heading' , () => {
    const div = document.createElement('div')
    ReactDOM.render(<CardTable />, div)
    expect(div.querySelector('h3')).toHaveTextContent('Construyo Orders');
})