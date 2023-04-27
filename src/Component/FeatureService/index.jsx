import React from "react";
import "./index.css"
import FeaturedCard from "../FeatureCard/FeaturedCard";
import { useProductContext } from "../../Context/ProductContext";

const FeatureService = () => {
  const { isLoading,featureProducts} = useProductContext()
  // console.log(  featureProducts);
  if(isLoading){
    return <div style={{textAlign:'center',marginTop:'6%'}}>...loading</div>
  }
  return (
    <div className="feature-section">
      <h5>CHECK NOW</h5>
      <h1>Our Feature Service</h1>
      <div className="featured-cards">
      {featureProducts.map((curElem)=>{
          return <FeaturedCard key={curElem.id} {...curElem}/>
      })
    }
      </div>
    </div>
  );
};

export default FeatureService;
