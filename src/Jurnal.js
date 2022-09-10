
import './css/soal.css'

function Jurnal() {
    return (
         <div className="col-md-5  shadow p-3 mb-5  mx-2 jurnal" >
            <h1 className="text-center mb-4">Jurnal Umum</h1>
            <table className="table table-bordered " >
                <thead>

                    <tr className="text-center">
                        <th>Akun</th>
                        <th>Debet</th>
                        <th>Kredit</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <input type="text"  id="Account_debet" className='account' />
                        </td>
                        <td>Rp.500.000</td>
                        <td>Rp.0</td>
                        <td hidden>
                            <input type="text"  className='jawaban' id="jawaban" />
                        </td>
                    </tr>
                    <tr>
                        <td className="credit-account "><input type="text" className='account' id="Account_kredit"/> </td>
                        <td>Rp.0</td>
                        <td className="credit-account ">Rp.500.000</td>
                    </tr>

                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                        <td>
                            <p></p>
                        </td>
                    </tr>
                </tbody>

                </table>
                <div className="row  ">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
    )
}

export default Jurnal