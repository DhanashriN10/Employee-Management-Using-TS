import React from "react";
import { makeStyles } from "@mui/styles";
import { InputBase, Paper, Box } from "@mui/material";
import MiniDrawer from "./Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useReducer } from "react";
import { SubmitEmp } from "./Service/dataservice";
import { useNavigate } from "react-router-dom";


const useStyle = makeStyles({
  page: {
    width: "95.50vw",
    height: "91vh",
    // border: "1px solid Black",
    position: "absolute",
    left: "65px",
    top: "66px",
  },
  card: {
    height: "65%",
    width: "35%",
    // border: "1px solid black",
    position: "absolute",
    left: "380px",
  },
  field1: {
    width: "100%",
    height: "10%",
    // border: "1px solid red",
    "& #add":{
      fontSize:'25px'
    }
  },
  field2: {
    width: "100%",
    // height: "51%",
    height:'78%',
    // border: "1px solid red",
    display: "flex",
    flexDirection: "row",
  },
  col1: {
    height: "100%",
    width: "40%",
    // border: "1px solid black",
  },
  f1: {
    height: "15%",
    width: "100%",
    // border:'1px solid black'
  },
  f2: {
    height: "15%",
    width: "90%",
    // border:'1px solid black',
    marginLeft:'20px'
  },
  f3: {
    height: "15%",
    width: "90%",
    // border:'1px solid black',
    marginLeft:'15px'
  },
  f4: {
    height: "15%",
    width: "90%",
    // border:'1px solid black',
    marginLeft:'10px'
  },
  f5: {
    height: "15%",
    width: "90%",
    // border:'1px solid black',
    marginLeft:'0px'
  },
  f6: {
    height: "15%",
    width: "80%",
    // border:'1px solid black',
    marginLeft:'10px'
  },
  f7: {
    height: "15%",
    width: "80%",
    // border:'1px solid black',
    marginLeft:'10px'
  },
  col2: {
    height: "100%",
    width: "60%",
    // border: "1px solid blue",
  },
  s1: {
    height: "15%",
    width: "100%",
    // border:'1px solid black',
    "& #outlined-basic2": {
      width: "250px",
    },
  },
  s2: {
    height: "15%",
    width: "100%",
    // border:'1px solid black',
    "& #outlined-basic2": {
      width: "250px",
    },
  },
  s3: {
    height: "15%",
    width: "100%",
    // border:'1px solid black',
    "& #outlined-basic2": {
      width: "250px",
    },
  },
  field5: {
    width: "100%",
    height: "10%",
    // border: "1px solid red",
    "& #btn": {
      left: "200px",
      top:'10px'
    },
  },
  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    page: {
      width: "140vw",
      height: "145vh",
      // border: "1px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",
    },
    card: {
      height: "65%",
      width: "88%",
      // border: "1px solid black",
      position: "absolute",
      left: "30px",
    },
    field1: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
    },
    field2: {
      width: "100%",
      height:'80%',
      // border: "1px solid red",
      display: "flex",
      flexDirection: "row",
    },
    col1: {
      height: "100%",
      width: "40%",
      // border: "1px solid black",
    },
    f1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    col2: {
      height: "100%",
      width: "60%",
      // border: "1px solid blue",
    },
    s1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    s2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    s3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    field5: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
      "& #btn": {
        left: "130px",
        top:'8px'
      },
    },
  },

  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    page: {
      width: "140vw",
      height: "145vh",
      // border: "1px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",
    },
    card: {
      height: "65%",
      width: "88%",
      // border: "1px solid black",
      position: "absolute",
      left: "30px",
    },
    field1: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
    },
    field2: {
      width: "100%",
      height:'80%',
      // border: "1px solid red",
      display: "flex",
      flexDirection: "row",
    },
    col1: {
      height: "100%",
      width: "40%",
      // border: "1px solid black",
    },
    f1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    col2: {
      height: "100%",
      width: "60%",
      // border: "1px solid blue",
    },
    s1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    s2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    s3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "190px",
      },
    },
    field5: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
      "& #btn": {
        left: "130px",
        top:'8px'
      },
    },
  },
  ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    page: {
      width: "90vw",
      height: "90vh",
      // border: "1px solid Black",
      position: "absolute",
      left: "65px",
      top: "66px",
    },
    card: {
      height: "65%",
      width: "88%",
      // border: "1px solid black",
      position: "absolute",
      left: "30px",
    },
    field1: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
    },
    field2: {
      width: "100%",
      height:'80%',
      // border: "1px solid red",
      display: "flex",
      flexDirection: "row",
    },
    col1: {
      height: "100%",
      width: "40%",
      // border: "1px solid black",
    },
    f1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    f3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black'
    },
    col2: {
      height: "100%",
      width: "60%",
      // border: "1px solid blue",
    },
    s1: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "270px",
      },
    },
    s2: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "270px",
      },
    },
    s3: {
      height: "15%",
      width: "100%",
      // border:'1px solid black',
      "& #outlined-basic2": {
        width: "270px",
      },
    },
    field5: {
      width: "100%",
      height: "10%",
      // border: "1px solid red",
      "& #btn": {
        left: "180px",
        top:'8px',
        width:'150px',
        height:'40px'
      },
    },
  }
});

