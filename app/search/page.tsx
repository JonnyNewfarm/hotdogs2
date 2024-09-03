import BackBtn from "../components/BackBtn";
import Search from "../components/Search";
import { SearchCard } from "../components/SearchCard";

const SearchPage = async ({ params, searchParams }: any) => {
  const query = searchParams.query;
  const res = await fetch(`http://localhost:3000/api/search?keyword=${query}`, {
    cache: "no-store",
  });
  const { products } = await res.json();
  return (
    <>
      <div style={{ marginTop: "-40px" }}>
        <BackBtn />
      </div>
      <hr className="mt-10 border-gray-800 dark:border-white" />
      <div className="flex justify-center z-50" style={{ marginTop: "-100px" }}>
        <Search placeholder="" />
      </div>

      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 py-10  justify-center mt-10">
        <SearchCard products={products} />
      </div>
    </>
  );
};

export default SearchPage;
