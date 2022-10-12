import { Link } from "react-router-dom"

function HeaderHome(){
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">

                    <div className="col-lg-5 col-md-5">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-lg-6">
                            <img className="w-100" src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/306378332_777317756854712_3001439743117776624_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SQS4VvirVcsAX9ToiaI&_nc_ht=scontent.fhan4-3.fna&oh=03_AVKYSelyeByjk3axC4DTF3-rnzUEinhjakNSvkB7Zh46Bw&oe=635031C1" alt="" />

                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-5 col-md-6">
                    <h3 className="text-center mt-3">GIỚI THIỆU VỀ CHÚNG TÔI</h3>
                        <p className="mt-3">
                        KFC là cụm từ viết tắt của Kentucky Fried Chicken - Gà Rán Kentucky, một trong các thương hiệu thuộc Tập đoàn Yum Brands Inc (Hoa Kỳ). KFC chuyên về các sản phẩm gà rán và nướng, với các món ăn kèm theo và các loại sandwiches chế biến từ thịt gà tươi. Hiện nay đang có hơn 20.000 nhà hàng KFC tại 109 quốc gia và vùng lãnh thổ trên toàn thế giới.
                        </p>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-lg-6">
                            <Link to="/about"  className="btn p-2 btn-add w-100 mt-3">Xem thêm</Link>

                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </>
    )
}
export default HeaderHome