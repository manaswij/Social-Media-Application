import React from 'react'
import './Auth.css'
import Logo from './../../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>ZKC Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        <Login/>
        {/* <SignUp/> */}
    </div>
  )
}

const Login =()=>{
    return(
        <div className="a-right">
            <form action="" className='infoForm authForm'>



                <h3>Login</h3>

                <div>
                    <input 
                    type="text" 
                    name="username" id="" 
                    className='infoInput' 
                    placeholder='UserName'/>
                </div>
                <div>
                    <input 
                    type="text" 
                    name="password" id="" 
                    className='infoInput' 
                    placeholder='Password'/>

                </div>
                
                <div>
                    <span style={{fontSize: '12px'}}>Don't have an account. SignUp!</span>
                </div>
                <button className='button infoButton' type='submit'>Submit</button>
            </form>
        </div>
    )
}


// const SignUp =()=>{
//     return(
//         <div className="a-right">
//             <form action="" className='infoForm authForm'>



//                 <h3>SignUp</h3>
//                 <div>
//                     <input 
//                     type="text" 
//                     placeholder='First Name' 
//                     className='infoInput' 
//                     name='firstname'/>

//                     <input 
//                     type="text" 
//                     placeholder='Last Name' 
//                     className='infoInput' 
//                     name='lastname'/>
//                 </div>

//                 <div>
//                     <input 
//                     type="text" 
//                     name="username" id="" 
//                     className='infoInput' 
//                     placeholder='UserName'/>
//                 </div>
//                 <div>
//                     <input 
//                     type="text" 
//                     name="password" id="" 
//                     className='infoInput' 
//                     placeholder='Password'/>

//                     <input 
//                     type="text" 
//                     name="confirmpassword" id="" 
//                     className='infoInput' 
//                     placeholder='Confirm Password'/>
//                 </div>
                
//                 <div>
//                     <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
//                 </div>
//                 <button className='button infoButton' type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }
export default Auth
