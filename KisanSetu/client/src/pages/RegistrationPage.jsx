import classes from "./RegistrationPage.module.css";

function RegistrationPage({ handleCurrentPage }) {
  return (
    <>
      <div  id="registerbox"
            className={classes.registerflex}>
        <div  id="registerformbox" 
              className={classes.formBox}>
          <div  id="registerheader" 
                className={classes.registerheader}>
            <h2 id="registertitle">Registeration</h2>
            <button id="closebtn" onClick={() => handleCurrentPage("All")}>
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
          <form id="registerinput"
                action="#">
            <div  id="input1"
                  className={classes.inputBox}>
              <span id="icon1" 
                    className={classes.iconBox}>
                <ion-icon name="person"></ion-icon>
              </span>
              <input  id="usernameinput" 
                      type="text" required />
              <label id="usernamelable">Username</label>
            </div>
            <div  id="input2" 
                  className={classes.inputBox}>
              <span id="icon2" 
                    className={classes.iconBox}>
                <ion-icon name="mail"></ion-icon>
              </span>
              <input id="emailinput" 
                    type="email" required />
              <label id="emaillable">Email</label>
            </div>
            <div  id="input3" 
                  className={classes.inputBox}>
              <span id="icon3" 
                    className={classes.iconBox}>  
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input  id="passinput" 
                      type="password" required />
              <label id="passlable">Password</label>
            </div>
            <div  id="rememberbox" 
                  className={classes.rememberForgot}>
              <label id="rememberme">
                <input  id="remembercheckbox" 
                        type="checkbox" />I agree to the
                terms &conditions
              </label>
            </div>
            <button id="registerbtn" 
                    type="submit" 
                    className={classes.btn}>
              Register
            </button>
            <div  id="loginbox" 
                  className={classes.loginRegister}>
              <p id="text">
                Already have an account?{" "}
                <button
                  id="loginbtn"
                  className={classes.loginlink}
                  onClick={() => handleCurrentPage("Login")}
                >
                  
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegistrationPage;
