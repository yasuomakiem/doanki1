import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Spnb() {
    const [step, setStep] = useState(1)
    const [producs, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:9999/all?_start=0&_end=${step * 4}`).then((res) => {
            setProducts(res.data)

        })

    }, [step])
    function getMore() {
        setStep(step + 1)
        console.log(step)
    }
    return (
        <>
            <div className="container">
                <h3 className="text-center mt-5 mb-3">SẢN PHẨM NỔI BẬT</h3>
                <div className="row mb-5">
                    {producs.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 mt-5" key={index}>
                                <div className="card">
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="name-product">{item.name}</h4>
                                        <h5>{item.price} đ</h5>
                                        <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                                        <div className="row">
                                            <div className="col"></div>
                                            <div className="col-lg-6">
                                            
                                            <Link to={`detail/${item.id}`} className="p-2 btn-add w-100 btn-add">Đặt hàng</Link>
                                            </div>
                                            <div className="col"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* <div className="col-lg-3">
                        <div className="card">
                            <img src="https://kfcvietnam.com.vn/uploads/combo/8fcc7be4dfd15601269b48f3e88bd38d.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Gà rán</h3>
                                <h5>35.000đ</h5>
                                <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-lg-6">
                                        <button className="p-2 btn-add w-100">Đặt hàng</button>
                                    </div>
                                    <div className="col"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card">
                            <img src="https://kfcvietnam.com.vn/uploads/combo/8fcc7be4dfd15601269b48f3e88bd38d.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Gà rán</h3>
                                <h5>35.000đ</h5>
                                <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-lg-6">
                                        <button className="p-2 btn-add w-100">Đặt hàng</button>
                                    </div>
                                    <div className="col"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="card">
                            <img src="https://kfcvietnam.com.vn/uploads/combo/8fcc7be4dfd15601269b48f3e88bd38d.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">Gà rán</h3>
                                <h5>35.000đ</h5>
                                <p className="card-text">1 Miếng Gà Giòn Cay / 1 Miếng Gà Giòn Không Cay.</p>
                                <div className="row">
                                    <div className="col"></div>
                                    <div className="col-lg-6">
                                        <button className="p-2 btn-add w-100">Đặt hàng</button>
                                    </div>
                                    <div className="col"></div>
                                </div>

                            </div>
                        </div>
                    </div> */}




                </div>
                <div className="row mb-5">
                    <div className="col"></div>
                    <div className="col-lg-2">
                        <button onClick={getMore} className="p-2 btn-add w-100">Xem thêm</button>
                    </div>
                    <div className="col"></div>

                </div>
            </div>

        </>
    )
}
export default Spnb