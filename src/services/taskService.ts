import { ITask, ITaskStatus } from "@/models/task.model";

export const updateTask = async (): Promise<ITask> => {
  // This is a mock implementation of the updateTask function
  // We return the updated task
  return {} as unknown as ITask;
};

export const assignTask = async (): Promise<ITask> => {
  // This is a mock implementation of the assignTask function
  // We return the updated task
  return {} as unknown as ITask;
};

export const deleteTask = async (): Promise<string> => {
  // This is a mock implementation of the deleteTask function
  // We return the Status of the deleted task
  return "DELETED";
};

// This is a mock service that returns a list of tasks
export const getTasks = async (): Promise<ITask[]> => {
  return [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: ITaskStatus.TODO,
      assignee_id: 1,
      assignee: "Andy",
      created_at: "2021-10-01T00:00:00.000Z",
      created_by: "User 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: ITaskStatus.TODO,
      assignee_id: 2,
      assignee: "Zoe",
      created_at: "2021-10-02T00:00:00.000Z",
      created_by: "User 2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: ITaskStatus.IN_PROGRESS,
      assignee_id: 3,
      assignee: "Iron Man",
      created_at: "2021-10-03T00:00:00.000Z",
      created_by: "User 3",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      status: ITaskStatus.DONE,
      assignee_id: 4,
      assignee: "Captain",
      created_at: "2021-10-04T00:00:00.000Z",
      created_by: "User 4",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      status: ITaskStatus.DONE,
      assignee_id: 5,
      assignee: "Thanos",
      created_at: "2021-10-05T00:00:00.000Z",
      created_by: "User 5",
    },
  ];
};

const taskService = {
  getTasks,
};

export default taskService;
