import React from "react";
import Fieldset from "part:@sanity/components/fieldsets/default";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import Commerce from "@chec/commerce.js";
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";

const commerce = new Commerce(
  "pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec",
  true
);

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(value));

const CommercejsProducts = ({ type, value, markers, level, onChange }) => {
  const { title, description } = type;

  const loadOptions = debounce(async (inputValue, callback) => {
    const { data } = inputValue
      ? await commerce.products.list({ query: inputValue })
      : await commerce.products.list();

    const products = data.map((product) => ({
      ...product,
      label: product.name,
      value: product.id,
    }));

    callback(products);
  }, 500);

  const handleChange = (values) => {
    onChange(createPatchFrom(values));
  };

  return (
    <Fieldset
      legend={title}
      description={description}
      markers={markers}
      level={level}
    >
      <AsyncSelect
        value={value}
        cacheOptions
        isMulti
        defaultOptions
        loadOptions={loadOptions}
        onChange={handleChange}
      />
    </Fieldset>
  );
};

export default CommercejsProducts;
