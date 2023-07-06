import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Me from "../../assets/1666248103726.jpeg";
import Resume from "../../assets/Kunal Katara's Resume.pdf";
import Button from "@mui/material/Button";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import {motion} from "framer-motion"
import "./Home.scss";
const Home = () => {
  const theme = createTheme({
    palette: {
      success: {
        main: "#03e9f4",
      },
    },
  });
  return (
    <>
      <div id="home">
        <div id="container">
          <div id="home_col_1">
            <h2 id="description"></h2>
            {""}
            <ThemeProvider theme={theme}>
              {" "}
              <Button
                style={{ marginTop: "50px" }}
                href={Resume}
                download
                target="_blank"
                variant="outlined"
                color="success"
                startIcon={<DownloadRoundedIcon />}
              >
                Download Resume
              </Button>
            </ThemeProvider>

            {/* <a href={Resume}  >Download my resume</a> */}
          </div>
          <div id="home_col_2">
            <motion.img

              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 270,
                damping: 20,
              }}
              whileHover={{ scale: 0.8 }}
              src={Me}
              alt="img"
              style={{ height: "510px", width: "490px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
