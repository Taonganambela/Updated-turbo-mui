import { Avatar } from "@mui/material";
import React from "react";

type avatarCompProps = {
  imgName: string;
};

const NavAvatar: React.FC<avatarCompProps> = ({ imgName }: avatarCompProps) => {
  return <Avatar src={imgName} alt="avatar" className="w-8 h-8" />;
};

export default NavAvatar;
