import React from "react";
import "./product.css";
import { useFilterContex } from "../../Context/filterProductContext";
import GridView from "../../Component/GridView/GridView";
import ListView from "../../Component/ListView/ListView";
import CurrencyFormat from "../../Helpers/CurrencyFormat";

const Product = () => {
  const {
    all_products,
    filter_product,
    grid_view,
    setListView,
    setGridView,
    sorting,
    updateFilter,
    clearFilter,
    filter: { text, colors, category, price, maxPrice, minPrice,},
  } = useFilterContex();

  const uniqueData = (all_products, attr) => {
    let newVal = all_products.map((curElem) => {
      return curElem[attr];
    });
    if (attr === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };
  const getCategoryData = uniqueData(all_products, "category");
  const companyData = uniqueData(all_products, "company");
  const colorsData = uniqueData(all_products, "colors");
  // console.log(colorsData);
  return (
    <div className="products">
      <div className="products-row">
        <input
          type="search"
          placeholder="Search"
          onChange={updateFilter}
          value={text}
          name="text"
        />
        <div className="products-view">
          <i
            className={grid_view ? "fas fa-th-large active" : "fas fa-th-large"}
            onClick={() => setGridView(true)}
          ></i>
          <i
            className={grid_view ? "fa fa-list" : "active fa fa-list"}
            onClick={() => setListView(false)}
          ></i>
        </div>

        <h4 style={{ fontWeight: 500 }}>
          {filter_product.length} total Product
        </h4>
        <select className="product-search" onClick={sorting}>
          <option value="lowest">Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest">Price(highest)</option>
          <option value="#" disabled></option>
          <option value="a-z">Price(a-z)</option>
          <option value="#" disabled></option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </div>
      <div className="All-product-row">
        <div style={{ flex: 1 }}>
          <div className="products-options">
            <div className="product-category">
              <h3>Category</h3>
              {getCategoryData.map((curElem, index) => {
                return (
                  <button
                    key={index}
                    className={
                      curElem === category
                        ? "product-category-btn-active"
                        : "product-category-btn"
                    }
                    value={curElem}
                    name="category"
                    onClick={updateFilter}
                  >
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="product-company">
            <h3>Company</h3>
            <select
              style={{ padding: 5 }}
              onClick={updateFilter}
              name="company"
            >
              {companyData.map((curElem, index) => {
                return (
                  <option name="company" value={curElem} key={index}>
                    {curElem}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="product-color-search">
            <h3>Colors</h3>
            <div className="product-color-search1">
              {colorsData.map((curElemColor, index) => {
                if (curElemColor === "all") {
                  return (
                    <button
                      type="button"
                      className={
                        curElemColor === colors ? "product-active" : "red"
                      }
                      key={index}
                      value={curElemColor}
                      name="colors"
                      onClick={updateFilter}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    type="button"
                    className={
                      curElemColor === colors ? "product-active" : "red"
                    }
                    style={{ backgroundColor: curElemColor }}
                    key={index}
                    value={curElemColor}
                    name="colors"
                    onClick={updateFilter}
                  >
                    {colors === curElemColor ? (
                      <i class="fas fa-check" style={{ color: "#555" }}></i>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="product-price2">
            <h4>Price</h4>
            <p>
              <CurrencyFormat price={price} />
            </p>
            <input
              type="range"
              name="price"
              max={maxPrice}
              min={minPrice}
              value={price}
              onChange={updateFilter}
            />
          </div>
          <button className="product-btn2" onClick={clearFilter}>Clear Filter</button>
        </div>
        <div className="All-products">
          {grid_view ? (
            <GridView product={filter_product} />
          ) : (
            <ListView product={filter_product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
