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

const PODCASTS = ["sup", "sup2"]

async function getPodcasts(term) {
    await wait(500);

    return PODCASTS;
}

const SearchBar = () => {
    const [loading, setLoading] = useState(false);
    const handleValue = debounce(async (value) => {
        setLoading(true)
        const res = await getPodcasts(value);
        setLoading(false)
        console.log(res);
    }, 1000)

    return <>
        <input type='text' placeholder='podcast or {url : todo define more}' onInput={(e) => { handleValue(e.target.value) }} />
        {loading ? 'loading' : ''}
    </>
}
export default SearchBar