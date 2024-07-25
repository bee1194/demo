import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

interface Props {
  onClick?: () => void;
}

export default function DeleteButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm btn-error btn-outline btn-square"
    >
      <DeleteOutlinedIcon />
    </button>
  );
}
