import BackBtn from "../components/BackBtn";
import Search from "../components/Search";
import { SearchCard } from "../components/SearchCard";

const SearchPage = async ({ params, searchParams }: any) => {
  const searchquery = searchParams.query;

  const res = await fetch(
    `http://localhost:3000/api/search?keyword=${searchquery}`,
    {
      cache: "no-store",
    }
  );
  const { products } = await res.json();

  return (
    <>
      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 py-10">
        <SearchCard products={products} />
      </div>
    </>
  );
};

export default SearchPage;
