import Modal from "@/components/common/Modal";
import DetailForm from "@/components/Tasks/DetailForm";
import DetailInfo from "@/components/Tasks/DetailInfo";
import { ITask } from "@/models/task.model";

interface Props {
  type: "view" | "edit";
  task: ITask | null;
  setTask: (value: ITask | null) => void;
}

export default function DetailLayout(props: Props) {
  const { type, task, setTask } = props;

  return (
    <Modal
      open={Boolean(task)}
      onClose={() => setTask(null)}
      title={task?.title}
    >
      <>
        {type === "view" && task && <DetailInfo task={task} />}
        {type === "edit" && task && <DetailForm task={task} />}
      </>
    </Modal>
  );
}
