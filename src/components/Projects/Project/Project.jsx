import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, CardHeader } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Project.scss"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  color: "#20a876",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


 function Project(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

   return (
     <Card
       sx={{
         height: 220,
         width: 350,
         maxWidth: 400,
         maxHeight: 600,
         borderRadius: "10px",
         backgroundColor: "#020936",
         color: "white",
         display: "flex",
         flexDirection: "column",
         overflow: "scroll",
       }}
       className="card"
     >
       <CardHeader title={props.name} />
       {/* <Typography gutterBottom variant="h5" component="div"></Typography> */}

       <CardMedia
         component="img"
         height="90"
         image={props.imgLink}
         alt="project"
       />
       <CardActions style={{ width: "60%" }}>
         {" "}
         <ExpandMore
           expand={expanded}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         
         >
           <ExpandMoreIcon />
         </ExpandMore>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Typography variant="body2" color="white">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
             cumque maiores odio quaerat minus temporibus debitis optio ipsum in
             dicta tenetur sed unde voluptatum quia eveniet nihil.
           </Typography>{" "}
           {/* <CardActions
             sx={{ display: "flex", justifyContent: "space-around" }}
           > */}
           <Button
             size="small"
             color="error"
             target="_blank"
             href={props.Plink}
           >
             Project Link
             {/* <a href={props.link}></a> */}
           </Button>
           <Button
             size="small"
             color="primary"
             target="_blank"
             href={props.Glink}
           >
             Github
           </Button>
           {/* </CardActions> */}
         </CardContent>
       </Collapse>
     </Card>
   );
 }

export default Project;
