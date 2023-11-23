import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/bolumbiaCensusLogo.jpg'


const Login = () => {
    const navigate = useNavigate();
    const [cfn, setCfn] = useState("");
    const [ecn, setEcn] = useState("");
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        axios.post('http://localhost:3001/api/v1/auth/login', {
            cfn: cfn,
            ecn: ecn
        })
        .then((response) => {
            console.log(response);
            // Redirigir to home page - pasar props de usuario
            localStorage.setItem('token', response.data.token);
            navigate('/preform', { state: { user: response.data.user } });
            
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <div className='flex flex-col justify-center w-full items-center'>
            <img src={logo} alt="logo-census" className={"object-cover w-44 pt-10"} />
            <form action="" className='max-w-[500px] w-full mx-auto px-8'>
                <h2 className='text-4xl dark:text-black font-bold text-center mb-4'>Bienvenido</h2>
                <h2 className='text-3xl dark:text-black font-bold text-center mb-4'>Inicia sesión</h2>    
                <div className='flex flex-col py-2'>
                    <label className='font-bold'>CFN</label>
                    <input placeholder='xxxxxxxxxxxxx' className='mt-2 p-2 outline-principal-orange border border-principal-orange rounded' type="number" value={cfn} onChange={(e) => setCfn(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='font-bold'>ECN</label>
                    <input placeholder='xxxxxxxxxxxx' className='mt-2 p-2 border outline-principal-orange border-principal-orange rounded' type="number"  value={ecn} onChange={(e) => setEcn(e.target.value)} />
                </div>
                <button className='font-bold w-full my-5 py-2 shadow-lg bg-principal-orange shadow-teal-500/10 hover:bg-secondary-orange' type="submit" onClick={handleSubmit}> Iniciar sesión</button>
            </form>                
        </div>
    )
}

export { Login }