const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json();
  
    };
  
  

  export const getProductDetails = async(_id:string) => {
const item = await fetchData();
const singleItem = await item.find((product: any) => product._id === _id)

  }