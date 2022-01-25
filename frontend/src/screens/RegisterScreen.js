/* eslint-disable arrow-body-style */
const RegisterScreen = {
  after_render: () => {},
  render: () => {
    return `
        <div class="form-container">
            <form id="siginin-form">
                <ul class="form-items">
                    <li>
                    <h1>Sign-In</h1>
                    </li>
                    <li>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </li>
                    <li>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" /> 
                    </li>
                     <li>
                     <button type="submit" class="primary">Signin</button>
                     </li>
                        <div>
                        New User?
                        <a href="/#/register">Create Your Account</a>
                        </div>
                    </li>

                </ul>
            </form>
        </div>
            `;
  },
};

export default RegisterScreen;
