
function Jawaban({handleJurnal}) {


    
   


    return (
        <div className="col question mt-2 ">
                        <div className="row ">
                            <div className="col " >
                                <div className="card mx-2 shadow p-3 mb-5  answer bg-light" id='answer'>
                                    <div className="card-body bg-light">
                                        <div className="row">
                                            <div className="col-md-2  text-center bg-light" >
                                    <div className="pilihan bg-light" onClick={() => {
                                        handleJurnal(['Kas','Penjualan'],'A')
                                    }}>

                                                    A.
                                                </div>
                                            </div>

                                            <div className="col bg-light">
                                                Kas
                                                <br/>
                                                Penjualan
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2 " >
                                <div className="card mx-2 shadow p-3 mb-5  answer bg-light">
                                    <div className="card-body bg-light">
                                        <div className="row">
                                            <div className="col-md-2  text-center bg-light">
                                                <div className="pilihan bg-light" onClick={() => {
                                        handleJurnal(['Penjualan','Kas'],'B')
                                    }}>

                                                    B.
                                                </div>
                                            </div>

                                            <div className="col bg-light">
                                                Penjualan
                                                <br/>
                                                Kas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2" >
                                <div className="card mx-2 shadow p-3 mb-5  answer bg-light">
                                    <div className="card-body bg-light">
                                        <div className="row">
                                            <div className="col-md-2  text-center bg-light">
                                                <div className="pilihan bg-light" onClick={() => {
                                        handleJurnal(['Pembelian','Kas'],'C')
                                    }}>

                                                    C.
                                                </div>
                                            </div>

                                            <div className="col bg-light">
                                                Pembelian
                                                <br/>
                                                Kas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mt-2" >
                                <div className="card mx-2 shadow p-3 mb-5  answer  bg-light">
                                    <div className="card-body bg-light">
                                        <div className="row bg-light">
                                            <div className="col-md-2  text-center bg-light">
                                                <div className="pilihan bg-light" onClick={() => {
                                        handleJurnal(['Kas','Pembelian'],'D')
                                    }}>

                                                    D.
                                                </div>
                                            </div>

                                            <div className="col bg-light">
                                                Kas
                                                <br/>
                                                Pembelian
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
    )
}

export default Jawaban