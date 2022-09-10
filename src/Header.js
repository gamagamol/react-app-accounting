
import user_white from './Assets/user_white.png'
import './css/soal.css'

function Header() {
    return (
        <div>

          <nav className="navbar">
            <div className="container-fluid ">
            <div className="col ml-5">
                <span className="mx-5 fs-4 text-light">PKKMB QUIZ</span>
                <span className="mx-5 fs-4 text-light">Accounting I</span>
            </div>

            <div className="col d-flex justify-content-end">

                <div className="">
                    <img src={user_white} className="time" width="100px"/>

                </div>
            </div>

        </div>
        </nav>
            <div className="garis mb-5"></div>
        </div>
            
        
    )
}

export default Header