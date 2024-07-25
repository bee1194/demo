import { EditOutlined } from "@mui/icons-material";

interface Props {
  onClick?: () => void;
}

export default function EditButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm btn-info btn-outline btn-square"
    >
      <EditOutlined />
    </button>
  );
}
