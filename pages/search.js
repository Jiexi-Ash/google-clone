import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import axios from "axios";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import ImageResults from "../components/ImageResults";

function Search({ results }) {
  const router = useRouter();
  const term = router.query.term;
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search - {term}</title>
      </Head>

      <SearchHeader />
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults
          about={results.searchInformation}
          items={results.items}
        />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const url = `https://www.googleapis.com/customsearch/v1?key=${
    process.env.API_KEY
  }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
    context.query.searchType && "&searchType=image"
  }&start=${startIndex}`;

  const response = mockData ? Response : await axios.get(url);

  return {
    props: {
      results: mockData ? response : response.data,
    },
  };
}
export default Search;
