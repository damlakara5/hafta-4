import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock the ClipboardJS functionality
jest.mock('clipboard', () => {
  const originalModule = jest.requireActual('clipboard');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockImplementation((selector) => {
      document.querySelector(selector).addEventListener('click', (e) => {
        // Mock the clipboard functionality
        navigator.clipboard.writeText = jest.fn().mockResolvedValue();
        navigator.clipboard.writeText(e.currentTarget.getAttribute('data-clipboard-text'));
      });
      return {
        destroy: jest.fn(),
      };
    }),
  };
});

describe('Emoji copy functionality', () => {
  test('copies emoji to clipboard on click', async () => {
    render(<App />);

    // Assuming "Smile" emoji is part of your initial emoji list
    const smileEmojiRow = screen.getByText('Smile').closest('.copy-to-clipboard');
    fireEvent.click(smileEmojiRow);

    // Check if clipboard.writeText was called with the correct emoji symbol
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('😊'); // Replace '😊' with the actual symbol of "Smile" emoji
  });
});
