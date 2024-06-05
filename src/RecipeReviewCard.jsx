/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Import necessary modules and components from React and Material-UI
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

// Create a styled IconButton component that rotates when expanded
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Define the RecipeReviewCard component
export default function RecipeReviewCard({ name, email, content }) {
  return (
    // Card component with a maximum width of 345px
    <Card sx={{ maxWidth: 345 }}>
      {/* CardHeader component with an avatar, title, and subheader */}
      <CardHeader
        avatar={
          // Avatar component with a background color and the first letter of the name
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        title={name} // Display the name as the title
        subheader={email} // Display the email as the subheader
      />
      {/* CardContent component with the content text */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
