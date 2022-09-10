import './css/soal.css'
import Jawaban from './Jawaban'
import Jurnal from './Jurnal'
function Soal({handleJurnal}) {

 
    
    return (
            <div className="col-md-6 ml-5 mx-1" >
                <div className="row d-flex flex-column mb-3">

                    <div className="col question shadow p-3 mb-5" >
                        <p className="soal">
                            Perusahaan Makmur jaya merupakan perusahaan dagang, dimana selama bulan juli 2022 terjadi
                            transaksi penjualan barang dagang secara tunai dengan harga Rp. 5000.000,-,
                            Bagaimanakah cara penjurnalan umum yang dilakukan oleh Perusahaan Makmur jaya?
                        </p>
                    </div>

                <Jawaban handleJurnal={ handleJurnal}/>
                   
                </div>
            </div>




    )
}

export default Soal