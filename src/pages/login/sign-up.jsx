import "./sign-up.scss";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  MailIcon,
  LockClosedIcon,
  UserIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
export function Signup() {
  return (
    <div>
      <h1>Registrate...</h1>
      <div className="sign_up">
        <p>
          ¿Ya tienes una cuenta? <NavLink to="/sign-in">Inicia sesion</NavLink>{" "}
        </p>
      </div>
      <form className="logo__form__inside">
        <div className="login_google">
          <FcGoogle className=" h-50% w-7 m-auto" />
          <button>Ingresa con Google</button>
        </div>
        <div className="line">
          <p> </p>
        </div>
        <div className="input-field">
          <UserIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="text" placeholder="Ingrese su nombre" />
        </div>
        <div className="input-field">
          <UserGroupIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="text" placeholder="Ingrese su apellido" />
        </div>
        <div className="input-field">
          <MailIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="text" placeholder="Ingrese su email" />
        </div>
        <div className="input-field">
          <LockClosedIcon className="h-50% w-6 m-auto text-gray-500" />
          <input type="password" placeholder="Ingrese su contraseña" />
        </div>
        <div className="class_ask__check">
          <input type="checkbox" class=" checked:bg-blue-500 " />
          <p>Acepta los Terminos de servicio y Politicas de Privacidad</p>
        </div>
        <div className="login_button">
          <button>Registarse</button>
        </div>
      </form>
    </div>
  );
}
