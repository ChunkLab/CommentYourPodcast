'use client'

import debounce from 'lodash.debounce';
import { useState } from 'react';

async function wait(n) {
    return new Promise((res, _) => {
        setTimeout(() => {
            res();
        }, n)
    })
}

const PODCASTS = ["sup", "sup2", "joe rogan", "american life", "studio 404"]

async function getPodcasts(term) {
    await wait(500);

    return PODCASTS.filter(e => e.includes(term));
}

const SearchBar = () => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleValue = debounce(async (value) => {
        setLoading(true)
        const res = await getPodcasts(value);
        setLoading(false)
        setSearchResults(res);
    }, 1000)

    return <>
        <input type='text' placeholder='podcast or {url : todo define more}' onInput={(e) => { handleValue(e.target.value) }} />
        {loading ? 'loading' :
            <ul>
                {searchResults.map((e, i) =>
                    <li key={i}>{e}</li>
                )}
            </ul>}
    </>
}
export default SearchBar