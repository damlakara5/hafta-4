import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Emoji search functionality', () => {
  test('updates emoji list based on filter', () => {
    render(<App />);

    // Assuming "Smile" and "Wink" are part of your initial emoji list
    // and your filtering logic is already implemented in the App component.
    const searchInput = screen.getByRole('textbox');

    // Simulate typing "Smile" into the search input
    fireEvent.change(searchInput, { target: { value: 'Smile' } });

    // Assert that only the "Smile" emoji is displayed
    expect(screen.queryByText('Wink')).toBeNull(); // "Wink" should not be present
    expect(screen.getByText('Smile')).toBeInTheDocument(); // "Smile" should be present
  });
});
