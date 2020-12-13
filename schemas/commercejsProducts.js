import CommercejsProducts from "../components/CommercejsProducts";

export default {
  name: "commercejsProducts",
  title: "Commercejs Products",
  type: "array",
  of: [
    {
      type: "singleProduct",
      name: "singleProduct",
    },
  ],
  inputComponent: CommercejsProducts,
};
