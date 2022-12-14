import { useState, useEffect } from 'react'

export default function Timer() {
    // state that is incremented by an interval
    const [time, setTime] = useState(0)

    // // useEffect will run eery render if you don't supply a 'dependency array'...
    // useEffect(() => {
    //     console.log('the component is re-rendering')
    //     return () => {
    //         // this cleanup function will be called every render
    //         console.log('the component is cleaning up!')
    //     }
    // })

    // // an empty dependency array will make a userEffect run only on the first page render
    // useEffect(() => {
    //     console.info('the timer component is rendering for the first time!')
    //     // console.log(console)
    //     return () => {
    //         // will run when the component is removed from the virtual dom
    //         console.log('the timer component is leaving the building')
    //     }
    // }, []) // empty dependencies

    // if the useEffect has a state value or props value in the dependency array, it will only run when that value changes
    useEffect(() => {
        // console.log('time useEffect is running!')
        const incrementTime = () => {
            setTime(time + 1)
        }
    
        const timeInterval = setInterval(incrementTime, 1000)
        return () => {
            // console.log('time useEffect is cleaning up!')
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