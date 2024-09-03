import { getProductDetails } from "../helper";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductDetails = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = String(_idString);

  const res = await fetch(`http://localhost:3000/api/products/${_id}`, {
    cache: "no-store",
  });
  const product = await res.json();

  return (
    <>
      <h1 className="text-center font-bold text-2xl pb-10">{product.title}</h1>
      <div className="card lg:card-side bg-orange-50 shadow-xl">
        <figure>
          <img
            style={{ objectFit: "cover" }}
            src={product.image}
            alt={product.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Description</h2>
          <p>{product.description}</p>
          <div
            className="mb-50"
            style={{ marginBottom: "100px", marginTop: "15px" }}
          >
            <p className="font-semibold">Ingredients</p>
            <p>{product.ingredients}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-indigo-950 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
