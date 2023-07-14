import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../Helpers/AxiosInstance';
import { useEffect, useState } from "react";
import { login } from '../Store/Slices/authSlice'
import { setTokens } from "../Helpers/auth";
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import image from "/logo.png";
import wave from "/waves.svg"
import { chargingUsers } from "../Store/Thunk/userThunk";
const Login = () => {
const dispatch= useDispatch
const [posts, setPosts]=useState([])
const [users, setUsers]= useState([])

const navigate= useNavigate(null)
const submit=()=>{
  navigate('/crearCuenta')
}

useEffect(() => {
  axiosInstance 
  .get('users')
    .then(({ data }) => {
      console.log(data.message)
      setUsers(data.message);
    })
    .catch(err => {
      console.log(err.message);
    });
}, []);

const handleChangeId =(e)=>{
  const idd = e.target.value
}


const handlelogin= async(e)=>{
 
let idd = e.target.value
localStorage.setItem('userId', idd);
console.log(idd)
const id = localStorage.getItem('userId')
await axiosInstance 
  .get('users/' + id )
    .then(({ data }) => {
      console.log(data.message);
      setPosts(data.message);
      chargingUsers()
    })
    window.login.showModal()
    .catch(err => {
      console.log(err.message);
    });
};



const [state, setState] = useState({
  name:"",
  password: "",
});

const handleChange = (e) => {
  const value = e.target.value;
  setState({
    ...state,
    [e.target.name]: value,
    [e.target.lastname]: value,
  });
};;



const handleSubmit = async (e) => {
  e.preventDefault();
  let id = e.target.value
console.log(id)
  const userData = {
    id: posts.id,
    password: state.password,
  };
  console.log(userData)
  await axiosInstance
    .post("login",userData
    )
    .then((resp) => {     
      const { data } = resp;
      console.log(data)
      data.status ? navigate("/dashboard"):alert("error")
      setTokens(data.message.token);
      dispatch(
        login({
          token: data.message.token,
          status: resp.status,
        })
      );
    })
    .catch(({ response }) => {
      console.log(response.message);
    });
};
  return (
    <>
      
      <div className="min-h-screen bg-base-100 overflow-hidden">
        <div className="flex-col flex items-center  mt-5 object-center ">
          <img src={image} className="w-100 h-30 "></img>
        </div>
        <div className="flex justify-center">
          <div className="flex  gap-8 mt-[2rem] p-9 w-[42%] h-[390px] no-scrollbar overflow-x-scroll">
          {users.map( (user) => (
            
             <div className="" key={user.id}>
             <input
                 id={user.id}
                 type="radio"
                 className="hidden peer "
                 name="avatar"
                 required
                 value={user.id}
                 onChange={handlelogin}
                 htmlFor="login"
               />
               <label
                 htmlFor={user.id}
                 className=" snap-center w-[221px] h-[221px] inline-flex bg-neutral rounded-full cursor-pointer  peer-checked:scale-110 peer-checked:bg-primary peer-checked:transform transition duration-500 hover:scale-110 hover:bg-primary hover:transform transition duration-500">
                  <img src={user.photoUrl} className=""/>
                  <label className="font-bold text-4xl  pt-64 -ml-[10rem] flex justify-center items-center">{user.name}</label>
               </label>
            </div>))}
            <dialog id="login" className="modal" >
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="flex-col flex items-center  mt-2 object-center ">
                  <img src={image} className="w-60 h-30 flex justify-center "></img>
                </div>
                <div className=" avatar flex  justify-center ">
                  <button className="snap-center  w=[210px] h-[250px] bg-base-100 rounded-full  " disabled="disabled">
                    <img src={posts.photoUrl} width='210px' height='230px'/>
                    <div>
                      <label className="font-bold text-4xl p-10 text-primary" 
                       value={posts.id}
                       onChange={posts.id}
                       >{posts.name}</label>
                    </div>
                  </button>
                </div>
                <div>
                  <div className="form-control w-full max-w-xs flex justify-center">
                    <label className="label mt-10 ml-12">
                      <span className="label-text-bold font-bold ">Contraseña</span>
                    </label>
                    <input
                          name="password"
                          type="password"
                          required
                          placeholder="Escribe aquí"
                          className=" mt-1 ml-11 input input-bordered w-[22rem]  max-w-md"
                          value={state.password}
                          onChange={handleChange}
                        />
                  </div>
                  <div className="z-10">
                    <button type="submit"  onClick={handleSubmit} className="btn btn-primary ml-12 mt-10 mb-10 w-3/4 max-w-md">
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
              </form>
              <form method="dialog" className="modal-backdrop" >
                <button>close</button>
              </form>
            </dialog>
            
          </div>
          

          <div className="flex justify-center ml-5 mt-[4.5rem]">
            <button className="w-[221px] h-[221px]  rounded-full btn-primary transform transition duration-500 hover:scale-110 " onClick={submit}>
              <Icon path={mdiPlus} size={9} />
            </button>
          </div>
        </div>
       
        <div className="w-full pt-[13.3rem]  overflow-hidden">
          <img src={wave} className=" w-full h-full"></img>
        </div>
      </div>

    </>

  );
};

export default Login;
