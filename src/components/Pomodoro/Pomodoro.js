import Box from "../MainPageBox/Box";
import { useState } from "react";

import Sliders from "../Sliders/Slider";

import "./Pomodoro.css";
import { green } from "@mui/material/colors";

function Pomodoro() {
  const [time, setTime] = useState({ time: "25:00", isBreak: false });
  const [workTimeSlider, setWorkTimeSlider] = useState(25);
  const [breakTimeSlider, setBreakTimeSlider] = useState(5);
  const [countingStarted, setCountingStarted] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalID, setIntervalID] = useState();

  let chooseTime = (time) => {
    setWorkTimeSlider(time);
    setTime({ time: time + ":00", isBreak: false });
  };
  //Funkcija koja pokrece tajmer
  let start = () => {
    setIsRunning(true);
    setIntervalID(setInterval(timeChanger, 1000));
  };
  //Funckija koja Stopira tajmer i vraca ga na pocetne vrednosti
  let stop = () => {
    clearInterval(intervalID);
    setIntervalID(null);
    setIsRunning(false);
    setTime({ time: workTimeSlider + ":00", isBreak: false });
  };
  //SKIP FUNKCIJA
  let skip = () => {
    if(time.isBreak){
      setTime({ time: workTimeSlider + ":00", isBreak: false });
    }else{
      setTime({ time: breakTimeSlider + ":00", isBreak: true });
    }
  }
  //Funckija koja menja vreme svake sekunde
  let timeChanger = () => {
    setTime((time) => {
      let minutes = time.time.split(":")[0];
      let seconds = time.time.split(":")[1];

      // Ovom petljom setujemo sekunde na broj kako bismo mogli da oduzimamo i minute
      // smanjujemo za 1 na svakih 60sec
      if (seconds === "00") {
        seconds = 60;
        minutes = +minutes - 1;
      }
      seconds = +seconds - 1;

      //Dodajemo 0 ispred jednocifrene vredonosti
      if (+seconds < 10) {
        seconds = "0" + seconds;
      }
      let updatedTime;
      let updatedBreak;
      console.log("time", time);
      //Kada vrednost Work Time dodje na 00:00 prebacujemo ga na Break Time
      if (+minutes == 0 && +seconds == 0 && !time.isBreak) {
        updatedBreak = !time.isBreak;
        updatedTime = breakTimeSlider + ":00";
      } else if (+minutes == 0 && +seconds == 0) {
        updatedBreak = !time.isBreak;
        updatedTime = workTimeSlider + ":00";
      } else {
        updatedTime = minutes + ":" + seconds;
        updatedBreak = time.isBreak;
      }
      return {
        time: updatedTime,
        isBreak: updatedBreak,
      };
    });

    setCountingStarted((countingStarted) => countingStarted + 1);
  };
  console.log(isRunning ,time.isBreak);

  return (
    <div className={`row justify-content-center my-5 py-5 pomodoro 
    ${isRunning && time.isBreak ? "green" : ""}`}>
      <div className="col-6 mx-4 pomodoro_components demo">
        <div className="row text-center pomodoro_workTime p">
          <p>Work time</p>
          <Sliders
            timeSlider={workTimeSlider}
            setTimeSlider={chooseTime}
            disabled={isRunning}
          />
        </div>
        <div className="row text-center pomodoro_breakTime p">
          <p>Break time</p>
          <Sliders
            timeSlider={breakTimeSlider}
            setTimeSlider={setBreakTimeSlider}
            disabled={isRunning}
          />
        </div>
        <div className="row  pomodoro_timer p">
          <p className="timer">
            {time.time}
            <br />
          </p>
          <div
            className="btn-group btn-group-sm pomodoro_button"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className={`btn btn-success buttons ${isRunning ? "d-none" : ""}`}
              onClick={start}
            >
              START
            </button>
            <button
              type="button"
              className={`btn btn-danger buttons ${isRunning ? "" : "d-none"}`}
              onClick={stop}
            >
              STOP
            </button>
            <button type="button" className="btn btn-warning buttons" onClick={skip}>
              SKIP
            </button>
          </div>
        </div>
      </div>

      <div className="col-4 mx-4 pomodoro_components demo">
          <Box/>
      </div>

      
    </div>
  );
}

export default Pomodoro;
