import { Button } from "@mui/material";

interface SubmitPageProps {
  downloadPDF: () => void;
}

const SubmitPage: React.FC<SubmitPageProps> = ({ downloadPDF }) => {
  return (
    <>
      <Button
        color="inherit"
        style={{ backgroundColor: "green" }}
        onClick={downloadPDF}
      >
        Download
      </Button>
    </>
  );
};

export default SubmitPage;
