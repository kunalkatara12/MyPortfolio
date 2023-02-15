// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
// function Project() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );

// }

// export default Project

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

 function Project(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 400,
        borderRadius: "10px",
        backgroundColor: "#020936",
        color: "white",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image="" alt="project" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            cumque maiores odio quaerat minus temporibus debitis optio ipsum in
            dicta tenetur sed unde voluptatum quia eveniet nihil.
          </Typography>{" "}
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
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
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Project;