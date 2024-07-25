import { APIDataState } from "@/constants/types";

export interface TaskSliceState {
  get: APIDataState<ITask[]>;
}

export enum ITaskStatus {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: ITaskStatus;
  assignee_id: number;
  assignee: string;
  created_at: string;
  created_by: string;
}
