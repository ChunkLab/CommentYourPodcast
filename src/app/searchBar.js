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

  async function search(term) {
    setLoading(true)
    const res = await getPodcasts(term);
    setLoading(false)
    setSearchResults(res);
  }

  return <>
    <input
      type='text'
      placeholder='podcast or {url : todo define more}'
      onInput={
        debounce((e) => search(e.target.value), 1000)
      }
    />
    {loading ?
      'loading' :
      <ul>
        {searchResults.map((e, i) =>
          <li key={i}>{e}</li>
        )}
      </ul>}
  </>
}
export default SearchBar
