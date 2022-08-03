import React from "react";
import { Modal, Box } from "@mui/material";

interface DownloadModalProps {
  isOpen: boolean;
}

const DownloadModal: React.FC<DownloadModalProps> = (props) => {
  const [open, setOpen] = React.useState(props.isOpen);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>bruh</Box>
      </Modal>
    </>
  );
};

export default DownloadModal;
