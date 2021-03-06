import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Row = ({ data, addToCart }) => {
  const isBrowser = () => typeof window !== "undefined";
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isDesktop, setDesktop] = useState(
    isBrowser() && window.innerWidth > 1023
  );

  const updateMedia = () => {
    setDesktop(isBrowser() && window.innerWidth > 1023);
  };

  useEffect(() => {
    isBrowser() && window.addEventListener("resize", updateMedia);
    return () =>
      isBrowser() && window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        <tr className="result-row-2">
          <td className="name-w">
            <div className="name">{data.name}</div>
          </td>
          {data.productsKP.godVypuska ? (
            <td className="">
              <div className="right">{data.productsKP.godVypuska}</div>
            </td>
          ) : (
            <td></td>
          )}
          {data.productsKP.tolshhinaOboda ? (
            <td className="ta_c">
              <div className="right">{data.productsKP.tolshhinaOboda}</div>
            </td>
          ) : (
            <td></td>
          )}
          {data.productsKP.telezhka ? (
            <td className="">
              <div className="right">{data.productsKP.telezhka}</div>
            </td>
          ) : (
            <td></td>
          )}
          <td>
            <div
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></div>
          </td>

          {data.productsKP.mestonahozhdenie ? (
            <td className="">
              <div className="right">{data.productsKP.mestonahozhdenie}</div>
            </td>
          ) : (
            <td></td>
          )}
          {data.productTags ? (
            <td className="">
              <div className="right">{data.productTags.nodes[0].name}</div>
            </td>
          ) : (
            <td></td>
          )}
          <td className=" price_block ">
            <div className="price">{data.price ? data.price : "---"}</div>
          </td>
          <td>
            <div className="btn-w">
              <button
                onClick={() =>
                  addToCart({
                    id: data.id,
                    price: data.price,
                    name: data.name,
                    image: data.image.srcSet,
                    stock: data.stockQuantity,
                    year: data.productsKP.godVypuska
                      ? data.productsKP.godVypuska
                      : null,
                    location: data.productsKP.mestonahozhdenie
                      ? data.productsKP.mestonahozhdenie
                      : null,
                    telezhka: data.productsKP.telezhka
                      ? data.productsKP.telezhka
                      : null,
                    tolshhinaOboda: data.productsKP.tolshhinaOboda
                      ? data.productsKP.tolshhinaOboda
                      : null,
                  })
                }
                className={
                  cartItems.find((x) => x.id === data.id)
                    ? "btn-classic active"
                    : "btn-classic"
                }
              >
                <span>
                  {cartItems.find((x) => x.id === data.id)
                    ? "?? ??????????????"
                    : "????????????????"}
                </span>
              </button>
            </div>
          </td>
        </tr>
      ) : (
        /*mobile*/
        <tr className="result-row-2 card-mobile">
          <td className="name-w">
            <div className="card-title">????????????</div>
            <div className="name">{data.name}</div>
          </td>
          {data.productsKP.godVypuska ? (
            <td className="">
              <div className="card-title">?????? ??????????????</div>
              {data.productsKP.godVypuska}
            </td>
          ) : null}
          {data.productsKP.tolshhinaOboda ? (
            <td>
              <div className="card-title">?????????????? ??????????</div>
              {data.productsKP.tolshhinaOboda}
            </td>
          ) : null}
          {data.productsKP.telezhka ? (
            <td className="">
              <div className="card-title">?????? ??????</div>
              <div className="right">{data.productsKP.telezhka}</div>
            </td>
          ) : null}
          <td>
            <div className="card-title">??????????????????</div>
            <div
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
              className="description"
            ></div>
          </td>

          {data.productsKP.mestonahozhdenie ? (
            <td className="">
              <div className="card-title">??????????????</div>
              <div className="right">{data.productsKP.mestonahozhdenie}</div>
            </td>
          ) : null}
          {data.productTags ? (
            <td className="">
              <div className="card-title">????????????</div>
              <div className="right">{data.productTags.nodes[0].name}</div>
            </td>
          ) : null}
          <td className=" price_block ">
            <div className="price">{data.price ? data.price : "---"}</div>
          </td>
          <td>
            <div className="btn-w">
              <button
                onClick={() =>
                  addToCart({
                    id: data.id,
                    price: data.price,
                    name: data.name,
                    image: data.image.srcSet,
                    stock: data.stockQuantity,
                    year: data.productsKP.godVypuska
                      ? data.productsKP.godVypuska
                      : null,
                    location: data.productsKP.mestonahozhdenie
                      ? data.productsKP.mestonahozhdenie
                      : null,
                    telezhka: data.productsKP.telezhka
                      ? data.productsKP.telezhka
                      : null,
                    tolshhinaOboda: data.productsKP.tolshhinaOboda
                      ? data.productsKP.tolshhinaOboda
                      : null,
                  })
                }
                className={
                  cartItems.find((x) => x.id === data.id)
                    ? "btn-classic active"
                    : "btn-classic"
                }
              >
                <span>
                  {cartItems.find((x) => x.id === data.id)
                    ? "?? ??????????????"
                    : "????????????????"}
                </span>
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default Row;
