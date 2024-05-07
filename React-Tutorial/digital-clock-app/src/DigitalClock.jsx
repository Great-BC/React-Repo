import React, {useState, useEffect} from "react";
function DigitalClock() {
    // Time Object Declaration 
    const [time, setTime] = useState(new Date());
    // Use Effect hook to update the time variable with the Date Constructor every second
    useEffect(()=> {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        // Cleaner For intervalID variable
        return () => {
            clearInterval(intervalId);
        }
    }, []);
    // Formats Time By accessing individual time elements of the time variable
    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        // Condition for meridiem value
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }
    // Adds 0 before single digit number
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    );
}
export default DigitalClock;