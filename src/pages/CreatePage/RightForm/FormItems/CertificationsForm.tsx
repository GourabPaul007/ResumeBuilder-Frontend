import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, FC } from "react";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { useStyles } from "./_FormsStyles";
import { ColorPicker } from "../../../../Components/ColorPicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Certificate, Certifications } from "../../../../interfaces/Certification";

interface CertificationFormProps {
  formTitle: string;
  certifications: Certifications;
  setCertifications: Dispatch<React.SetStateAction<Certifications>>;
}

export const CertificationsForm: FC<CertificationFormProps> = React.memo((props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // ==================================================================================================================
  // Add or Remove Fields
  const handleAddFields = () => {
    props.setCertifications({
      ...props.certifications,
      data: [
        ...props.certifications.data,
        {
          id: `certificate${Date.now()}`,
          certificateName: "",
          certificateDate: "",
          organizationName: "",
          certificateLink: "",
        },
      ],
    });
  };
  const handleRemoveFields = (id: string) => {
    const certificationsArray = [...props.certifications.data];
    certificationsArray.splice(
      certificationsArray.findIndex((value) => value.id === id),
      1
    );
    props.setCertifications({ ...props.certifications, data: certificationsArray });
  };

  // ==================================================================================================================
  // Handle Text Inputs
  const handleBlockTitleInput = (title: string) => {
    props.setCertifications({ ...props.certifications, title: title });
  };
  const handleOrganizationNameInput = (organizationName: string, pos: number): void => {
    const newCertifications = props.certifications.data.map((certificate: Certificate, index) => {
      if (pos === index) {
        certificate.organizationName = organizationName;
      }
      return certificate;
    });
    props.setCertifications({ ...props.certifications, data: newCertifications });
    console.log(props.certifications);
  };
  const handleCertificateNameInput = (certificateName: string, pos: number): void => {
    const newCertifications = props.certifications.data.map((certificate: Certificate, index) => {
      if (pos === index) {
        certificate.certificateName = certificateName;
      }
      return certificate;
    });
    props.setCertifications({ ...props.certifications, data: newCertifications });
  };
  const handleCertificateDateInput = (certificateDate: string, pos: number): void => {
    const newCertifications = props.certifications.data.map((certificate: Certificate, index) => {
      if (pos === index) {
        certificate.certificateDate = certificateDate;
      }
      return certificate;
    });
    props.setCertifications({ ...props.certifications, data: newCertifications });
  };
  const handleCertificateLinkInput = (certificateLink: string, pos: number): void => {
    const newCertifications = props.certifications.data.map((certificate: Certificate, index) => {
      if (pos === index) {
        certificate.certificateLink = certificateLink;
      }
      return certificate;
    });
    props.setCertifications({ ...props.certifications, data: newCertifications });
  };

  return (
    <>
      <Card style={{ boxShadow: "none" }}>
        <Typography align="center" style={{ fontSize: 24 }}>
          {props.formTitle}
        </Typography>
        <Grid container marginBottom={2}>
          <Grid item xs={12}>
            <TextField
              size="small"
              variant="filled"
              margin="dense"
              required
              fullWidth
              InputProps={{ classes: { underline: classes.underline } }}
              label="Title"
              name="title"
              value={props.certifications.title}
              onChange={(e) => handleBlockTitleInput(e.target.value)}
            />
          </Grid>
        </Grid>
        {props.certifications.data.map((certificate: Certificate, index) => (
          <div key={index}>
            <Grid container marginBottom={2}>
              <Grid item xs={11}>
                <Grid container columnSpacing={2} rowSpacing={0}>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Organization Name e.g. Udemy/Udacity etc."
                      name="certificateOrganizationName"
                      value={certificate.organizationName}
                      onChange={(e) => handleOrganizationNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Certification date e.g. Jan 1, 2022"
                      name="certificateDate"
                      value={certificate.certificateDate}
                      onChange={(e) => handleCertificateDateInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Certificate Name e.g. Machine Learning Certificate"
                      name="certificateName"
                      value={certificate.certificateName}
                      onChange={(e) => handleCertificateNameInput(e.target.value, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      InputProps={{ classes: { underline: classes.underline } }}
                      label="Certificate Link"
                      name="certificateLink"
                      value={certificate.certificateLink}
                      onChange={(e) => handleCertificateLinkInput(e.target.value, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={1}
                style={{
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <IconButton
                  onClick={() => {
                    handleRemoveFields(certificate.id);
                  }}
                >
                  <RemoveCircleOutlineRoundedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        ))}
        <Typography align="center">
          <Button
            size="medium"
            variant="contained"
            onClick={handleAddFields}
            style={{ margin: "8px 0px", backgroundColor: "#00ccc9" }}
          >
            Add Another
          </Button>
        </Typography>
        <CardActions disableSpacing style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show advanced options"
            style={{ width: 100, borderRadius: 5, backgroundColor: expanded ? "#e0e0e0" : "#f0f0f0" }}
          >
            <ExpandMoreIcon
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms" }}
            />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ margin: 0, padding: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                border: "1px solid #777",
                borderRadius: 5,
                padding: 8,
                margin: "4px 0px",
              }}
            >
              <div
                style={{
                  // height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                }}
              >
                Background Color &#9658;&nbsp;
                <ColorPicker
                  color={props.certifications.style.bgColor ? props.certifications.style.bgColor : "#123456"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setCertifications({
                      ...props.certifications,
                      style: { ...props.certifications.style, bgColor: newColor },
                    });
                  }}
                />
              </div>
              <div
                style={{
                  // height: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                }}
              >
                Text Color &#9658;&nbsp;
                <ColorPicker
                  color={props.certifications.style.textColor ? props.certifications.style.textColor : "#000000"}
                  height={36}
                  handleColor={(newColor: string) => {
                    props.setCertifications({
                      ...props.certifications,
                      style: { ...props.certifications.style, textColor: newColor },
                    });
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
});
