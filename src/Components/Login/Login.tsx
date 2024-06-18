import './Login.css'
import '../../App.css'
import video from '../../LoginAssets/19247660-hd_1920_1080_60fps.mp4'
import fire from '../../LoginAssets/fire.png'

import { Link } from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

export const Login = () => {
  return (
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          
          <div className="textDiv">
          <h2 className="title">Create And Sell Extraordinary Products</h2>
          <p>Adopt the peace of nature!</p>
        </div>

          <div className="footerDiv">
            <span className="text">Don't have an account?</span>
            <Link to ={'/register'}>
            <button className='btn'>Sign up</button>
            </Link>
          </div>
          </div>


          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={fire} alt='Logo Image'/>
              <h3>Welcome back!</h3>
            </div>

            <form action='' className='form grid'>
            <span className='showMessage'>Login Status will go here</span>

               
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
              <FaUserShield className='icon' />
              <input type="text" id='username' placeholder='Enter Username' />
              </div>
              </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
              <BsFillShieldLockFill className='icon' />
              <input type="password" id='password' placeholder='Enter Password' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Login</span>
              <AiOutlineSwapRight  className='icon' />
            </button>

            <a href='dashboard'>Dashboard</a>

            <span className='forgotPassword'>
              Forget your password? <a href=''>Click here!</a>
            </span>

            </form>
          </div>
          
      </div>
    </div>
  )
}
