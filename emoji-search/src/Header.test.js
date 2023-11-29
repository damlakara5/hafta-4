// Import necessary utilities from React Testing Library
import { render, screen } from 'react-dom';
import Header from './Header';
import React from 'react'; // Import React

// Import the component to be tested

// Write the test
describe('Header component tests', () => {
  test('renders the header component with emojis', () => {
    // Render the component
    render(<Header />);

    // Use screen.getByAltText to query the images by their alt text
    const emojiOne = screen.getByAltText('');
    const emojiTwo = screen.getByAltText('');

    // Expect that the emojis are in the document
    expect(emojiOne).toBeInTheDocument();
    expect(emojiTwo).toBeInTheDocument();

    // Check for the text 'Emoji Search' if needed
    expect(screen.getByText('Emoji Search')).toBeInTheDocument();
  });
});
