import { Autocomplete, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { About } from "../../interfaces/About";
import {
  addAboutYourself,
  addAddress,
  addCityZip,
  addEmails,
  addName,
  addPhno,
} from "../../store/ActionCreators/aboutActions";

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

  // const [userImage, setUserImage] = useState<File>();

  // const getUserImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const fileList = event.target.files;
  //   if (!fileList) return;
  //   console.log("PHOTOS:", fileList);
  //   setUserImage(fileList[0]);

  //   // uploadFile();
  // };

  // const uploadFile = function (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) {
  //   e.preventDefault();
  //   if (userImage) {
  //     const formData = new FormData();
  //     formData.append("userImage", userImage, userImage.name);

  //     fetch("http://localhost:5000/api/resume/post-img", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "blob",
  //       },
  //       body: formData,
  //     })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(`client`, err);
  //       });
  //   }
  // };

  // useEffect(() => {
  //   console.log(`userImage`, userImage);
  // }, [userImage]);

  const dispatch = useDispatch();
  // const about1 = useSelector((state: RootStateOrAny) => state.about1);

  const setName = (data: string) => {
    dispatch(addName(data));
  };
  const setAddress = (data: string) => {
    dispatch(addAddress(data));
  };
  const setCityZip = (data: string) => {
    dispatch(addCityZip(data));
  };
  const setPhno = (data: string) => {
    dispatch(addPhno(data));
  };
  const setAboutYourself = (data: string) => {
    dispatch(addAboutYourself(data));
  };
  const setEmails = (data: string) => {
    dispatch(addEmails(data));
  };

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
                setName(e.target.value);
                setAbout({ ...about, name: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              label="Address"
              value={about.address.join("<br>")}
              onChange={(e) => {
                setAddress(e.target.value);
                setAbout({ ...about, address: e.target.value.split("<br>") });
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              label="City Name, Zip Code"
              value={about.cityZip}
              onChange={(e) => {
                setCityZip(e.target.value);
                setAbout({ ...about, cityZip: e.target.value });
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              required
              fullWidth
              label="Phone No with Country code"
              value={about.phno}
              onChange={(e) => {
                setPhno(e.target.value);
                setAbout({ ...about, phno: e.target.value });
              }}
            />

            {/* <Autocomplete
              style={{ marginTop: 8, marginBottom: 4 }}
              multiple
              onChange={(e, value) => {
                handleEmails(value);
              }}
              id="tags-filled"
              options={[]}
              freeSolo
              size="small"
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  // multiline
                  // rows="3"
                  label="Emails"
                  placeholder="Eg. john@gmail.com(mailto:john@gmail.com) github.com/johnDoe(https://github.com/johnDoe)"
                />
              )}
            /> */}
            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              fullWidth
              required
              label="Emails"
              placeholder="john@gmail.com(mailto:john@gmail.com) github.com/johnDoe(https://github.com/johnDoe)"
              value={about.emails}
              onChange={(e) => {
                setEmails(e.target.value);
                setAbout({ ...about, emails: e.target.value.split(" ") });
              }}
            />
            <Typography align="left" color="#ef6c00" style={{ fontSize: 14, marginTop: 0, marginLeft: 2 }}>
              To Add Hyperlinks, type like- text(Link) Eg. Google(https://google.com). Remember to seperate each email
              by space
            </Typography>

            <TextField
              variant="outlined"
              size="small"
              margin="dense"
              fullWidth
              required
              label="About Yourself"
              value={about.about}
              onChange={(e) => {
                setAboutYourself(e.target.value);
                setAbout({ ...about, about: e.target.value });
              }}
            />

            {/* <div>
              <input
                type="file"
                name="userImage"
                accept=".png, .jpg"
                onChange={getUserImage}
              />
              <button onClick={(e) => uploadFile(e)}>upload</button>
            </div> */}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
