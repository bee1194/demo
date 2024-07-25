import { ITask } from "@/models/task.model";

interface Props {
  task: ITask;
}

export default function DetailInfo(props: Props) {
  const { task } = props;

  return <div>Show detail info of Task</div>;
}
