import React, { useEffect, useState } from "react";
import {
  selectProducts,
  useAppDispatch,
  useAppSelector,
} from "../utils/selectors";
import { fetchAllProducts } from "../redux/slices/productSlice";
import SingleProduct from "./SingleProduct";
import { Product } from "../utils/types/Types";
import { useParams } from "react-router-dom";

const Collections: React.FC = () => {
  const [filteredList, setFilteredList] = useState<Product[]>();
  const dispatch = useAppDispatch();
  const { category } = useParams();

  const productsData = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useEffect(() => {
    const filter = productsData.filter(
      (product) => product.categoryName === category
    );

    setFilteredList(filter);
  }, [productsData, category]);

  return (
    <div>
      <div className=" mx-auto bg-slate-200 pt-10">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {filteredList?.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
