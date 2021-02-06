import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStartupNews } from "../Redux/action";
import styled from "styled-components";
import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Loader } from "../../Homepage/Components/Loader";
import { LargeNewsBlock } from "../../Homepage/Components/LargeNewsBlock";
import SideBar from "../../SideBar/Components/SideBar";
import FooterPage from "../../Footer/Components/FooterPage";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles({
  fontWeight900: {
    fontWeight: "900",
  },
  marginTopWidth100: {
    marginTop: "40px",
    width: "100%",
  },
});

export function StartupNews() {
  const newsHeadlines = useSelector((state) => state.home.newsHeadlines);
  const isLoading = useSelector((state) => state.home.isLoading);
  const error = useSelector((state) => state.home.error);

  const [animatedLoader, setAnimatedLoader] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setAnimatedLoader(false);
    }, 1500);

    dispatch(getStartupNews());
  }, []);
  return (
    <Container maxWidth="xl">
      <Box>
        <SideBar />
      </Box>
      <Box>
        {
          animatedLoader ? (
            <Box style = {{display: "flex", margin: "0 0 0 -300px"}} >
              <Loader/>
            </Box>
          ) : (
          <Cont>
            <div>
            </div>
            <div style={{ marginLeft: "250px", marginTop: "-100px" }}>
              <Grid container>
                <Grid item className={classes.marginTopWidth100}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    className={classes.fontWeight900}
                  >
                    Startups
                  </Typography>
                </Grid>
                {newsHeadlines.map((item) => {
                  return <LargeNewsBlock key={item.id} news={item} />;
                })}
              </Grid>
              <div>
                <FooterPage />
              </div>
            </div>
          </Cont>
        )}
      </Box>
    </Container>
  );
}
