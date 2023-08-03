import React from "react";
import logo from "../minal.jpg";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getItem, sendData } from "../action";
import "../App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import { Outlet, Link, Navigate } from "react-router-dom";
import git from "../git.png";
function profile(props) {
  const { apiData, repo } = props;
  console.log("my data", apiData);
  console.log("repo", repo);

  return (
    <>
      <Grid className="githubFinder">
        <Link className="logoo" to="/">
          <Typography variant="div">
            {" "}
            <img src={git} className="logo" /> Github Finder
          </Typography>
        </Link>
        <Link to="/" className="home">
          Home
        </Link>
      </Grid>
      <Grid container className="mainbox2">
        <Grid container className="box21" sm="8" md="8" xs="10">
          <Grid sm="5" md="3.8" xs="10" className="profileBox1">
            <img src={apiData.avatar_url} className="profilelImg" />
            {/* <Typography>Minal Jain</Typography> */}
          </Grid>
          <Grid sm="10" md="5" xs="10" className="profileBox2">
            <Typography className="profileName">
              {apiData.login}{" "}
              <Chip size="small" label={apiData.type} color="secondary" />
            </Typography>
            {apiData.location ? (
              <Typography className="loc">
                Location - {apiData?.location}
              </Typography>
            ) : (
              <Typography sx={{ mb: "20px" }}></Typography>
            )}
            <Stack direction="row" spacing={1}>
              <Chip label={apiData.followers + " Follwers"} color="primary" />
              <Chip label={apiData.following + " Following"} color="error" />
              <Chip label="10 Repo" color="warning" />
            </Stack>
            {/* <Typography className="name">Github - minal@github.com</Typography> */}
            <a href={apiData.html_url} target="_blank">
              <Button variant="contained" className="profileBut">
                Github Profile
              </Button>
            </a>
          </Grid>
        </Grid>
        <Grid container className="box21" sm="8" md="8" xs="10">
          <Typography variant="h5" className="latest">
            Latest Repository
          </Typography>
          {/* {repo.length > 0 ? (
            repo?.map((item, index) => (
              <Link to={item.clone_url} className="linkRepo" target="_blank">
              <Grid sm="12" md="12" xs="12" className="repo">
                <Typography className="repoName">
                  {item?.name+" " }
                  {item.privete == "true"?(
                  <Chip size="small" label="private" color="primary" />
                  ):(
                  <Chip size="small" label="Public" color="primary" />)}
                </Typography>
                <Typography className="date">
                  Created at - {item.created_at}
                </Typography>
                <Typography className="repoDes">{item?.description}</Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<VisibilityIcon />}
                    label={item.watchers_count}
                    color="error"
                  />
                  <Chip
                    icon={<StarIcon />}
                    label={item.stargazers_count}
                    color="secondary"
                  />
                  <Chip label={item.forks + " forks"} color="warning" />
                </Stack>
              </Grid>
              </Link>
            
            ))
          ) : (
            <h1>User Not Found </h1>
          )} */}
        </Grid>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
  // state.todoReducers.list
  return {
    apiData: state?.getDataReducers?.apiData,
    repo: state?.getDataReducers?.repo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {},

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(profile);
