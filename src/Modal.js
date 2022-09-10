

import sorry from './Assets/sorry.png'

export default function Modal() {
    

    return (
         <div class="modal " tabindex="-1" id="modal-salah">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-body">
                    <div class="row">
                        <div class="d-flex justify-content-center ">

                            <img src={sorry} alt="" width="250px"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">
                            <h1>MAAF JAWABAN ANDA SALAH ! SILAHKAN COBA LAGI</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col text-center">

                            <button class="btn btn-primary fs-1" style="width:100px ;" onClick="Refresh()"> OK</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}