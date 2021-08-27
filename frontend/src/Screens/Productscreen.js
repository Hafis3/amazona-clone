import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "./Productscreen.css";
import { addToCart } from "../actions/cartAction";

function Productscreen(props) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const productId = props.match.params.id;
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const handleOnClick = () => {
    dispatch(addToCart(productId, qty));
    props.history.push(`/Cart/${productId}?qty=${qty}`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variants="danger" message={error} />
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <div className="productscreen__container">
            <div className="productscreen__image">
              <img src={product.image} alt="" />
            </div>
            <div className="productscreen__productInfo">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating rating={product.rating} reviews={product.reivews} />
                </li>
                <li>
                  Price : <span>&#8377;</span> {product.price}
                </li>
                <li>
                  Description : <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="productscreen__action">
              <div className="productscreen__card">
                <ul>
                  <li>
                    <div className="row">
                      <strong>Seller</strong>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <Rating
                        rating={product.rating}
                        reviews={product.reivews}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">Rs:{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <select
                            value={product.qty}
                            onChange={(e) => setQty(e.target.value)}
                            name="qty"
                            id=""
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (iqty) => {
                                let qValue = iqty + 1;
                                return (
                                  <option key={qValue} value={qValue}>
                                    {qValue}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                      </li>
                      <li>
                        <button onClick={handleOnClick} className="primary">
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productscreen;
