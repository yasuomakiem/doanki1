import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function GioHang({idUser,loginCheck,cardUser}) {
    const [dataCard,setDataCard] = useState([])
    const [render, setRender] = useState(true)
    const [sumPrice, setSumPrice] = useState(0)
    const [item, setItem] = useState({})
    const [check,setCheck] = useState(1)
    const navigate = useNavigate()
    let a = 0

    useEffect(() => {
        
        axios.get(`http://localhost:9999/${cardUser}`).then((response) => {
            setDataCard(response.data)          
            for(let i = 0 ; i<response.data.length; i++)  {
               a += (parseInt(response.data[i].price))*(parseInt(response.data[i].soluong))
               
            } 
            setSumPrice(a) 
        })        

    }, [render,sumPrice,check])
    console.log(cardUser)
    console.log(sumPrice)    
    
    function Cong(e) {
            axios.get(`http://localhost:9999/${cardUser}/${e}`).then((res)=>{
                setItem(res.data)
                
            })
            axios.put(`http://localhost:9999/${cardUser}/${e}`,{   
                    "id": `${item.id}`,
                    "name": `${item.name}`,
                    "img": `${item.img}`,
                    "price": `${item.price}`,             
                    "soluong" : item.soluong + 1
                    
            })
            setCheck(check +1)
       
    }
    function Tru(e) {

        axios.get(`http://localhost:9999/${cardUser}/${e}`).then((res)=>{
            setItem(res.data)
            
        })
        axios.put(`http://localhost:9999/${cardUser}/${e}`,{   
                "id": `${item.id}`,
                "name": `${item.name}`,
                "img": `${item.img}`,
                "price": `${item.price}`,             
                "soluong" : item.soluong - 1
                
        })
        setCheck(check +1)
    }
    function deleteItem(e){
        axios.delete(`http://localhost:9999/${cardUser}/${e}`).then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Đã xóa thành công !',
                showConfirmButton: false,
                timer: 1500
              })
            setRender(!render)

        })
         
    }
    function dangNhap(){
        navigate("/login")
    }
    return (
        
        <>
            <div className="container mb-5">
                <h3 className="text-center mt-3 mb-3">Giỏ hàng</h3>

                <div className="row mb-3 text-center">
                    <div className="col-lg-1 ">
                        {/* <input className="m-auto" type="checkbox"  /> */}
                    </div>
                    <div className="col-lg-4">Sản phẩm</div>
                    <div className="col-lg-2">Giá</div>
                    <div className="col-lg-2">Số lượng</div>
                    <div className="col-lg-2">Tổng</div>
                    <div className="col-lg-1"><i className="fa-solid fa-x"></i></div>

                </div>
                <div className="line-border"></div>
                {dataCard.map((item) =>{
                    return(
                        <>
                        <div key={item.id} className="row mt-3 mb-3 text-center">
                    <div className="col-lg-1 col-md-12 m-auto      ">
                        
                    </div>
                    <div className="col-lg-4 col-md-5 d-flex">
                        <div className="col-lg-6 p-0">
                            <img className="w-100" src={item.img} alt=""/>
                        </div>
                        <div className="col-lg-6 m-auto">
                            {item.name}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 m-auto text-center">{item.price} đ</div>
                    <div className="col-lg-2 col-md-2 m-auto">
                        <div className="d-flex">
                            <button onClick={e => Tru(item.id)} className="btn-sl">-</button>
                            <input min="1" value={item.soluong} className="w-100 my-input text-center" type="number"/>
                                <button onClick={e => Cong(item.id)} className="btn-sl">+</button>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 m-auto">{item.price * item.soluong} đ</div>
                    <div className="col-lg-1 col-md-1 m-auto"><i type="button" onClick={e => deleteItem(item.id)} className="fa-solid fa-x"></i></div>
                    <div className="line-border mt-3"></div>
                </div>
                        </>
                    )
                    
                
                })}
                <div className="row mt-3">
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-4 col-md-4"><h3>Tổng tiền</h3></div>
                    <div className="col-lg-4 col-md-4"></div>
                    <div className="col-lg-2 col-md-2 text-center"><h4>{sumPrice} đ</h4></div>

                </div>
                
                <div className="row m-5">
                    <div className="col"></div>
                    <div className="col-lg-4">
                    {loginCheck ?
                        <Link className="btn-add w-100 p-2" to="/checkout">Thanh toán</Link>
                    :
                    <>
                      <button type="button" className="btn-add w-100 p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Thanh toán
                      </button>


                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title fs-5" id="exampleModalLabel">Bạn cần đăng nhập để thực hiện hành động này</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              Đăng nhập ngay
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                              <button onClick={dangNhap} type="button" class="btn btn-primary"  data-bs-dismiss="modal">Đăng nhập</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>

                    
                    }
                        {/* <button  className="btn-add w-100 p-2">Thanh toán</button> */}

                    </div>
                    <div className="col"></div>
                </div>
                <div className="line-border"></div>

                
            </div>
            
           
        </>
    )
}
export default GioHang