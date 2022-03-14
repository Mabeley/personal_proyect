import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./login.scss";
import { Signin } from "./sign-in";
import {Signup} from "./sign-up";
import {MainLogin} from "../../components/main-login";
import {ResetPassword} from "./reset-password";
export function Login() {
  return (
    <div className="login bg-gray-800">
      <div className="login__main">
        <div className="logo">
          <div className="logo__figure">
            <div className="logo__figure__gradient"></div>
          </div>
          <div className="logo__form">
            
          <MainLogin>
          <Switch>
            <Route path="/sign-in">
              <Signin/>
            </Route>
            <Route path="/sign-up">
              <Signup/>
            </Route>
            <Route path="/reset-password">
              <ResetPassword/>
            </Route>
          </Switch>
        </MainLogin>
          </div>
        </div>
      </div>
    </div>
  );
}
