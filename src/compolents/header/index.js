import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header({ loginCheck,setLoginCheck }) {
  let name = localStorage.getItem("fullName")
  const navigate = useNavigate()
  useEffect(()=>{

  },[])
  function logOut(){
    setLoginCheck(false)
    localStorage.clear()
    navigate("/login")
  }
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg row justify-content-between">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html"><img className="logo p-0" src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/306378332_777317756854712_3001439743117776624_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SQS4VvirVcsAX9ToiaI&_nc_ht=scontent.fhan4-3.fna&oh=03_AVKYSelyeByjk3axC4DTF3-rnzUEinhjakNSvkB7Zh46Bw&oe=635031C1" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Trang chủ</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">Giới thiệu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link">Sản phẩm</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Liên hệ</Link>
                </li>
              </ul>


            </div>
            <div className="">
              <Link className="text-dark" to="product"><i className="fa-solid fa-magnifying-glass p-3"></i></Link>

              <i className="fa-regular fa-heart p-3"></i>
              <Link className="text-dark" to="card"><i className="fa-solid fa-cart-shopping p-3"></i></Link>
              {loginCheck ?
                    <>
                      <i type="button" className="fa-regular fa-user p-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     
                      </i>


                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Xin chào {name}!</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              Bạn có muốn đăng xuất?
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Không</button>
                              <button onClick={logOut} type="button" class="btn btn-primary"  data-bs-dismiss="modal">Đăng xuất!</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>

                    : <Link to="/login"><i type="button" className="fa-regular fa-user p-3 text-dark"></i></Link>
                    }
              


            </div>
          </div>
        </nav>
      </div>

    </header>
  )
}
export default Header