import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Detail({ loginCheck,cardUser }) {
    window.scrollTo(0,600)
    let { id } = useParams();
    let idUser = localStorage.getItem("id")
    

    
    const [soLuong, setSoLuong] = useState(1)
    const [product, setProduct] = useState({});
    const [step, setStep] = useState(1)
    const [producs, setProducts] = useState([])
    const [checkSetSl, setCheckSetSl] = useState({})
    const [check,setCheck] = useState(true)
   
    useEffect(() => {
        axios.get(`http://localhost:9999/all/${id}`).then((res) => {
            setProduct(res.data)
        })
        
    }, [id])
    useEffect(() => {
        axios.get(`http://localhost:9999/all?_start=0&_end=${step * 4}`).then((res) => {
            setProducts(res.data)

        })

    }, [step])
    useEffect(() => {
    // console.log(a);
       
        axios.get(`http://localhost:9999/${cardUser}/${id}`).then((res) => {
            setCheckSetSl(res.data)
        })

    }, [check])  
    

    function Cong() {
        setSoLuong(soLuong + 1)
    }
    function Tru() {

        if (soLuong <= 1) {
            setSoLuong(1)
        } else {
            setSoLuong(soLuong - 1)
        }
    }
    function addCard(e) {   
        axios.get(`http://localhost:9999/${cardUser}/${product.id}`).then((res) => {
            setCheckSetSl(res.data)
        })
        if(checkSetSl.id){
            axios.put(`http://localhost:9999/${cardUser}/${product.id}`,{
                "id": `${product.id}`,
                "name": `${product.name}`,
                "img": `${product.img}`,
                "price": `${product.price}`,
                "soluong" : parseInt(checkSetSl.soluong) + parseInt(soLuong)
            })
        setCheck(!check) 

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đã thêm vào giỏ hàng',
                showConfirmButton: false,
                timer: 1500
              })
        }else{
            axios.post(`http://localhost:9999/${cardUser}`, {
                "id": `${product.id}`,
                "name": `${product.name}`,
                "img": `${product.img}`,
                "price": `${product.price}`,
                "soluong": Number(soLuong)
            })
        setCheck(!check) 

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đã thêm vào giỏ hàng',
                showConfirmButton: false,
                timer: 1500
              })
        }
        
        
            
            
       
    }
    console.log(checkSetSl)
    function changeSl(e){
        setSoLuong(e.target.value)
    }
    // console.log(product);

    return (
        <>
            <div class="container">

                <div class="row mt-5 mb-5 border">
                    <div class="col-lg-5 p-0">
                        <img class="w-100" src={product.img} alt="" />
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-6 mt-3">
                        <h3  >{product.name}</h3>
                        <div className="d-flex">
                            <p className="m-0 mt-3">Giá:</p>
                            <h4 className="p-5 mt-3 pb-0 pr-0 pt-0 text-danger">    {product.price} đ</h4>

                        </div>


                        <div class="row mt-4">
                            <div class="col-lg-3 mt-2"><p>Số lượng</p></div>
                            <div class="col-lg-3">
                                <div class="d-flex">
                                    <button onClick={Tru} class="btn-sl">-</button>
                                    <input onChange={e => changeSl(e)} placeholder={soLuong}  class="w-100 my-input text-center" type="number" />
                                    <button onClick={Cong} class="btn-sl">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-2"></div>
                            <div class="col-lg-4">
                                <button onClick={e => addCard(product.id)} class="btn-add w-100 p-2">Đặt hàng</button>
                            </div>
                            <div class="col"></div>

                        </div>
                    </div>

                </div>
                <h3 className="text-center mt-5 mb-3">SẢN PHẨM NỔI BẬT</h3>
                <div className="row mb-5">
                    {producs.map((item, index) => {
                        return (
                            <div className="col-lg-3 mt-5" key={index}>
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="name-product">{item.name}</h4>
                                        <h5>{item.price} đ</h5>
                                        <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                                        <div className="row">
                                            <div className="col"></div>
                                            <div className="col-lg-6">

                                                <Link to={`/detail/${item.id}`} className="p-2 btn-add w-100 btn-add">Đặt hàng</Link>
                                            </div>
                                            <div className="col"></div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row mb-5">
                    <div className="col"></div>
                    <div className="col-lg-2">
                        <Link to="/product" className="p-2 btn-add w-100">Xem thêm</Link>
                    </div>
                    <div className="col"></div>

                </div>




            </div>
        </>
    )
}
export default Detail