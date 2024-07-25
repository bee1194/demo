import { fireEvent, render, screen } from "@testing-library/react";

import ViewButton from "./ViewButton";

describe("ViewButton component", () => {
  const mockOnClick = jest.fn();

  it("Renders the button with the correct class names", () => {
    render(<ViewButton onClick={mockOnClick} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn btn-sm btn-success btn-outline btn-square");
  });

  it("Renders the RemoveRedEyeOutlined icon", () => {
    render(<ViewButton onClick={mockOnClick} />);
    const icon = screen.getByTestId("RemoveRedEyeOutlinedIcon");
    expect(icon).toBeInTheDocument();
  });

  it("Calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ViewButton onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Does not throw an error if onClick is not provided", () => {
    render(<ViewButton onClick={mockOnClick} />);
    const button = screen.getByRole("button");
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
