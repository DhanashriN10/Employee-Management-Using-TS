import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Button, Card, Divider, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import MiniDrawer from './Drawer';
import { RootState } from './Router/store';


const useStyle = makeStyles({
page:{
    // height:'98.5vh',
    height:'87vh',

    // width:'99vw',
    width:'95vw',
    position: "absolute",
    left: "65px",
    top: "66px",
    // border:'1px solid black'
},
block:{
    // width:'50%',
    width:'42%',
    // height:'60%',
    height:'55%',
    border:'1px solid black',
    marginLeft:'200px',
    marginTop:'40px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    boxShadow:'20px',
    backgroundColor:'grey'
},
box1:{
    width:'47%',
    // height:'85%',
    height:'88%',
    // border:'1px solid black',
    // marginBottom:'30px'
},
row1:{
    height:'14%',
    width:'100%',
    // border:'1px solid black',
    "& #txt":{
        fontSize:'25px',
        
    }
},
row2:{
    height:'17%',
    width:'100%',
    // border:'1px solid black',
},
row4:{
    height:'14%',
    width:'70%',
    // border:'1px solid black',
},
row5:{
    height:'14%',
    width:'89%',
    // border:'1px solid black',
    "& #id":{
    marginLeft:'0px'
    }
},
row6:{
    height:'14%',
    width:'90%',
    // border:'1px solid black',
    "& #id":{
    marginLeft:'40px'
    }
},
row7:{
    height:'14%',
    width:'90%',
    // border:'1px solid black',
    "& #id":{
    marginLeft:'70px'
    }
},
row8:{
    height:'14%',
    width:'90%',
    // border:'1px solid black',
    "& #id1":{
    marginLeft:'0px'
    }
},
row9:{
    height:'14%',
    width:'80%',
    // border:'1px solid black',
    "& #id1":{
    marginLeft:'50px'
    }
},
row10:{
    height:'14%',
    width:'80%',
    // border:'1px solid black',
    "& #id1":{
    marginLeft:'50px'
    }
},
row11:{
    height:'14%',
    width:'80%',
    // border:'1px solid black',
    "& #id1":{
    marginLeft:'50px'
    }
},
row3:{
    height:'15%',
    width:'100%',
    // border:'1px solid black',
},
btn:{
    marginTop:'10px',
    marginLeft:'50px'
},
["@media only screen and (min-width:320px) and (max-width:480px)"]: {

    page:{
        height:'105vh',

    // width:'99vw',
    width:'95vw',
    position: "absolute",
    left: "65px",
    top: "66px",
    // border:'1px solid black'
    },
    block:{
        // width:'50%',
        width:'92%',
        // height:'60%',
        height:'60%',
        border:'1px solid black',
        marginLeft:'10px',
        marginTop:'50px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'20px',
        backgroundColor:'grey'
    },
    box1:{
        width:'47%',
        // height:'85%',
        height:'87%'
        // border:'1px solid black',
        // marginBottom:'30px'
    },
    row1:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
        "& #txt":{
            fontSize:'25px',
            
        }
    },
    row2:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
    },
    btn:{
        marginTop:'5px',
        marginLeft:'50px'
    },
},

["@media only screen and (min-width:481px) and (max-width:768px)"]: {

    page:{
        height:'105vh',

    // width:'99vw',
    width:'95vw',
    position: "absolute",
    left: "65px",
    top: "66px",
    // border:'1px solid black'
    },
    block:{
        // width:'50%',
        width:'92%',
        // height:'60%',
        height:'60%',
        border:'1px solid black',
        marginLeft:'10px',
        marginTop:'50px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'20px',
        backgroundColor:'grey'
    },
    box1:{
        width:'47%',
        // height:'85%',
        height:'87%'
        // border:'1px solid black',
        // marginBottom:'30px'
    },
    row1:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
        "& #txt":{
            fontSize:'25px',
            
        }
    },
    row2:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
    },
    btn:{
        marginTop:'5px',
        marginLeft:'50px'
    },
},

["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

    page:{
        height:'105vh',

    // width:'99vw',
    width:'95vw',
    position: "absolute",
    left: "65px",
    top: "66px",
    // border:'1px solid black'
    },
    block:{
        // width:'50%',
        width:'85%',
        // height:'60%',
        height:'50%',
        // border:'1px solid black',
        marginLeft:'10px',
        marginTop:'40px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        boxShadow:'20px',
        backgroundColor:'grey'
    },
    box1:{
        width:'47%',
        // height:'85%',
        height:'87%'
        // border:'1px solid black',
        // marginBottom:'30px'
    },
    row1:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
        "& #txt":{
            fontSize:'25px',
            
        }
    },
    row2:{
        height:'17%',
        width:'100%',
        // border:'1px solid black',
    },
    btn:{
        marginTop:'5px',
        marginLeft:'50px'
    },
}
})
function SalarySlip() {
    const classes = useStyle();
    const navigate = useNavigate()

    // const get = useSelector ((state)=>state.SalaryReducer)
    const getData = useSelector((state:RootState)=>state.SalaryReducer)
    console.log(getData)

    const gotolist = () => {
        navigate('/new')
    }
    
  return (
    <div className={classes.page}>
        {/* <MiniDrawer {searchHandler:any;searchTerm:any;}/> */}

        {/* <MiniDrawer/> */}

        <Paper className={classes.block}>
            <Card elevation={4} className={classes.box1}>
                <div className={classes.row1}>
                    <span id='txt'><b>Employee Details</b></span>
                </div>
                <Divider/>
                <div className={classes.row4}><b>Id:</b>{getData[0]['id']}</div>
                {/* <Divider/> */}
                <div className={classes.row5}><b><span id='id'>Name:</span> </b>{getData[0]['name']} </div>
                {/* <Divider/> */}
                <div className={classes.row6}><b><span id='id'>Address:</span> </b>{getData[0]['address']}</div>
                {/* <Divider/> */}
                <div className={classes.row7}><b><span id='id'>Contact:</span> </b>{getData[0]['contact']}</div>
                {/* <Divider/> */}
                <div className={classes.row3}></div>
                <div className={classes.row2}> </div>

            </Card>
            <Card elevation={4} className={classes.box1}>
            <div className={classes.row1}>
                    <span id='txt'><b>Salary Details</b></span>
                </div>
                <Divider/>
                <div className={classes.row8}><b><span id='id1'>Salary:</span></b>{getData[0]['salary']} </div>
                {/* <Divider/> */}
                <div className={classes.row9}><b>Tax: </b>{getData[0]['tax']} </div>
                {/* <Divider/> */}
                <div className={classes.row10}><b>PF: </b>{getData[0]['pf']} </div>
                {/* <Divider/> */}
                <div className={classes.row11}><b>HRA: </b>{getData[0]['emi']} </div>
                {/* <Divider/> */}
                <div className={classes.row3}><b>Total Salary:</b>{getData[0]['salary']-getData[0]['tax']-getData[0]['pf']-getData[0]['emi']}</div>
                <div className={classes.row2}>
                <Button className={classes.btn} variant="contained" onClick={gotolist}>
            Go To Dashboard
          </Button> </div>
            </Card>
        </Paper>
       
      
    </div>
  )
}

export default SalarySlip
