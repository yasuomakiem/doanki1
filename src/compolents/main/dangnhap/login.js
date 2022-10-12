import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Dangnhap({setLoginCheck ,setIdUser}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()  
  const [check ,setCheck] = useState(true)
  const [dataUser , setDataUser] = useState([])

  useEffect(() => {
    axios.get("http://localhost:9999/users").then((response) => {
        setDataUser(response.data)

    })
}, [check])
  const onSubmit = data => {
    console.log(data)
    for (let i =0 ; i <dataUser.length ; i ++){
      if ((data.name === dataUser[i].name) && (data.password === dataUser[i].password)){  
        setLoginCheck(true)
        setIdUser(dataUser[i].id)    
        localStorage.setItem("id",JSON.stringify(dataUser[i].id))   
        localStorage.setItem("fullName",JSON.stringify(dataUser[i].fullName))   
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500
          })
        navigate("/")
      }else{
        setCheck(false)

      }
    }

    
    
    
}
    return (
        <>
            <div className="container">


                <div className="border m-5">
                    <h3 className="text-center mt-3 mb-3">Đăng nhập</h3>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="w-100 p-2" placeholder="Tên đăng nhập" {...register("name", { required: true })} />
                                {errors.example && <span className="text-danger">Vui lòng nhập tên đăng </span>}
                                <input className="w-100 mt-4 p-2" type="password" placeholder="Mật khẩu" {...register("password", { required: true })} />
                                {errors.exampleRequired && <span className="text-danger">Vui lòng nhập mật khẩu</span>}
                                {check ? <></> : <span className="text-danger">Sai tài khoản hoặc mật khẩu vui lòng kiểm tra lại</span>}

                                <div className="row">
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4">

                                        <input onClick={e => onSubmit()} type="submit" className="w-100 btn btn-danger mt-4" />



                                    </div>
                                    <div className="col-lg-4"></div>
                                </div>

                            </form>
                            <p className="text-center">Bạn chưa có tài khoản? Đăng kí tại <Link to="/create" className="clblack" href="page5.html">đây</Link></p>
                        </div>
                        <div className="col"></div>
                    </div>

                </div>




            </div>
        </>
    )
}
export default Dangnhap