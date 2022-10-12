import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Sanpham() {
  window.scrollTo(0, 720)
  let i
  const [producs, setProducts] = useState([])
  const [produc, setProduct] = useState([])
  const [categori, setCategori] = useState("all")
  const [slPage,setSlPage] = useState(1)
  const [page,setPage] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:9999/${categori}`).then((res) => {
      setProducts(res.data)
    })  
    axios.get(`http://localhost:9999/${categori}`).then((res) => {
      setProduct(res.data)

    })    
  },[categori])
  function setAll(){
    setCategori("all")

    setSlPage(Math.ceil(produc.length / 6))

    // setSlPage(0)
    for(let i = 0; i++; i<=slPage){
      setPage([...page,i])
    }
    console.log(page);
 


  }
  function setGaran() {
    setCategori("garan")
  }
  function setMixao() {
    setCategori("noodle")
  }
  function setBurger() {
    setCategori("burger")
  }
  function setCom() {
    setCategori("com")
  }
  function setTrangMieng() {
    setCategori("snacks")
  }
  function setThucUong() {
    // setSlPage(0)

    setCategori("drink")


  }



  // console.log(page)
  return (
    <>
      <div className="container mb-5">
        <h3 className="text-center mt-3 mb-3">Sản phẩm</h3>        
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <h4 className="mb-2">Phân loại</h4>   
            <p type="button" onClick={setAll}>Tất cả</p>

            <p type="button" onClick={setGaran}>Gà rán</p>
            <p type="button" onClick={setMixao}>Mì xào</p>
            <p type="button" onClick={setBurger}>Burger</p>
            <p type="button" onClick={setCom}>Cơm</p>
            <p type="button" onClick={setTrangMieng}>Tráng miệng</p>
            <p type="button" onClick={setThucUong}>Thức uống</p>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="row">
              {producs.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 mt-5" key={index}>
                    <div className="card">
                      <img src={item.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h4 className="name-product">{item.name}</h4>
                        <h5>{item.price} đ</h5>
                        <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col-lg-6">
                            <Link to={`/detail/${item.id}`}  className="p-2 btn-add w-100">Đặt hàng</Link>
                          </div>
                          <div className="col"></div>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row">

          </div>
        </div>
      </div>

    </>
  )
}
export default Sanpham