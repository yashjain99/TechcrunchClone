import React, { useEffect } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import styles from "./login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getUserSignup } from '../redux/action'

const Login = (props) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserSignup())
    })
    const isSigned=useSelector(state=>state.login.isSigned)
    return (
        <div className={{...styles.login_body,...styles.property_content,...styles.body}}>
            <div className={styles.login_box_container}>
                
                {isSigned?<SignIn/>:<SignUp/>}
             </div>
            <div className={styles.property_container}> 
             
            </div>
        </div>
    )
}

export default Login
