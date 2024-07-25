import { fireEvent, render, screen } from "@testing-library/react";

import EditButton from "./EditButton";

describe("EditButton component", () => {
  const mockOnClick = jest.fn();

  it("Renders the button with the correct class names", () => {
    render(<EditButton onClick={mockOnClick} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn btn-sm btn-info btn-outline btn-square");
  });

  it("Renders the EditOutlined icon", () => {
    render(<EditButton />);
    const icon = screen.getByTestId("EditOutlinedIcon");
    expect(icon).toBeInTheDocument();
  });

  it("Calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<EditButton onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Does not throw an error if onClick is not provided", () => {
    render(<EditButton />);
    const button = screen.getByRole("button");
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
