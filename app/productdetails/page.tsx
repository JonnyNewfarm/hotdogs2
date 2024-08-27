import { getProductDetails } from "../helper";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductDetails = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = String(_idString);

  const product = await getProductDetails(_id);
  console.log(product);
};

export default ProductDetails;
