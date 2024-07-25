import { render, screen } from "@testing-library/react";

import { ITask, ITaskStatus } from "@/models/task.model";

import Status from "./Status";

describe("Status component", () => {
  it("Displays the correct status text", () => {
    const task: ITask = { status: ITaskStatus.TODO } as unknown as ITask;
    render(<Status task={task} />);
    const statusElement = screen.getByText(ITaskStatus.TODO);
    expect(statusElement).toBeInTheDocument();
  });

  it("Applies the correct class for TODO status", () => {
    const task: ITask = { status: ITaskStatus.TODO } as unknown as ITask;
    render(<Status task={task} />);
    const statusElement = screen.getByText(ITaskStatus.TODO);
    expect(statusElement).toHaveClass("badge-primary");
  });

  it("Applies the correct class for IN_PROGRESS status", () => {
    const task: ITask = { status: ITaskStatus.IN_PROGRESS } as unknown as ITask;
    render(<Status task={task} />);
    const statusElement = screen.getByText(ITaskStatus.IN_PROGRESS);
    expect(statusElement).toHaveClass("badge-info");
  });

  it("Applies the correct class for DONE status", () => {
    const task: ITask = { status: ITaskStatus.DONE } as unknown as ITask;
    render(<Status task={task} />);
    const statusElement = screen.getByText(ITaskStatus.DONE);
    expect(statusElement).toHaveClass("badge-success");
  });

  it("Applies the default class for unknown status", () => {
    const task: ITask = {
      status: "UNKNOWN" as ITaskStatus,
    } as unknown as ITask;
    render(<Status task={task} />);
    const statusElement = screen.getByText("UNKNOWN");
    expect(statusElement).toHaveClass("badge-warning");
  });
});
