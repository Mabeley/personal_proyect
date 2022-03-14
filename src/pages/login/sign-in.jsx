import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import "./sign-in.scss";
import { MailIcon, LockClosedIcon } from "@heroicons/react/solid";
import { FcGoogle } from "react-icons/fc";
export function Signin() {
  return (
    <div>
      <h1>Inicia sesion</h1>
      <form className="logo__form__inside">
        <div className="input-field">
          <MailIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="text" placeholder="Ingrese su email" />
        </div>
        <div className="input-field">
          <LockClosedIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="class_ask">
          <div className="class_ask__check">
            <input type="checkbox" class=" checked:bg-blue-500 " />
            <p>Recordar</p>
          </div>
          <div>
            <NavLink to ="/reset-password">¿Olvidaste la contraseña?</NavLink>
          </div>
        </div>
        <div className="login_button">
          <button>Ingresar</button>
        </div>
        <div className="login_google">
          <FcGoogle className=" h-50% w-7 m-auto" />
          <button>Ingresa con Google</button>
        </div>
      </form>
      <div className="sign_up">
      
        <p>
          ¿No tienes una cuenta? <NavLink to ="/sign-up">Registrate</NavLink> 
        </p>
        
      </div>
    </div>
  );
}
