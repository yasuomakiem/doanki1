import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Dangki() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [dataUser, setDataUser] = useState([])

    const [check, setCheck] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:9999/users").then((response) => {
            setDataUser(response.data)

        })        
    }, [check])

    console.log(dataUser)

    const onSubmit = data => {
        console.log(data)
        for (let i = 0; i < dataUser.length; i++) {
            if ((data.name === dataUser[i].name)) {
                setCheck(false)
            } else {
                setCheck(true)
                axios.post("http://localhost:9999/users", {
                    "name": `${data.name}`,
                    "fullName": `${data.fullName}`,
                    "email": `${data.email}`,
                    "phone": `${data.phone}`,
                    "password": `${data.password}`
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Đăng kí thành công',
                    showConfirmButton: false,
                    timer: 1500
                  })             

                

                navigate("/login")
                break;
            }

        }




    }

    return (
        <>
            <div className="container">


                <div className="border m-5">
                    <h3 className="text-center mt-3 mb-3">Đăng ký</h3>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="w-100 p-2" placeholder="Tên đăng nhập " {...register("name", { required: "Tên đăng nhập từ 6-18 kí tự", minLength: 6, maxLength: 18 })} />
                                {errors.name && <span className="text-danger">Tên đăng nhập từ 6-18 kí tự</span>}
                                <input className="w-100 mt-4 p-2" placeholder="Email" {...register("fullName", { required: "Nhập tên đăng nhập", minLength: 2 })} />
                                {errors.fullName && <span className="text-danger">Nhập email của bạn </span>}

                                <input className="w-100 mt-4 p-2" placeholder="Họ và tên" {...register("email", { required: "Nhập tên đăng nhập", minLength: 6, message: "Tên đăng nhập tối thiểu 6 kí tự" })} />
                                {errors.email && <span className="text-danger">Vui lòng nhập đúng họ và tên của bạn</span>}
                                <input className="w-100 mt-4 p-2" placeholder="Số điện thoại" {...register("phone", { required: "Nhập tên đăng nhập", minLength: 6, message: "Tên đăng nhập tối thiểu 6 kí tự" })} />

                                {errors.phone && <span className="text-danger">Vui lòng nhập số điện thoại của bạn</span>}
                                <input className="w-100 mt-4 p-2" type="password" placeholder="Mật khẩu" {...register("password", { required: "Mật khẩu tối thiểu 6 kí tự ", minLength: 6 })} />
                                {errors.password && <span className="text-danger">Mật khẩu tối thiểu 6 kí tự </span>}
                                {check ? <></> : <span className="text-danger">Tài khoản đã tồn tại vui lòng sử dụng tài khoản khác </span>}

                                <div className="row">
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4">
                                        <input onClick={e => onSubmit()} type="submit" className="w-100 btn btn-danger mt-4" />                                    </div>
                                    <div className="col-lg-4"></div>
                                </div>

                            </form>
                            <p className="text-center">Bạn đã có tài khoản? Đăng nhập tại <a className="clblack" href="page6.html">đây</a></p>

                        </div>
                        <div className="col"></div>
                    </div>

                </div>




            </div>
        </>
    )
}
export default Dangki