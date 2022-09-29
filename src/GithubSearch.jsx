import { useState, useEffect } from 'react'

export default function GithubSearch() {
    // state to taket he value from what the user is typing in the input
    const [search, setSearch] = useState('devin-lynch')
    // state for the API's response back to us
    const [repos, setRepos] = useState([])

    // useEffect will run an initial search on page load, and each time the user types into the input
    useEffect(() => {
        console.log(`The search value is ${search}`)
        async function fetchRepos() {
            try {
                const url = `http://api.github.com/users/${search}/repos`
                const response = await fetch(url)
                const responseData = await response.json()
                console.log(responseData)
            } catch(err) {
                console.warn(err)
            }
        }
        fetchRepos() // don't forget to invoke!
    }, [search])

    // map the repos the API has responded with
    return (
        <div>
            <h2>Search the Github API!</h2>
            
            <label htmlFor='search'>Username:</label>
            <input
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}