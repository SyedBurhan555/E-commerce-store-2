import React from "react";
import "./singleproduct.css";
import ProductService from "../../Component/ProductService/ProductService";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/ProductContext";
import { useEffect } from "react";
import PageNavigation from "../../Component/PageNavigation/PageNavigation";
import CurrencyFormat from "../../Helpers/CurrencyFormat";
import Starts from "../../Component/Starts/Starts";
import { API } from "../../API/Api";
import MyImage from "../../Component/MyImage/MyImage";
import AddToCart from "../../Component/AddToCart/AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const { singleProductData, isSingleLoading, getSingleData } =
    useProductContext();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProductData;

  useEffect(() => {
    getSingleData(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="single-page-is-loading">...loading</div>;
  }
  return (
    <>
      <PageNavigation title={name} />
      <div className="single-product">
        <div className="single-product-row">
          <div className="single-product-right-col-1">
            <MyImage image={image} />
          </div>
          <div className="single-product-left-col-1">
            <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
            <div className="product-rating">
              <Starts stars={stars} review={reviews} />
            </div>
            <div className="product-desc">
              <p className="product-price">
                MPR:
                <del>
                  <CurrencyFormat price={price + 25000} />
                </del>
              </p>
              <p className="product-deal">
                Deal of the Day:
                <CurrencyFormat price={price} />
              </p>
              <p className="product-detail">{description}</p>
              <div className="product-services">
                <ProductService icon="fal fa-truck" title="fast delivery" />
                <ProductService
                  icon="far fa-recycle"
                  title="30 days Replacemnet"
                />
                <ProductService
                  icon="far fa-truck-container"
                  title="Burhan Delivered"
                />
                <ProductService
                  icon="fas fa-shield-check"
                  title="2 year Warranty"
                />
              </div>
              <hr />
              <div className="product-prices-detail">
                <p>
                  Available :
                  <span>{stock > 0 ? "In-Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span>{id}</span>
                </p>
                <p>
                  Brand : <span>{company}</span>
                </p>
              </div>
              <hr />
              {stock > 0 && <AddToCart product={singleProductData} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
