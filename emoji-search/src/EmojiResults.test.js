import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock data for testing
const mockEmojiData = [
  { title: 'Smile', symbol: '😊' },
  { title: 'Wink', symbol: '😉' },
  // ...add more mock emoji data as needed
];

// This is a simple mock for the EmojiResults component
jest.mock('./EmojiResults', () => ({
  __esModule: true,
  default: ({ emojiData }) => (
    <div>
      {emojiData.map(data => (
        <div key={data.title} data-testid="emoji-item">
          {data.title}: {data.symbol}
        </div>
      ))}
    </div>
  ),
}));

describe('App component', () => {
  test('renders emoji list successfully on initial load', () => {
    render(<App />);

    // Replace this with state initialization logic if necessary
    // For instance, if the App component fetches emoji data on mount
    // you will need to mock this and provide the mockEmojiData as initial data
    const emojiItems = screen.getAllByTestId('emoji-item');
    expect(emojiItems).toHaveLength(mockEmojiData.length);
    mockEmojiData.forEach((emoji, index) => {
      expect(emojiItems[index]).toHaveTextContent(emoji.title);
      expect(emojiItems[index]).toHaveTextContent(emoji.symbol);
    });
  });
});
