import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { set, useForm } from "react-hook-form";


function Checkout({ cardUser }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [dataCard, setDataCard] = useState([])
    const [sumPrice, setSumPrice] = useState(0)
    const [tp,setTp] = useState("tpN")
    const inputRefTp = useRef()
    const inputRefPt = useRef()
    const [qh,setQh] = useState([])
    const [checkTp,setCheckTp] = useState(true)
    const [checkQh,setCheckQh] = useState(true)
    const [checkPt,setCheckPt] = useState(true)
    let a = 0
    useEffect(() => {
        axios.get(`http://localhost:9999/${cardUser}`).then((response) => {
            setDataCard(response.data)
            for (let i = 0; i < response.data.length; i++) {
                a += (parseInt(response.data[i].price)) * (parseInt(response.data[i].soluong))

            }
            setSumPrice(a)
        })

    }, [sumPrice])
    function chonTp(){
        if(inputRefTp.current.value == ""){
            setTp("cc")
        }else{
            setTp(inputRefTp.current.value)
        }
        
        setCheckTp(false)
    }
    useEffect(() => {
        axios.get(`http://localhost:9999/${tp}`).then((response) => {
            setQh(response.data)
            
        })

    },[tp,setCheckTp])
    function chonQh(){
        setCheckQh(false)
    }
    console.log(tp);
    function setPhuongthuc(){
        if(inputRefPt.current.value == "visa"){
            setCheckPt(false)
        }else{
            setCheckPt(true)
        }
    }
    
    const onSubmit = data => {

    }
    return (
        <>
            <div class="container mb-5">

                <h3 class="text-center mt-3 mb-3">Thanh toán</h3>
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="row text-center m-3">
                            <div class="col-lg-4 col-md-4">Sản phẩm</div>
                            <div class="col-lg-4 col-md-4">Số lượng</div>
                            <div class="col-lg-4 col-md-4">Tổng tiền</div>
                        </div>
                        <div class="line-border"></div>
                        {dataCard.map((item) => {
                            return (
                                <>
                                    <div key={item.id} class="row text-center mt-3 mb-3">

                                        <div class="col-lg-4 col-md-4">
                                            <img class="w-100" src={item.img} alt="" />

                                        </div>
                                        <div class="col-lg-4 col-md-4 m-auto">
                                            <p>{item.soluong}</p>
                                        </div>
                                        <div class="col-lg-4 col-md-4 m-auto">
                                            <p>{item.soluong * item.price}</p>
                                        </div>
                                    </div>
                                    <div class="line-border"></div>

                                </>
                            )
                        })}
                        <div class="row text-center mt-3 mb-3">

                            <div class="col-lg-4 col-md-4">
                                <h4>Tổng tiền</h4>

                            </div>
                            <div class="col-lg-4 col-md-4 m-auto">

                            </div>
                            <div class="col-lg-4 col-md-4 m-auto">
                                <h5>{sumPrice} đ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mt-3">

                        <h5 class="text-center">Chọn địa chỉ nhận hàng</h5>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-lg-8">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label class="mb-2 mt-3" for="">Liên hệ</label>
                                    <input className="w-100 p-2" placeholder="Tên đăng nhập" {...register("name", { required: "Nhập tên của bạn",minLength: 3})} />
                                    {errors.name && <span className="text-danger">Vui lòng nhập tên của bạn </span>}
                                    <input className="w-100 mt-4 p-2"  placeholder="Số điện thoại" {...register("phone", { required: "Nhập số điện thoại của bạn",minLength: 10 })} />
                                    {errors.phone && <span className="text-danger">Vui lòng nhập số điện thoại của bạn</span>}
                                    <p className="mt-3">Địa chỉ</p>
                                    <select onChange={chonTp} ref={inputRefTp} class="w-100 p-2" name="" id="">
                                        <option value="">Tỉnh/ Thành phố</option>
                                        <option value="tpHN">Hà Nội</option>
                                        <option value="tpHCM">TP. Hồ Chí Minh</option>
                                    </select>
                                    {/* {errors.City && <span className="text-danger">Vui lòng nhập thành phố của bạn </span>} */}
                                    {checkTp ? <></> :
                                    <>
                                    <select onChange={chonQh} class="w-100 mt-3 p-2" name="" id="">
                                        <option value="">Quận/ Huyện</option>
                                            {qh.map((item) =>{
                                                return(
                                                    <>
                                                    <option value="">{item.name}</option>
                                                    </>
                                                 

                                                )
                                            

                                            })}
                                    </select>
                                    </>     
                                                               
                                        
                                    }
                                    {checkQh ? <></> :
                                        <textarea name="" id="" class="w-100 mt-2 p-2" placeholder="Nhập địa chỉ cụ thể" rows="3"></textarea>

                                    }  

                                    <h5 class="text-center mt-3">Phương thức thanh toán</h5>
                                <div>
                                    <select onChange={setPhuongthuc} ref={inputRefPt}  class="p-2 w-100" name="" id="">
                                        <option value="">Chọn phương thức thanh toán</option>                                        
                                        <option value="visa">
                                            Thẻ tín dụng/ Ghi nợ
                                        </option>
                                        <option value="none">
                                            Thanh toán khi nhận hàng
                                        </option>
                                    </select>
                                </div>
                                {checkPt ? <></> :
                               
                                <div className="row justify-content-between mt-3">
                                    <div className="col-lg-12">
                                        <input className="w-100 p-2" placeholder="Số thẻ" />
                                    </div>
                                        
                                    <div className="col-lg-8 mt-3 "><input className="w-100 p-2" placeholder="Ngày hết hạn" /></div>
                                        
                                    <div className="col-lg-4 mt-3"><input className="w-100 p-2" placeholder="Mã CVV" /></div>
                                        
                                    <div className="col-lg-12 mt-3"><input className="w-100 p-2" placeholder="Họ và tên chủ thẻ" /></div>
                                 
                                </div>
                                 }
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col-lg-8">

                                            <input onClick={e => onSubmit()} type="submit" className="w-100 p-2 btn-add mt-4" />



                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    
                                

                                </form>
                                
                                


                               
                            </div>
                            <div className="col"></div>
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}
export default Checkout