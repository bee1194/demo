import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

interface Props {
  onClick?: () => void;
}

export default function ViewButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm btn-success btn-outline btn-square"
    >
      <RemoveRedEyeOutlinedIcon />
    </button>
  );
}
