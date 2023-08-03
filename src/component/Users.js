import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getItem, sendData, setEmpty } from "../action";
import "../App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logo from "../minal.jpg";
import { Typography } from "@mui/material";
import Spinner from "react-spinkit";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import git from "../git.png";
function Users(props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getItem, sendData, selectedData, apiData, setEmpty } = props;
  const [user, setUser] = useState("");
  function send(data) {
    sendData(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/profile");
    }, 2300);
  }

  function handerName(e) {
    setUser(e.target.value);
  }

  function submitData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getItem(user);
    }, 2000);
  }
  // console.log("user", user);
  // console.log("par api data", apiData);
  // console.log("my data", selectedData);
  // console.log("DF",selectedData.length)

  // useEffect(()=>{
  // getItem("RajashekarRaju");
  // },[])
  useEffect(()=>{
    setEmpty()
  },[user])
  return (
    <>
      <Grid className="githubFinder">
        <Typography>
          {" "}
          <img src={git} className="logo" /> Github Finder
        </Typography>
      </Grid>
      <Grid container className="greenBox">
        <Grid className="mainBox" sm="12" md="12">
          {/* <Typography className="text">Search Github Users</Typography> */}
          <TextField
            className="searchBar"
            name="name"
            placeholder="Search Github user Here "
            variant="filled"
            InputProps={{ disableUnderline: true }}
            onChange={handerName}
          />
          <Button
            variant="contained"
            onClick={submitData}
            className="serchBut"
            color="success"
          >
            Search
          </Button>
        </Grid>
        {loading && (
          <Spinner
            name="circle"
            style={{ margin: "0px auto", width: 100, height: 100 }}
          />
        )}
        <Grid container className="girdn" sm="12" md="12" xs="12">
          {selectedData.length == 0 ? (
            <Typography className="err">User Not Found</Typography>
          ) : (
            <></>
          )}
        </Grid>
        {Object.keys(selectedData).length != 0 ? (
          <Grid container className="girdn" sm="12" md="12" xs="12">
            {selectedData.length > 0 ? (
              selectedData.map((data, index) => (
                <Grid container className="boxx" sm="2.7" md="2.7">
                  <Grid sm="6" md="6" xs="6">
                    <img src={data.avatar_url} className="imgBox" />
                  </Grid>
                  <Grid sm="5" md="5" xs="6" className="box2">
                    <Typography className="name">
                      {data.login.length > 9 ? (
                        <>{data.login.slice(0, 9) + "....."}</>
                      ) : (
                        <>{data.login}</>
                      )}
                    </Typography>

                    <Button
                      variant="contained"
                      className="profile"
                      color="success"
                      onClick={() => send(data)}
                    >
                      View
                    </Button>
                  </Grid>
                </Grid>
              ))
            ) : (
              <Typography className="err">User Not Found</Typography>
            )}
            {/* {selectedData[0]?.total_count == 0 ? (
          <Typography className="err">
            User Not Found
          </Typography>
        ) : (
          <></>
        )} */}
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
  // state.todoReducers.list
  return {
    selectedData: state?.getDataReducers?.selectedData,
    apiData: state?.getDataReducers?.apiData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getItem,
      sendData,
      setEmpty,
    },

    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
