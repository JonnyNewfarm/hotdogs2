import PaginationControls from "../components/PaginationControls";
import ProductCard from "../components/ProductCard";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";
  const page1 = Number(page);
  const per_page1 = Number(per_page);
  console.log(per_page1);

  const res = await fetch(
    `http://localhost:3000/api/products?page=${page}&limit=${per_page}`,
    {
      cache: "no-store",
    }
  );
  const { products, count } = await res.json();
  const hasPrev = per_page1 * (page1 - 1) > 0;
  const hasNext = per_page1 * (page1 - 1) + per_page1 < count;

  return (
    <>
      <div>
        <ProductCard products={products} />
      </div>
      <PaginationControls
        hasNextPage={hasNext}
        hasPrevPage={hasPrev}
        count={count}
      />
      <div>
        {page} / {Math.ceil(count / Number(per_page))}
      </div>
    </>
  );
};

export default ProductsPage;
