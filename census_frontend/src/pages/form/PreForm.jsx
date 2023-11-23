import { useLocation } from "react-router-dom";
import axios from 'axios';
import logo from '../../assets/bolumbiaCensusLogo.jpg'

const PreForm = () => { 
    const location = useLocation();
    console.log(location.state);
    const handleStart = () => { 

    } 

    return (
        <div className="flex flex-col items-center w-full h-screen justify-center pb-12">
            <img src={logo} alt="logo-census" className={"object-cover w-44 mb-4"} />
            <div className="flex flex-col items-center w-10/12">  
                <h2 className="text-4xl mb-2"> Bienvenido {location.state.user.name} </h2>
                <p className="text-2xl mb-2">Estás apunto de empezar el formulario de <span className="font-bold"> {location.state.user.direction} </span></p>
                <div className="flex justify-center items-center"> 
                    <p className="text-xl mr-4">Ingrese la cantidad de personas que hay en tu casa: </p>
                    <input placeholder='1' className='mt-2 p-1 outline-principal-orange border border-principal-orange rounded' type="number" />
                </div> 
                <button className='font-bold w-full my-5 py-2 shadow-lg max-w-[400px] bg-principal-orange shadow-teal-500/10 hover:bg-secondary-orange' type="submit"> Comenzar </button>
            </div>
        </div>
    )
} 

export { PreForm }