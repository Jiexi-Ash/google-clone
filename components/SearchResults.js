import React from "react";

function SearchResults({ about }) {
  return (
    <div className="flex px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {about.formattedTotalResults} results ({about.formattedSearchTime}
        ) seconds
      </p>
    </div>
  );
}

export default SearchResults;
