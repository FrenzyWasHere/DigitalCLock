import React, { useEffect, useState } from "react";
function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meirdiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(seconds)} ${meirdiem}`;
    }

    function addZeros(number) {
        if (number < 10) {
            number = "0" + String(number);
            return number;
        }
        else
            return number;

    }


    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>

    )
}
export default DigitalClock