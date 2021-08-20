import { render, screen } from "@testing-library/react";
import Header from "./Header";

test('renders Header with "To Do List" text', () => {
  render(<Header />);
  const linkElement = screen.getByText(/To Do List/i);
  expect(linkElement).toBeInTheDocument();
});
