import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import GDriveLogo from "../../media/google-drive-logo.png";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import "../../styles/Header.css";
export default function index({ userPhoto }) {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={GDriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header_searchContainer">
        <div className="header_searchBar">
          <SearchIcon />
          <input type="text" placeholder="Enter the Values..." />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header_icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt="User" />
      </div>
    </div>
  );
}
