import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { About } from "../../interfaces/About";

export default function AboutSection({
  about,
  setAbout,
}: {
  about: About;
  setAbout: React.Dispatch<React.SetStateAction<About>>;
}) {
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [cityZip, setCityZip] = useState("");
  // const [phNo, setPhNo] = useState("");

  return (
    <>
      <Typography align="center" style={{ fontSize: 24 }}>
        About:
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              label="Full Name"
              value={about.name}
              onChange={(e) => {
                setAbout({ ...about, name: e.target.value });
              }}
              autoFocus
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              // required
              fullWidth
              label="Address"
              value={about.address}
              onChange={(e) => setAbout({ ...about, address: e.target.value })}
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              // required
              fullWidth
              label="City Name, Zip Code"
              value={about.cityZip}
              onChange={(e) => setAbout({ ...about, cityZip: e.target.value })}
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              // required
              fullWidth
              label="Phone no"
              value={about.phNo}
              onChange={(e) => setAbout({ ...about, phNo: e.target.value })}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
