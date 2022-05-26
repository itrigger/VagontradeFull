import React from "react";

const Row = ({ data, addToCart }) => {
  return (
    <div className="row result-row">
      <div className="d_f col-4 xs-col-4">
        <div className="img">
          <img srcSet={data.image.srcSet} alt="" />
        </div>
        <div className="name-w">
          <div className="name">{data.name}</div>
          <div
            dangerouslySetInnerHTML={{ __html: data.shortDescription }}
            className="description"
          ></div>
        </div>
      </div>
      <div className="col-4 xs-col-4 | minirow-w">
        <div className="d_f | minirow">
          <div className="left">Наличие</div>
          <div className="right">
            {data.stockQuantity > 0
              ? "В наличии: " + data.stockQuantity
              : "Нет в наличии"}
          </div>
        </div>
        <div className="d_f | minirow">
          <div className="left">Год выпуска</div>
          <div className="right">{data.productsKP.godVypuska}</div>
        </div>
        <div className="d_f | minirow">
          <div className="left">Местонахождение</div>
          <div className="right">{data.productsKP.mestonahozhdenie}</div>
        </div>
      </div>
      <div className="d_f fd_c ai_end col-4 xs-col-4 | price_block">
        <div className="price">{data.price}</div>
        <div className="btn-w">
          <button
            onClick={() =>
              addToCart({
                id: data.id,
                price: data.price,
                name: data.name,
                image: data.image.srcSet,
              })
            }
            className="btn-classic"
          >
            <span>Заказать</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;