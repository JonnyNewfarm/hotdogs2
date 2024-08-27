import { Schema, model, models } from "mongoose";


const productSchema = new Schema(
    {
        title: {type: "string", required: true},
        description: {type: "string", required: true},
        ingredients: {type: "string", required: true},
        image: {type: "string", required: true}
    },
    {
        timestamps: true,
    }
)

const Product = models.Product || model("Product", productSchema)

export default Product;