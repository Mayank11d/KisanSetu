import classes from "./LoginPage.module.css";

function LoginPage({ handleCurrentPage }) {
  return (
    <>
      <div  id="login" 
            className={classes.loginflex}>
        <div  id="loginbox" 
              className={classes.formBox}>
          <div  id="logintitlebox" 
                className={classes.loginheader}>
            <h2 id="logintitle">Login</h2>
            <button   id="closebtn" 
                      onClick={() => handleCurrentPage("All")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4em"
                height="1.4em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="black"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
          </div>
          <form id="loginInputfield" 
                action="#">
            <div  id="inputfieldbox1" 
                  className={classes.inputBox}>
              <span   id="icone1" 
                      className={classes.icon}>
                <ion-icon name="mail"></ion-icon>
              </span>
              <input  id="email" 
                      type="email" required />
              <label id="emaillable">Email</label>
            </div>
            <div  id="inputfieldbox2" 
                  className={classes.inputBox}>
              <span id="icon2" 
                    className={classes.icon}>
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input  id="pass" 
                      type="password" required />
              <label id="passlable">Password</label>
            </div>
            <div  id="checkbox" 
                  className={classes.rememberForgot}>
              <label id="checkboxlable">
                <input  id="checkboxinput" 
                        type="checkbox" />
                Remember me
              </label>
              <a  id="forgetpassword" 
                  href="">
                Forget Password?
              </a>
            </div>
            <button   id="loginbtn" 
                      type="submit" 
                      className={classes.btn}>
              Login
            </button>
            <div  id="account" 
                  className={classes.loginRegister}>
              <p id="accountlable">
                Don't have an account?{" "}
                <button
                  id="registerbtn"
                  className={classes.loginlink}
                  onClick={() => handleCurrentPage("Register")}
                >
                  
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
