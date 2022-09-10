
import './css/soal.css'
import iconquiz from './Assets/icon_quiz.png'
import playblack from './Assets/play_black.png'



const Main = () => {
    return (
            <div className="container " >
             <div className="row d-flex flex-column margin-top">
                <div className="col d-flex justify-content-center isi">
                    <img src={iconquiz} width="500px"/>
                </div>
                <div className="col">
                    <h1 className="text-center">Lets Start The Quiz</h1>
                </div>
                    <div className="col text-center">
                  <img src={playblack} width="300px"/>
                        
                </div>
            </div>
          </div>
    )
}

export default Main