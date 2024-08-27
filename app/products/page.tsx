import ProductCard from "../components/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <>
      <div>
        <ProductCard products={products} />
      </div>
    </>
  );
};

export default ProductsPage;
