const asyncHandler=(requesthandler)=>{
    (req,res, next)=>{
        Promise.resolve(requesthandler).catch((err)=>{
            next(err)
        })
    }
}


export {asyncHandler}