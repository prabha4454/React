import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
   /*  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', { email, password });
            const token = response.data.token;

            // Store token in localStorage or sessionStorage
            localStorage.setItem('token', token);

           console.log("success")
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    }; */

  const [ email, setemail ] = useState('');
    const [ password, setpassword ] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [isValidEmail, setIsValidEmail] = useState(true);
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log(email,password);
        const response = await fetch('http://localhost:5000/api/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify({email, password}),
        });
  
        if (response.ok) {
          console.log('Login successful');
          alert('Login success');
          navigate('/Admedit');
    
        }else {
          console.error('Login failed');
          alert('Login failed');
        }
      }catch (error) {
        console.error('Error:',error);
        alert('Error occurred');
      }
    };
  
    
  
     
    
      const handleLogin = () => {
        navigate('/target-route');
      };
      const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setemail(newEmail);
    
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       // /^\d{10}$/
        // Check if the email matches the regular expression
        setIsValidEmail(emailRegex.test(newEmail));
      };


      const history = useNavigate()

      const [input, setInput] = React.useState({ email:'', password:''});
  
      const [errorMessage, seterrorMessage] = React.useState('');
      const [successMessage, setsuccessMessage] = React.useState('');
  
      const handleChange = e => {
          setInput({ ...input, [e.target.name]: e.target.value});
      }; 
  
      const emailValidator = email => {
          const emailRegex = /^[^\s@]+@[^\s@]+$/;
          return emailRegex.test(email)
      }
      const passwordValidator = password => {
          const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
          return passwordRegex.test(password)
      }
  
      const formSubmitter = e => {
        console.log("new")
          e.preventDefault();
          setsuccessMessage('');
          
  
          
     // setsuccessMessage('successfully validated');
   /*   
  if(input.email !== 'email@.com' || input.password !== 'password@.com')
  {console.log(input.password)
    return seterrorMessage('invalid email or password id');} */
  
  localStorage.setItem('auth', true)
  navigate.push('/Survelliance')
 
      } ;
  

    return (
        <>

<body style={{height: '1000px',
	/* fontfamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "sans-serif"', */
	background:' linear-gradient(135deg, blue, red)',
	backgroundrepeat: 'no-repeat',
	backgroundsize: 'cover',
	backgroundposition:' center',
	backgroundblendmode:' multiply',
	backgroundattachment:' fixed',
	overflow: 'hidden',
	color: '#fff',
	paddingtop: '20px'}}>
	<div class="form-wrapper">
		<h4 style={{
            textalign:' center',
	marginblock: '20px',
	textdecoration: 'underline',
    textDecorationColor: '#ff538c',
  
	textdecorationstyle: 'double',
	textunderlineoffset: '6px'}}>Log in here</h4>

		<form action="#" method="POST" onSubmit={formSubmitter} enctype="multipart/form-data">
			<div class="form-group">
				<label for="username">Email</label>
				<input type="text" name="uname"  onChange={handleChange} id="username" class="form-input" /* pattern="[A-Za-zأ-ي ' ']{4,16}" */ required />
				<span id="validity"></span>
				<span class="form-hint">
                Username must be between 4 and 16 characters
				</span>
			</div>
			<div class="form-group">
				<label for="username">Password </label>
				<input type="password" name="passwd"  onChange={handleChange} id="password" class="form-input"/*  pattern="[A-Za-z0-9._+-@#$%&]{8,}" */ required />
				<span id="validity"></span>
				<span class="form-hint">
                Password must consist of at least 8 characters (letters, numbers, symbols)
				</span>
			</div>
			<button type="submit" class="form-btn" onClick={formSubmitter}>Login</button>

			<small>or</small>
			<p>Register through an account</p>
			<div class="social-btns">   
				<button>
					<span>Google</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.5833 11.6667C14.3394 12.5154 13.8559 13.2757 13.1907 13.8566C12.5256 14.4375 11.7071 14.8142 10.8333 14.9417C10.15 15.0408 9.45372 15.0009 8.78624 14.8242C8.11876 14.6476 7.49385 14.3379 6.94904 13.9137C6.40424 13.4895 5.95075 12.9596 5.61583 12.3558C5.2809 11.752 5.07143 11.0868 4.99999 10.4C4.94466 9.71058 5.03297 9.01715 5.25934 8.36357C5.48572 7.71 5.84523 7.11049 6.31516 6.60297C6.78509 6.09545 7.3552 5.69095 7.98946 5.41504C8.62372 5.13913 9.30833 4.99782 9.99999 5.00004C10.6481 5.00095 11.2901 5.12539 11.8917 5.36671C11.9864 5.40923 12.0936 5.41486 12.1922 5.38249C12.2909 5.35012 12.3739 5.28208 12.425 5.19171L13.625 2.98337C13.6508 2.93251 13.6664 2.87704 13.6707 2.82016C13.675 2.76328 13.6681 2.7061 13.6503 2.6519C13.6325 2.5977 13.6042 2.54756 13.5669 2.50434C13.5297 2.46112 13.4843 2.42567 13.4333 2.40004C12.1448 1.81663 10.7289 1.57082 9.31908 1.68576C7.90927 1.8007 6.55192 2.27261 5.37487 3.05703C4.19782 3.84145 3.2398 4.91258 2.59106 6.16952C1.94232 7.42647 1.6242 8.82786 1.66666 10.2417C1.74878 12.3416 2.61197 14.3352 4.08714 15.832C5.56231 17.3287 7.54316 18.2208 9.64166 18.3334C11.8399 18.4309 13.9875 17.6549 15.6159 16.1749C17.2442 14.6949 18.2211 12.6309 18.3333 10.4334C18.3333 10.2667 18.3333 9.30837 18.3333 8.76671C18.3312 8.65687 18.2866 8.55212 18.2089 8.47444C18.1312 8.39676 18.0265 8.35217 17.9167 8.35004H10.4167C10.3062 8.35004 10.2002 8.39394 10.122 8.47208C10.0439 8.55022 9.99999 8.6562 9.99999 8.76671V11.2667C9.99999 11.3772 10.0439 11.4832 10.122 11.5613C10.2002 11.6395 10.3062 11.6834 10.4167 11.6834H14.5833" fill="#111" />
					</svg>
				</button>
				<button>
					<span>Twitter</span>
					<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.0516029 0L8.22325 11.0312L0 20H1.85072L9.05017 12.1477L14.8671 20H21.1652L12.5338 8.34833L20.1879 0H18.3372L11.7069 7.23185L6.34969 0H0.0516029ZM2.77323 1.37634H5.66659L18.4432 18.6235H15.5498L2.77323 1.37634Z" fill="#111" />
					</svg>

				</button>
			</div>
			<a href="#" class="reset-password">Forgot Your Password ?</a>
            <a href="#" class="reset-password">Home</a>
		</form>
	</div>
</body>


        {/* <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form> */}
       {/*  <body>
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
            <label for="reg-log"></label>
            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Log In</h4>
                      <div class="form-group">
                        <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a href="#" class="btn mt-4">submit</a>
                      <p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
                    </div>
                  </div>
                </div>
                <div class="card-back">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h4 class="mb-4 pb-3">Sign Up</h4>
                      <div class="form-group">
                        <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                        <i class="input-icon uil uil-user"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                        <i class="input-icon uil uil-at"></i>
                      </div>
                      <div class="form-group mt-2">
                        <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                        <i class="input-icon uil uil-lock-alt"></i>
                      </div>
                      <a href="#" class="btn mt-4">submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 */}

</>
    );
};

export default Admin;