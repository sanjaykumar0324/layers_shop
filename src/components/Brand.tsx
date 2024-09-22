import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import {
  selectBrands,
  useAppDispatch,
  useAppSelector,
} from "../utils/selectors";
import { fetchAllBrands } from "../redux/slices/brandSlice";

const Brand: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, []);

  const brandData = useAppSelector(selectBrands);

  const handleBrandClick = (brand: string) => {
    navigate(`/collections/${brand}`);
    console.log(brand);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {brandData.map((brandItem) => (
          <div
            key={brandItem.brandId}
            onClick={() => handleBrandClick(brandItem.brandName)}
            className="cursor-pointer flex flex-col items-center mb-[1rem] mx-[1rem]"
          >
            <img
              src={brandItem.image}
              alt={brandItem.brandName}
              style={{
                width: "50px",
                height: "50px",
                marginBottom: "0.5rem",
              }}
            />
            <p>{brandItem.brandName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
