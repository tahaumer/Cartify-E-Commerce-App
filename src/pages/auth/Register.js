import React,{useState} from "react";
import Layout from "../../components/Layout";
import { Link,useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios"

//media
import eye from "../../media/eye-regular.svg"
import nameIcon from "../../media/signature-solid.svg"
import callIcon from "../../media/call-icon.svg"
import locationIcon from "../../media/location.svg"
import answerIcon from "../../media/answer.svg"


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const [isChecked, setIsChecked] = useState(false);
     const handleToggle = () => {
    setIsChecked((prev) => !prev);
    };

    // logics
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [answer,setAnswer] = useState('')
    const navigate = useNavigate()

    // submit function
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{ name, email, password, phone, address, answer})
        if(res && res.data.success){
          toast.success(res.data && res.data.message);
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        }else{
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error("something went wrong")
      }
    }
  return (
    <Layout title="Register - Cartify">
      <div className="bg-[#E8E8E8] w-full font-Jost-Regular">
        <div className="container flex justify-center items-center w-full py-20">
          <form onSubmit={handleSubmit} className="w-[400px] flex flex-col gap-5 px-8 pb-[0.4em] bg-white rounded-lg">
            <p id="heading" className="text-center my-8 text-black text-2xl font-Jost-Medium">Register</p>

            <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
              <img className="mx-2" src={nameIcon} alt="name icon"/>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="off" placeholder="Name" className="bg-gray-900 border-none rounded-md outline-none w-full text-gray-500"/>
            </div>
            
            <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
              <svg className="input-icon h-6 w-6 fill-current mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" placeholder="Email" className="bg-gray-900 border-none rounded-md outline-none w-full text-gray-500"/>
            </div>

            <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
              <svg className="input-icon h-6 w-6 fill-current mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className="input-field bg-none border-none outline-none w-full bg-gray-900 text-gray-500" />
               <img src={eye} alt="eye" onClick={togglePasswordVisibility} className="cursor-pointer"/> 
            </div>

                <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
                 <img className="mx-1" src={callIcon} alt="name icon"/>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="off" placeholder="Phone" className="bg-gray-900 border-none rounded-md outline-none w-full text-gray-500"/>
                </div>
            <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
              <img className="mx-1" src={locationIcon} alt="name icon"/>
              <input required autoComplete="off" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="input-field bg-none border-none outline-none w-full bg-gray-900 text-gray-500" /> 
            </div>
            <div className="flex items-center justify-center gap-[0.5em] rounded-lg p-[0.6em] border-none outline-none text-white bg-gray-900 shadow-inner">
              <img className="mx-1" src={answerIcon} alt="name icon"/>
              <input required autoComplete="off" placeholder="What is Favorite Sports ?" value={answer} onChange={(e) => setAnswer(e.target.value)} className="input-field bg-none border-none outline-none w-full bg-gray-900 text-gray-500" /> 
            </div>
            <div className="flex items-center">
                <input id="terms" type="checkbox" value="" defaultChecked={isChecked} onChange={handleToggle} className="w-4 h-4 rounded "/>
                <label htmlFor="terms" onClick={handleToggle} className="text-[12px] ml-2">I agree to E-Commerce<Link className="underline" to="/privacypolicy"> {' '}Terms of Service{' '}, </Link><Link className="underline" to="/privacypolicy">{' '}Privacy Policy{' '}</Link>and Data Processing Agreement.</label>
            </div>
            <button type="submit" className="w-[200px] mx-auto py-2 px-4 rounded-md transition-all ease-in-out duration-150 bg-gray-800 text-white hover:bg-black ">
              Register
            </button>
            <div className="btn flex justify-center flex-row mb-8">
              Already have account ? &nbsp;<Link className="underline" to="/login"> Login</Link>
              
            </div>
          
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
