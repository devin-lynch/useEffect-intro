import { useState, useEffect } from 'react'

export default function Wisdom() {
    // state to hold the api response
    const [wisdom, setWisdom] = useState('Loading wisdom...')

    // making API calls that display API data to the user -- you want to only run one time (so you use an empty dependency array)
    useEffect(() => {
        // console.log('Wisdom component is rendering!')
        fetch('https://api.kanye.rest')
    }, []) // empty dependency array (this will make the useEffect run only on the first render)

    useEffect(() => {
        console.log('Wisdom component is re-rendering!')
    }) // no dependency array means this useEffect will always run each render

    return (
        <div>
            <h1>{wisdom}</h1>
        </div>
    )
}