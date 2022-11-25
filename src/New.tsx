import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState, useReducer } from "react";
import { useEffect } from "react";
import { DeleteEmp, getEmp, UpdateEmp } from "./Service/dataservice";

import {useDispatch} from "react-redux"
import { LikeEmp, ShowSalary } from "./Router/action";
import {Notification} from "./Router/action"
import { useSelector} from "react-redux";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

// import React from 'react'
import MiniDrawer from "./Drawer";
import SalarySlip from "./SalarySlip";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";
import { SalaryReducer } from "./Router/reducer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    bgcolor:'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const useStyle = makeStyles({
    main: {
        width: "95.50vw",
        height: "91vh",
        // border: "1px solid Black",
        position: "absolute",
        left: "145px",
        top: "66px",
      },
      row:{
        width:'75%',
        height:'8%',
        // border:'1px solid black',
        display:'flex',
        flexDirection:'row',
        marginTop:'50px',
        marginLeft:'100px'
      },
      r1:{
        height:'100%',
        width:'20%',
        // border:'1px solid red' ,
        marginTop:'15px' 
      },
      r2:{
        height:'100%',
        width:'20%',
        // border:'1px solid red' ,
        marginTop:'15px' 
      },
      row1:{
        width:'75%',
        height:'8%',
        // border:'1px solid black',
        display:'flex',
        flexDirection:'row',
        marginTop:'20px',
        marginLeft:'100px'
      },
      c1:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c3:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c4:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c5:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c6:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c7:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
        marginTop:'15px'
      },
      c2:{
        height:'100%',
        width:'20%',
        // border:'1px solid red',
      },
      icon:{
        height:'70%',
        width:'80%',
        // border:'1px solid black',
        marginLeft:'10px',
        marginTop:'15px',
        display:'flex',
        flexDirection:'row'
      },
      icon1:{
        height:'100%',
        width:'40%',
        // border:'1px solid blue'
      },

      ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        main: {
          width: "140vw",
          height: "145vh",
          // border: "2px solid Black",
          position: "absolute",
          left: "65px",
          top: "66px",
         
        },
        row:{
          width:'95%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'20px',
          marginLeft:'10px'
        },
        r1:{
          height:'100%',
          width:'20%',
          // width:'280px',
          // border:'1px solid red' ,
          marginTop:'15px' 
        },
        r2:{
          height:'100%',
          width:'20%',
          // border:'1px solid red' ,
          marginTop:'15px' 
          // visibility:'hidden'
        },
        row1:{
          width:'95%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'20px',
          marginLeft:'10px'
        },
        c1:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
        },
        c5:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
          // visibility:'hidden'
        },
        c6:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
          // visibility:'hidden'
        },
        c7:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
          // visibility:'hidden'
        },
        c2:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
        },
        icon:{
          height:'70%',
          width:'80%',
          // border:'1px solid black',
          marginLeft:'10px',
          marginTop:'15px',
          display:'flex',
          flexDirection:'row'
        },
        icon1:{
          height:'100%',
          width:'40%',
          // border:'1px solid blue'
        },
  

      },
      ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
        main: {
          width: "85vw",
          height: "90vh",
          // border: "2px solid Black",
          position: "absolute",
          left: "65px",
          top: "66px",
          overflowY:'scroll'
         
        },
        row:{
          width:'95%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'20px',
          marginLeft:'10px'
        },
        r1:{
          height:'100%',
          width:'20%',
          // border:'1px solid red' ,
          marginTop:'15px' 
        },
        row1:{
          width:'95%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'20px',
          marginLeft:'10px'
        },
        c1:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
        },
        c2:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
        },
        icon:{
          height:'70%',
          width:'80%',
          // border:'1px solid black',
          marginLeft:'10px',
          marginTop:'15px',
          display:'flex',
          flexDirection:'row'
        },
        icon1:{
          height:'100%',
          width:'40%',
          // border:'1px solid blue'
        },
      },
      ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        main: {
          width: "90vw",
          height: "90vh",
          // border: "2px solid Black",
          position: "absolute",
          left: "65px",
          top: "66px",
          overflowY:'scroll'
         
        },
        row:{
          width:'96%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'40px',
          marginLeft:'10px'
        },
        r1:{
          height:'100%',
          width:'20%',
          // border:'1px solid red' ,
          marginTop:'15px' 
        },
        row1:{
          width:'96%',
          height:'8%',
          // border:'1px solid black',
          display:'flex',
          flexDirection:'row',
          marginTop:'20px',
          marginLeft:'10px'
        },
        c1:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
          marginTop:'15px'
        },
        c2:{
          height:'100%',
          width:'20%',
          // border:'1px solid red',
        },
        icon:{
          height:'70%',
          width:'80%',
          // border:'1px solid black',
          marginLeft:'10px',
          marginTop:'15px',
          display:'flex',
          flexDirection:'row'
        },
        icon1:{
          height:'100%',
          width:'40%',
          // border:'1px solid blue'
        },
      }

})

