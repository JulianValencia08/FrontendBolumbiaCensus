import { useLocation } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/bolumbiaCensusLogo.jpg'
import { PreForm } from "../../components/form/PreForm";

const PreFormPage = () => { 
    const location = useLocation();
    console.log(location.state);

    return (
        <div className="flex flex-col items-center w-full h-screen justify-center pt-52">
            <img src={logo} alt="logo-census" className={"object-cover w-44 mb-4"} />
            <div className="flex flex-col items-center w-10/12 h-screen">  
                <h2 className="text-4xl mb-2"> Bienvenido {location.state.user.name} </h2>
                <p className="text-2xl mb-2">Estás apunto de empezar el formulario de <span className="font-bold"> {location.state.user.direction} </span></p>
                <PreForm />
            </div>
        </div>
    )
} 

export { PreFormPage }