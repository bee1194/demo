import { ITask } from "@/models/task.model";

interface Props {
  task: ITask;
}

export default function DetailForm(props: Props) {
  const { task } = props;

  return <div>Use FormMik to Edit Task</div>;
}
