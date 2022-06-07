import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from './firebaseintialization'

const auth = getAuth(app);


const signINCreate = (obj) =>{
    return createUserWithEmailAndPassword(auth, obj.email, obj.Password)
}


export default{
    signINCreate
}