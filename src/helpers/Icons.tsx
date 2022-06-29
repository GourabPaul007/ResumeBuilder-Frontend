import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

export const getIcon = ({ name, color, margin }: { name: string; color: string; margin: string }) => {
  const iconStyles = { fontSize: 18, margin, color };

  switch (name.toLowerCase()) {
    case "phone":
      return <PhoneIcon style={iconStyles} />;
    case "home":
      return <HomeRoundedIcon style={iconStyles} />;
    case "home":
      return <HomeRoundedIcon style={iconStyles} />;
    case "location":
      return <LocationOnRoundedIcon style={iconStyles} />;
    case "address":
      return <LocationOnRoundedIcon style={iconStyles} />;
    case "github":
      return <GitHubIcon style={iconStyles} />;
    case "linkedin":
      return <LinkedInIcon style={iconStyles} />;
    case "email":
      return <EmailRoundedIcon style={iconStyles} />;
    case "other":
      return <LanguageRoundedIcon style={iconStyles} />;
    default:
      return <LanguageRoundedIcon style={iconStyles} />;
  }
};
