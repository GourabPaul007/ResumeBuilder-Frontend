import React, { useState } from "react";

import GoogleIcon from "@mui/icons-material/Google";
import { googleSvg } from "../../Components/Icons";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface OAuthCardProps {}

const OAuthCard: React.FC<OAuthCardProps> = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <>
      <Button
        variant="contained"
        onClick={() => signInWithGoogle()}
        disabled={authing}
        style={{ padding: "10px 16px", marginTop: 8 }}
      >
        <GoogleIcon />
        {/* {googleSvg} */}
        &nbsp; Sign in with Google
      </Button>
    </>
  );
};

export default OAuthCard;
