import React, { useState, useEffect } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function App() {
  const handleGoBack = () => {
    // Implement your logic to go back
    console.log("Going back...");
  };
  const [selectedButton, setSelectedButton] = useState("resources");
  const [profileImage, setProfileImage] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  useEffect(() => {
    // Retrieve profile image from localStorage on component mount
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);
  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);

    // Save the profile image URL to localStorage
    localStorage.setItem("profileImage", imageUrl);
  };
  return (
    <div className="App" style={{ backgroundColor: "#FBFBFB" }}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <img
            src="/04xF9i3M_400x400.jpg"
            alt="Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Your App Name
          </Typography>
          <label htmlFor="profile-image-input">
            <Button
              variant="contained"
              style={{ backgroundColor: "#2ECA74" }}
              startIcon={<AddIcon />}
            >
              Add Item
            </Button>
            <IconButton color="inherit" component="span">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "black",
                  }}
                />
              ) : (
                <AccountCircleIcon />
              )}
            </IconButton>
          </label>
          <input
            type="file"
            accept="image/*"
            id="profile-image-input"
            style={{ display: "none" }}
            onChange={handleProfileImageChange}
          />
        </Toolbar>
      </AppBar>
      <IconButton
        TextField="Add Item"
        edge="start"
        color="inherit"
        style={{ position: "absolute", top: 60, left: 10 }}
        onClick={handleGoBack}
      >
        <ArrowBackIcon />
      </IconButton>
      <Grid container style={{ height: "100vh" }}>
        {/* Left half */}
        <Grid item xs={6}>
          <Paper
            style={{
              padding: "150px",
              height: "70%",
              backgroundColor: "#FBFBFB",
              marginTop: "-80px",
            }}
          >
            {/* Your form goes here */}
            <form>
              <Typography variant="h5" gutterBottom>
                Item Details
              </Typography>
              <TextField
                label="Item Title"
                placeholder="Enter Item Title"
                variant="outlined"
                fullWidth
                margin="normal"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                label="Link"
                placeholder="Enter Link"
                variant="outlined"
                fullWidth
                margin="normal"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                label="Icon URL"
                placeholder="Enter Icon URL"
                variant="outlined"
                fullWidth
                margin="normal"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                label="Tag Name"
                placeholder="Enter Tag Name"
                variant="outlined"
                fullWidth
                margin="normal"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                label="Category"
                placeholder="Enter Category"
                variant="outlined"
                fullWidth
                margin="normal"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                label="Description"
                placeholder="Enter Description"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                margin="normal"
                style={{ backgroundColor: "white" }}
              />

              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                Create
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Right half */}
        <Grid item xs={6}>
          <Paper
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FBFBFB",
            }}
          >
           <img
  src={process.env.PUBLIC_URL + '/photo1542290425b5d02738ef3a.jpeg'}
  alt="Image"
  style={{ width: '60%', height: '60%' }}
/>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