function New() {
    const classes = useStyle();
    const [empList, setEmpList] = useState([]);
    const navigate = useNavigate()

  
  
  const [editemployee, setEditEmployee] = useState({
    name: "",
    address: "",
    contact: "",
    salary:"",
    tax:"",
    pf:"",
    emi:""
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = (emp:any) => 
  {
    setOpen(true);
    setEditEmployee({
      // id:emp.id,
      name:emp.name,
      address:emp.address,
      contact:emp.contact,
      salary:emp.salary,
      tax:emp.tax,
      pf:emp.pf,
      emi:emp.emi
    })
  }
  const handleClose = () => setOpen(false);

  
  const deleteEmp = (id:any) => {
    let obj = {
      id: id,
    };
    console.log(obj, "****delete****");
    DeleteEmp(obj)
      .then((response) => {
        console.log(response.data.id, "Emp delete");
        // setRefreshPage();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEmp()
      .then((response) => {
        console.log("response");
        console.log(response);
        setEmpList(response.data);
        // setPageHide(true)
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(empList);

  const dispatch =useDispatch()

  const takeusername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takeaddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      address: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      contact: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takesalary = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      salary: event.target.value,
    }));
    console.log(event.target.value);
  };

  const taketax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      tax: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takepf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      pf: event.target.value,
    }));
    console.log(event.target.value);
  };

  const takehra = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditEmployee((prevState) => ({
      ...prevState,
      emi: event.target.value,
    }));
    console.log(event.target.value);
  };

  const submitEdit = (id:any) => {
    UpdateEmp(editemployee)
      .then((response) => {
        console.log(response, "****updated****");
      })
      .catch((error) => {
        console.log(error);
      });
      // navigate('/new')
  };

  const [like, setLike] = useState({})
  console.log(like,"****Profile Like****")
  
const gotosalary = () =>{
  // console.log('salary',emp)
  navigate('/salaryslip')
}

// const gotosub = () =>{
//   console.log('welcome')
//   navigate('/new')
// }
const [searchTerm,setSearchTerm] =useState("")

const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
  setSearchTerm(event.target.value)
}


const currentEmp = empList.filter((emp:any) => emp.name.includes(searchTerm))
// const currentEmp = empList.filter(emp => emp.name.includes(searchTerm))


