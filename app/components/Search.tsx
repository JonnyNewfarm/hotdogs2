"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const encodedSearchquery = encodeURI(searchQuery);
    router.push(`/search?query=${encodedSearchquery}`);
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input
          className="input input-bordered lg:w-64 sm:w-52  h-8 mr-6 "
          type="search"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchInput;
