import { useState, useEffect } from 'react'

export default function Timer() {
    // state that is incremented by an interval
    const [time, setTime] = useState(0)


    useEffect(() => {
        console.log('time useEffect is running!')
        const incrementTime = () => {
            setTime(time + 1)
        }
    
        const timeInterval = setInterval(incrementTime, 1000)
        return () => {
            console.log('time useEffect is cleaning up!')
            // this return is a callback that will run when the component unmounts
            // this is where you do your 'cleanup'
            clearInterval(timeInterval)
        }
    }, [time]) // only update when the 'time' state value changes

    return (
        <div>
            <h2>at the tone, the time will be: {time}</h2>
        </div>
    )
}