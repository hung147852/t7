import ETCLoginImage from "../../images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
function Login (){
    return(
        <div>
            <div class="login-container">
                <div class="login-side-image">
                    <img
                    id="logo-login"
                    src={ETCLoginImage}
                    title="ETC logo"
                    alt="ETC Logo"
                    />
                    <div class="login-sologan-text">
                        <p>“Đồng tiền luôn phát ra âm thanh.
                            Nhưng tờ tiền thì im lặng.
                            Vì vậy, khi giá trị của bạn tăng lên, thì hãy luôn luôn giữ yên lặng.”
                        </p>
                    </div>
                    <div class = "input-field">
                        <input type="text" class="input" id="email" required="" autocomplete="off"/>
                        <label for="user">User</label> 
                    </div>
                    <div class="input-field">
                        <input type="password" class="input" id="pass" required=""/>
                        <label for="pass">Password</label>
                    </div>
                    <div class="input-field">
                        
                        <input type="submit" class="submit" value="Sign In"/>
                   </div>
                   <div class="signin">
                    <span>Already have an account? <a href="#">Log in here</a></span>
                   </div>
                    <div class="input-field">
                        <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe" 
                        />
                    </div>
                </div>

            </div>
        </div>
    )
    
}
export default Login