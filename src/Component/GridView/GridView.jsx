import React from 'react'
import FeaturedCard from '../FeatureCard/FeaturedCard';
import './gridview.css';

const GridView = ({product}) => {
    // console.log(product)
  return (
    <div className='grid-view'>
        {
            product.map((curELem)=>{
                return <FeaturedCard key={curELem.id} {...curELem} />
            })
        }
    </div>
    
  )
}

export default GridView