import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import axios from "axios";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const term = useRouter().query.term;
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search - {term}</title>
      </Head>

      <SearchHeader />
      <SearchResults about={results.searchInformation} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const url = `https://www.googleapis.com/customsearch/v1?key=${
    process.env.API_KEY
  }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
    context.query.searchType && "&searchType=image"
  }`;

  const response = mockData ? Response : await axios.get(url);

  return {
    props: {
      results: mockData ? response : response.data.items,
    },
  };
}
export default Search;
