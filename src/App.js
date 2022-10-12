import ScrollToTop from "react-scroll-to-top";
import './App.css';
import Header from './compolents/header';
import Banner from './compolents/banner'
import Fotter from './compolents/footer';
import Home from './compolents/main/home';
import Gioithieu from './compolents/main/gioithieu';
import { Routes, Route } from 'react-router-dom';
import Sanpham from './compolents/main/sanpham';
import Lienhe from './compolents/main/lienhe';
import Dangki from './compolents/main/dangnhap/create';
import Dangnhap from './compolents/main/dangnhap/login';
import Detail from "./compolents/main/detail";
import GioHang from "./compolents/main/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Checkout from "./compolents/main/checkout";



function App() {
  const [loginCheck, setLoginCheck] = useState(false)
  const [idUser,setIdUser] = useState()
  const [cardUser,setCartUser] = useState("cardDefault")
  const [check,setCheck] = useState(0)
  useEffect(()=>{
    // setCartUser
    let id = localStorage.getItem("id")
    if(id){
      setLoginCheck(true)
      setCartUser(`card${id}`)
    }else{
      setCartUser(`cardDefault`)
    }
  },[loginCheck , check])
  console.log(cardUser)
  return (
    <>
      <Header setLoginCheck={setLoginCheck} loginCheck={loginCheck} />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Gioithieu />} />
        <Route path='/product' element={<Sanpham />} />
        <Route path='/contact' element={<Lienhe />} />
        <Route path='/create' element={<Dangki />} />
        <Route path='/login' element={<Dangnhap setLoginCheck={setLoginCheck} setIdUser={setIdUser} />}  />
        <Route path='/detail/:id' element={<Detail setNgu={setCheck} loginCheck={loginCheck} idUser={idUser} cardUser={cardUser} />} />
        <Route path='/card' element={<GioHang loginCheck={loginCheck} idUser={idUser} cardUser={cardUser}  />} />
        <Route path="/checkout" element={ <Checkout loginCheck={loginCheck} idUser={idUser} cardUser={cardUser}   />} />
      </Routes>

      
      <Fotter />
      
      
        <ScrollToTop smooth component={<i class="fa-solid fa-arrow-up"></i>} />
    
    </>
    
  )
}

export default App;
