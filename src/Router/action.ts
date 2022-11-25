import { emphasize } from "@mui/material"

export const LikeEmp = (data:any) => {
    console.log(data)
return{
    type: 'like_emp',
    data: true
}
}

export const Notification = (data:any) => {
    console.log(data)
    return{
        type:'notify',
        data:true
    }
}

export const ShowSalary = (data:any) => {
    console.log(data)
    return {
        type:'salary',
        data
    }
}
