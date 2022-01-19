import Pomodoro from '../Pomodoro/Pomodoro';
import './MainPage.css';


function MainPage(){

    return (
        <div className="container">
            <div className="row">
                <Pomodoro/>
            </div>
        </div>
    );
}

export default MainPage;