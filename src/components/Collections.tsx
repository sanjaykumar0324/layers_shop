import React, { useEffect, useState } from "react";
import {
  selectProducts,
  useAppSelector,
} from "../utils/selectors";
import SingleProduct from "./SingleProduct";
import { Product } from "../utils/types/Types";
import { useNavigate, useParams } from "react-router-dom";

const Collections: React.FC = () => {
  const [filteredList, setFilteredList] = useState<Product[]>();
  const { category } = useParams();
  const navigate = useNavigate();

  const productsData = useAppSelector(selectProducts);



  useEffect(() => {
    const filter = productsData.filter(
      (product) => product.categoryName === category
    );

    setFilteredList(filter);
  }, [productsData, category]);

const handleProductClick=(product:Product)=>{
   navigate(`/collections/${category}/${product.name}`,{state : {product}})
}

  return (
    <div>
      <div className=" mx-auto bg-slate-200 pt-10">
        <div className=" container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
          {filteredList?.map((product) => (
            <SingleProduct key={product.id} product={product} onClick = {()=>handleProductClick(product)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
