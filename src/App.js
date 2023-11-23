import React, { useState, useEffect } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  InputBase,
  Card,
  CardContent,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function App() {
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
            src="./logo192.png"
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
                  style={{ width: "32px", height: "32px", borderRadius: "50%" , background: 'black'}}
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

      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
  <div
    style={{
      display: "flex",
      backgroundColor: "#ECECEC",
      padding: "2px", // Adjust the padding if needed
      marginLeft: "20px", // Increase or decrease the margin to adjust length from sides
      marginRight: "20px", // Increase or decrease the margin to adjust length from sides
      borderRadius: "8px",
    }}
  >
    <Button
      variant="contained"
      color={selectedButton === "resources" ? "blue" : "default"}
      onClick={() => handleButtonClick("resources")}
      style={{
        marginRight: "10px",
        backgroundColor:
          selectedButton === "resources" ? "#0c69ff" : "inherit",
        color: selectedButton === "resources" ? "white" : "inherit",
      }}
    >
      Resources
    </Button>
    <Button
      variant="contained"
      color={selectedButton === "request" ? "blue" : "default"}
      onClick={() => handleButtonClick("request")}
      style={{
        marginRight: "10px",
        backgroundColor:
          selectedButton === "request" ? "#f3f4f7" : "inherit",
        color: selectedButton === "request" ? "inherit" : "inherit",
      }}
    >
      Request
    </Button>
    <Button
      variant="contained"
      color={selectedButton === "users" ? "blue" : "default"}
      onClick={() => handleButtonClick("users")}
      style={{
        backgroundColor:
          selectedButton === "users" ? "#f3f4f7" : "inherit",
        color: selectedButton === "users" ? "inherit" : "inherit",
      }}
    >
      Users
    </Button>
  </div>
</div>



      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div
          style={{
            position: "relative",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "600px",
            left: "-248px",
          }}
        >
          <InputBase
            placeholder="Search..."
            style={{
              marginLeft: "15px",
              paddingLeft: "30px",
              paddingRight: "10px",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <SearchIcon
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
          width: "80%",
          marginLeft: "160px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => (
          <Card
            key={card}
            style={{
              width: "30%",
              margin: "10px",
              paddingBottom: "110px",
              height: "90px",
            }}
          >
            <CardContent style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "50px",
                }}
              >
                         <img
            src="/Users/altafdevihosur/Downloads/my-figma-app/src/logo192.png"
            alt="Card Logo"
            style={{
              width: "30px",
              marginRight: "10px",
              border: "1px solid #ccc", // Add border style here
              borderRadius: "4px", // Optional: Add border-radius for rounded corners
            }}
          />

                <Typography variant="h6" gutterBottom>
                  Card Heading
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
                style={{ textAlign: "left", color: "#0c69ff" }}
              >
                www.slack.com
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textAlign: "left" }}
              >
                jfvskfskfskjnvskfnds sd dsjjsd
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
