import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { ReactElement } from "react";

interface Props {
  title?: string;
  children?: ReactElement;
  open: boolean;
  onClose?: () => void;
}

export default function Modal(props: Props) {
  const { title, open, onClose, children } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      {title && <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
