import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingPage from './BookingPage';

import { fetchAPI, submitAPI } from './API';

jest.mock('./API', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe('BookingPage', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    submitAPI.mockClear();
  });

  test('renders BookingForm when not submitted', () => {
    render(<BookingPage />);

    expect(screen.getByText('Reserve a Table')).toBeInTheDocument();
  });

  test('fetches available times when a date is selected', async () => {
    fetchAPI.mockReturnValue(['12:00 PM', '1:00 PM']);

    render(<BookingPage />);

    const dateInput = screen.getByLabelText('Choose Date:');
    fireEvent.change(dateInput, { target: { value: '2023-10-10' } });

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-10-10'));
    });
  });

  test('submits the form and shows confirmation on success', async () => {
    fetchAPI.mockReturnValue(['12:00 PM', '1:00 PM']);
    submitAPI.mockReturnValue(true);

    render(<BookingPage />);

    fireEvent.change(screen.getByLabelText('Choose Date:'), { target: { value: '2023-10-10' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText('Your Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Your Email:'), { target: { value: 'john@example.com' } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith({
        occasion: '',
        guests: '4',
        date: '2023-10-10',
        time: '12:00 PM',
        name: 'John Doe',
        email: 'john@example.com',
      });
    });

    expect(screen.getByText('Thank you for Booking with us!')).toBeInTheDocument();
  });

  test('shows an alert if the form submission fails', async () => {
    fetchAPI.mockReturnValue(['12:00 PM', '1:00 PM']);
    submitAPI.mockReturnValue(false);

    render(<BookingPage />);

    fireEvent.change(screen.getByLabelText('Choose Date:'), { target: { value: '2023-10-10' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText('Your Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Your Email:'), { target: { value: 'john@example.com' } });

    window.alert = jest.fn();

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Failed to make a reservation.');
    });
  });
});