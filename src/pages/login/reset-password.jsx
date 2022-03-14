import "./reset-password.scss"
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ArrowLeftIcon, LockClosedIcon } from "@heroicons/react/solid";
export function ResetPassword(){
    return(
        <div>
            <h1>¿Olvidaste la contraseña??..</h1>
            <div className="sign_up">
        <p>
          No te preocupes, te enviaremos las instrucciones.
        </p>
      </div>
      <form className="logo__form__inside">
      <div className="input-field">
          <LockClosedIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="login_button">
          <button>Cambiar la contraseña</button>
        </div>
          </form>
          <div className="sign_in">
                <ArrowLeftIcon className="h-50% w-6 mr-4 text-gray-500" />
             <p> <NavLink to ="/sign-in">Regresa a iniciar sesion</NavLink></p>
          </div>
        </div>
    )
}
