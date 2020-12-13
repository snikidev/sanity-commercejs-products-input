export default {
  name: "singleProduct",
  type: "object",
  fields: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "created",
      type: "number",
    },
    {
      name: "last_updated",
      type: "number",
    },
    {
      name: "active",
      type: "boolean",
    },
    {
      name: "permalink",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "price",
      type: "price",
    },
    {
      name: "quantity",
      type: "number",
    },
  ],
};
