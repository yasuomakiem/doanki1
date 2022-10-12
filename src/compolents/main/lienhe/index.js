function Lienhe() {
    window.scrollTo(0,600)
    return (
        <>
            <div className="container">
                <h3 className="text-center mt-3 mb-3">Liên hệ</h3>
                <div className="mb-3">
                    <div className="d-flex">
                        <div className="col-lg-1 text-center">
                            <i className="fa-solid fa-location-dot mt-2"></i>
                        </div>
                        <div className="col">
                            <h4>Địa chỉ</h4>
                            <p>Tòa Nhà HTC,
                                250 Hoàng Quốc Việt, Cổ Nhuế, Cầu Giấy, Hà Nội, Việt Nam</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="d-flex">
                                <div className="col-lg-3 text-center">
                                    <i className="fa-solid fa-phone mt-2"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h4>Điện thoại</h4>
                                    <p>+(84) 987.654.321</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="d-flex">
                                <div className="col-lg-3 text-center">
                                    <i className="fa-solid fa-fax mt-2"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h4>Fax</h4>
                                    <p>+(84) 345.678.910</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">

                            <div className="d-flex">
                                <div className="col-lg-3 text-center">
                                    <i className="fa-solid fa-envelope mt-2"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h4>Email</h4>
                                    <p>son@son.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border mb-5">
                    <h4 className="text-center mt-3">Liên hệ với chúng tôi</h4>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <input className="w-100 p-2 mt-3" placeholder="Họ và tên" type="text" />
                            <input className="w-100 p-2 mt-4" placeholder="Email" type="text" />
                            <input className="w-100 p-2 mt-4" placeholder="Số điện thoại" type="text" />
                            <p className="mt-3 mb-2">Nội dung</p>
                            <textarea name="" id="" className="w-100" cols="20" rows="10"></textarea>
                            <div className="row m-5">
                                <div className="col"></div>
                                <div className="col-lg-8">
                                    <button className="btn-add p-2 w-100">Gửi</button>
                                </div>
                                <div className="col"></div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    
                                    
                </div>

                        



            </div>
        </>
    )
}
export default Lienhe