function AddEmp() {
  const classes = useStyle();
  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    contact: "",
  });


  const takename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takeadd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      address: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takecontact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      contact: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takesalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      salary: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takeTax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      tax: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takepf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      pf: event.target.value,
    }));
    console.log(event.target.value);
  };
  const takeemi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployee((prevState) => ({
      ...prevState,
      emi: event.target.value,
    }));
    console.log(event.target.value);
  };

  const [sub,setSub]=useState(false)
  const submit = () => {
    SubmitEmp(employee)
      .then((response) => {
        console.log(response, "****added****");
      })
      .catch((error) => {
        console.log(error);
      });
      navigate('/dashboard')
      // setSub(true)
  };

  return (
    <div className={classes.page}>
      {/* <MiniDrawer /> */}
      <Paper elevation={5} className={classes.card}>
        <div className={classes.field1}>
          <b><span id="add">Add Employee</span></b>
        </div>
        <div className={classes.field2}>
          <div className={classes.col1}>
            <div className={classes.f1}><b>Name:</b></div>
            <div className={classes.f2}><b>Address:</b></div>
            <div className={classes.f3}><b>Contact:</b></div>
            <div className={classes.f4}><b>Salary:</b></div>
            <div className={classes.f5}><b>Tax:</b></div>
            <div className={classes.f6}><b>PF:</b></div>
            <div className={classes.f7}><b>HRA:</b></div>
          </div>
          <div className={classes.col2}>
            <div className={classes.s1}>
              
              <TextField
                id="outlined-basic2"
                label=" name"
                size="small"
                variant="outlined"
                onChange={takename}
              />
            </div>
            <div className={classes.s2}>
              
              <TextField
                id="outlined-basic2"
                label="address"
                size="small"
                variant="outlined"
                onChange={takeadd}
              />
            </div>
            <div className={classes.s3}>
            
              <TextField
                id="outlined-basic2"
                label="contact"
                size="small"
                variant="outlined"
                onChange={takecontact}
              />
            </div>
            <div className={classes.s3}>
            
              <TextField
                id="outlined-basic2"
                label="salary"
                size="small"
                variant="outlined"
                onChange={takesalary}
              />
            </div>
            <div className={classes.s3}>
            
              <TextField
                id="outlined-basic2"
                label="Tax"
                size="small"
                variant="outlined"
                onChange={takeTax}
              />
            </div>
            <div className={classes.s3}>
            
              <TextField
                id="outlined-basic2"
                label="PF"
                size="small"
                variant="outlined"
                onChange={takepf}
              />
            </div>
            <div className={classes.s3}>
            
              <TextField
                id="outlined-basic2"
                label="EMI"
                size="small"
                variant="outlined"
                onChange={takeemi}
              />
            </div>
          </div>
        </div>
        <div className={classes.field5}>
          <Button id="btn" variant="contained" onClick={submit}>
            SUBMIT
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default AddEmp;
