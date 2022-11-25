export const LikeDataReducer = (like = [],action:any) =>{
if (action.type === 'like_emp'){
    return [action.like, ...like]
}
else{
    return like
}
}

export const NotificationReducer = (note =[],action:any)=>{

    if (action.type === 'notify'){
        console.log(action)
        return [action.data,...note]
        
    }
    
    else{
        return note
    }
}

export const SalaryReducer = (sal = [],action:any) =>{
    if (action.type === 'salary'){
        
        console.log(action)
        return [action.data,...sal]
    }
    else{
        return sal
    }
}