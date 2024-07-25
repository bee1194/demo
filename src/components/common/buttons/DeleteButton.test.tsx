import { fireEvent, render, screen } from "@testing-library/react";

import DeleteButton from "./DeleteButton";

describe("DeleteButton component", () => {
  it("Renders the button with the correct class names", () => {
    render(<DeleteButton />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn btn-sm btn-error btn-outline btn-square");
  });

  it("Renders the DeleteOutlined icon", () => {
    render(<DeleteButton />);
    const icon = screen.getByTestId("DeleteOutlinedIcon");
    expect(icon).toBeInTheDocument();
  });

  it("Calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<DeleteButton onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Does not throw an error if onClick is not provided", () => {
    render(<DeleteButton />);
    const button = screen.getByRole("button");
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
