import { Slider } from '@mui/material';

function Sliders(props) {
    
    return (
        <div className='slider'>

            <Slider
                defaultValue={25}
                aria-label="Default"
                valueLabelDisplay="auto"
                value = {props.timeSlider}
                onChange={(e) => props.setTimeSlider(e.target.value)}
                color="primary" 
                disabled = {props.disabled ? true: false}
            />
                
        </div>

    );
}

export default Sliders;