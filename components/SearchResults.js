import React from "react";

import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ about, items }) {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {about.formattedTotalResults} results ({about.formattedSearchTime}
        ) seconds
      </p>
      {items.map((item) => (
        <div className="max-w-xl mb-8" key={item.link}>
          <div className="group ">
            <a className="text-sm truncate" href={item.link}>
              {item.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={item.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {item.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
