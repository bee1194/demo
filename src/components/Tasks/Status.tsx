import { ITask, ITaskStatus } from "@/models/task.model";

interface Props {
  task: ITask;
}

export default function Status(props: Props) {
  const { task } = props;

  const getStatusColor = (status: string) => {
    switch (status) {
      case ITaskStatus.TODO:
        return "badge-primary";
      case ITaskStatus.IN_PROGRESS:
        return "badge-info";
      case ITaskStatus.DONE:
        return "badge-success";
      default:
        return "badge-warning";
    }
  };

  return (
    <div
      className={`badge badge-outline badge-lg ${getStatusColor(task.status)}`}
    >
      {task.status}
    </div>
  );
}
