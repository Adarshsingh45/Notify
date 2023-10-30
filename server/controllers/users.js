import Users from '../models/Users';

export const getUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await Users.findById(id);
        if(user) res.status(200).json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
