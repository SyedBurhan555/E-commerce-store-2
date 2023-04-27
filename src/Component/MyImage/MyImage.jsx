import React ,{useState} from 'react'

const MyImage = ({image =[{url:""}]}) => {
    
    const [mainImage, setMainImage] = useState(image[0]);
  return (
    <div className="single-product-images">
              <div>
                {image.map((curElem, index) => {
                  return (
                    <img
                      key={index}
                      src={curElem.url}
                      alt={curElem.filename}
                      onClick={() => setMainImage(curElem)}
                    />
                  );
                })}
              </div>
              <img
                src={mainImage.url}
                alt="productimage"
                width="100%"
                height="auto"
              />
            </div>
  )
}

export default MyImage;
