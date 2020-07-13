import React from 'react';
import './SignInForm.css'

function SignInForm() {
    return (
        <div class="wrapper fadeInDown pt-5">
            <div id="formContent">
                <div class="fadeIn first mt-3 mb-2 ">
                    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="72" height="72" id="icon" alt="User Icon" />
                </div>

                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                </form>

                <div id="formFooter">
                    <a class="underlineHover" href="#Top">Forgot Password?</a>
                </div>

            </div>
        </div>
    );
}

export default SignInForm;

