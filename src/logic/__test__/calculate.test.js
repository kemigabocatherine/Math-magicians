import { render, screen, fireEvent } from '@testing-library/react';
import calculate from '../calculator';

const obj = {
  total: null,
  next: null,
  operation: null,
};

describe('Calculate', () => {
  it('should verify if button AC is working', () => {
    const buttonElement = screen.getByText('AC');
    console.log(buttonElement);
    fireEvent.click(buttonElement);
  });
});