console.log(currentEmp,'****Employee****')


  
  return (
    <div>
      <MiniDrawer searchHandler={searchHandler} searchTerm={searchTerm}/>
 
     <div className={classes.main}>
     <Paper className={classes.row}>
            <div className={classes.r1}>EmpID</div>
            <div className={classes.r1}>Name</div>
            <div className={classes.r1}>Address</div>
            <div className={classes.r1}>Contact</div>
            <div className={classes.r1}>Salary</div>
            <div className={classes.r2}>Tax</div>
            <div className={classes.r2}>PF</div>
            <div className={classes.r2}>EMI</div>
            <div className={classes.r1}>Edit</div>
         </Paper>
         
         {currentEmp.map((emp) => (
          
        <Paper className={classes.row1}>
        <div className={classes.c1}>{emp['id']}</div>
            {/* <div className={classes.c1} onClick={() =>{dispatch(ShowSalary(emp));{handleOpen1()}}}>{emp.name} */}
          <div className={classes.c1} onClick={() =>{dispatch(ShowSalary(emp));gotosalary()}}>{emp['name']}          
      </div>
            <div className={classes.c1}>{emp['address']}</div>
            <div className={classes.c3}>{emp['contact']}</div>
            <div className={classes.c4}>{emp['salary']}</div>
            <div className={classes.c5}>{emp['tax']}</div>
            <div className={classes.c6}>{emp['pf']}</div>
            <div className={classes.c7}>{emp['emi']}</div>
            <div className={classes.c2}>
                <div className={classes.icon}>
                    <div className={classes.icon1}>
                    
                    <CreateIcon onClick={()=>handleOpen(emp)}/>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{width: '50%',height: "22%", border: "0px solid red",marginLeft:'100px'}}>
          <span><b>Edit Employee</b></span>
        </div>
        <div style={{width: "100%",height: "51%",border: "0px solid red",marginTop:'20px',display: "flex",flexDirection: "row"}}>
          <div style={{height: "100%",width: "40%", border: "0px solid black"}}>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>Name:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>Address:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>Contact:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>Salary:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>Tax:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>PF:</div>
            <div style={{height:'53px',width:'100%',border:'0px solid black'}}>HRA:</div>
          </div>

            <div style={{height: "100%",width: "60%",border: "0px solid blue",}}>
                  <div style={{ height:'53px',width:'100%', border:'0px solid black'}}>
                      <TextField id="outlined-basic3" label=" name" size="small" variant="outlined" onChange={takeusername} 
                      defaultValue={editemployee.name} /></div>
                     
                  <div style={{ height:'53px',width:'100%', border:'0px solid black',}}> 
                       <TextField id="outlined-basic3" label="address" size="small" variant="outlined" onChange={takeaddress} 
                       defaultValue={editemployee.address}/></div>
                       
                   <div style={{ height:'53px',width:'100%', border:'0px solid black',}}> 
                        <TextField id="outlined-basic3" label="contact" size="small" variant="outlined" onChange={takephone}
                        defaultValue={editemployee.contact} /></div>  
                      
                      <div style={{ height:'53px',width:'100%', border:'0px solid black',}}> 
                        <TextField id="outlined-basic3" label="salary" size="small" variant="outlined" onChange={takesalary}
                         defaultValue={editemployee.salary} /></div>  

                      <div style={{ height:'53px',width:'100%', border:'0px solid black',}}> 
                        <TextField id="outlined-basic3" label="Tax" size="small" variant="outlined" onChange={taketax}
                        defaultValue={editemployee.tax} /></div> 

                        <div style={{ height:'53px',width:'100%', border:'0px solid black',}}> 
                        <TextField id="outlined-basic3" label="PF" size="small" variant="outlined" onChange={takepf}
                        defaultValue={editemployee.pf} /></div> 

                        <div style={{ height:'33%',width:'100%', border:'0px solid black',}}> 
                        <TextField id="outlined-basic3" label="HRA" size="small" variant="outlined" onChange={takehra}
                        defaultValue={editemployee.emi} /></div> 
                        
           </div>
        </div> 
        <div style={{width: "100%",height: "27%", border: "0px solid red"}}>
          {/* <Button id="btn" variant="contained" onClick={() => submitEdit(emp.id)}> */}
          <Button id="btn" variant="contained" onClick={() => submitEdit(emp['id'])}>
            SUBMIT
          </Button> 
         </div>
        </Box>
      </Modal>
                      
                    </div>
                    <div className={classes.icon1}>
                      {
                      like ?
                    <FavoriteBorderIcon onClick={() =>{dispatch(LikeEmp(emp['like']));setLike(emp['id'])}}/>:
                    <ThumbUpIcon/>
                  }
                    </div>
                    <div className={classes.icon1}>
                    <DeleteIcon onClick={()=>{dispatch(Notification(emp['like']));deleteEmp(emp['id'])} }/>
                    </div>
                </div>
            </div>

        </Paper>
        
         ))} 
      </div>
    
    </div>
  )
}

export default New
