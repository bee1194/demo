import { APIDataState } from "@/constants/types";

export interface TaskSliceState {
  listing: APIDataState<ITask[]>;
}

export enum ITaskStatus {
  TODO = "todo",
  IN_PROGRESS = "inprogress",
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
