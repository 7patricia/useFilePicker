import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Thing, TemporaryComponent } from '../stories/Thing.stories';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Accepts single file', async () => {
    const { getByText, getByTestId, debug } = render(<TemporaryComponent />);
    await act(async () => {
      getByText('test');

      await waitFor(() => {
        console.log(document.querySelectorAll('input'));
        getByTestId('file-picker-input');
      });
      debug();
    });
  });
});
