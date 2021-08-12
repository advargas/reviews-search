import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Configure,
  Stats
} from 'react-instantsearch-dom';
import aa from 'search-insights';
import Review from "./Review";

aa ('init', {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
});

let userToken = 'user-1';
aa('setUserToken', userToken);

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY, {
    headers: {
      'X-Algolia-UserToken': userToken
    }
  }
);

const Search = () => {
  return (
      <InstantSearch 
        indexName="reviews" 
        searchClient={searchClient}>
        <div className="left-panel">
          <Configure 
            hitsPerPage={50}
            enablePersonalization={true} 
            clickAnalytics
          />
          <ClearRefinements />
          <br/>
          <h2 className="font-medium text-gray-900 mb-3">Topic</h2>
          <RefinementList attribute="topic" />
          <br/>
          <h2 className="font-medium text-gray-900 mb-3">Experience</h2>
          <RefinementList attribute="record" />
        </div>
        <div className="right-panel">
          <SearchBox />
          <Stats/>
          <Hits hitComponent={Review} />
        </div>
      </InstantSearch>
  );
}

export default Search;

