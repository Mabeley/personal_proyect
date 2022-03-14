import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import {Header} from './components/header/header';
// import {Footer} from './components/footer/footer';
// import {Main} from './components/main/main';
// import { PageContactanos } from "./pages/contactanos/contactanos";
// import {PageDisponibles} from "./pages/disponibles/disponibles";
// import { PageRecibo } from "./pages/recibo/recibo";
import {Login} from "./pages/login/login";
import {MainLogin} from "./components/main-login";
import './App'
import { Signin } from "./pages/login/sign-in";
import{Signup} from "./pages/login/sign-up";
import { ResetPassword } from "./pages/login/reset-password";

export function App() {
  return (
    <Router>
   <div>
   <Login/>
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
          <Redirect from ="/" to="sign-in"/>
        </Switch>
    </MainLogin>
    
   </div>
   </Router>
  ) 
    {/*
      
      <Header/>
      <Main>
        <Switch>
          <Route path="/contactanos">
            <PageContactanos/>
          </Route>
          <Route path="/disponibles">
            <PageDisponibles/>
          </Route>
          <Route path="/recibo">
            <PageRecibo/>
          </Route>
          <Redirect from ="/" to= "contactanos"/>
        </Switch>
      </Main>
      <Footer/>
     */}
    
  
}


