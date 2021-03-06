import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTENT } from "../../../apollo/queries";
import { Link } from "gatsby";
import FormFooter from "../../Form/FormFooter";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { CartContext } from "../../../context/CartContext";

const Footer = () => {
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [telCall, setTelCall] = useState("");
  const [telWt, setTelWt] = useState("");

  const clickHandler = () => {
    window.open("https://wa.me/" + telWt);
  };

  const value = React.useContext(CartContext);

  const { data } = useQuery(GET_CONTENT);

  useEffect(() => {
    if (data) {
      setAddress(data.posts.nodes[0].acfcontent.address);
      setTel(data.posts.nodes[0].acfcontent.telFront);
      setTelCall(data.posts.nodes[0].acfcontent.telCall);
      setTelWt(data.posts.nodes[0].acfcontent.telWt);
    }
  }, [data]);

  return (
    <div className="footer">
      <div className="line1">
        <div className="row">
          <div className="col-4 m-col-4 xs-col-4 | col1">
            <span className="italic">Не нашли то, что искали</span>
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col2">
            Свяжитесь с&nbsp;нами и мы постараемся помочь
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col3">
            <div className="form">
              <div className="head">
                <span className="italic">Заполните</span> форму
              </div>
              <FormFooter />
            </div>
          </div>
        </div>
      </div>
      <div className="line2">
        <div className="row">
          <div className="col-4 m-col-4 xs-col-4 | col1">
            <div className="foot-logo"></div>
            <div className="foot-text">
              Продажа грузовых вагонов б/у, поставка новых и б/у запчастей для
              железнодорожных вагонов.
              <div className="copy">©2012 -2022 ООО «Вагон Трейд»</div>
            </div>
            <div className="foot-policy">
              <Link to="/politic">Политика конфиденциальности сайта</Link>
            </div>
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col2">
            <div className="head italic">Услуги</div>
            <ul>
              <li>
                <AnchorLink
                  to="/buy-carriage#vlom"
                  title="Вагоны на металлолом"
                >
                  Вагоны на металлолом
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  to="/buy-carriage#vrazdelku"
                  title="Вагоны на металлолом"
                >
                  Вагоны в разделку
                </AnchorLink>
              </li>
              <li>
                <Link to="/sale-carriage">Продажа б/у вагонов</Link>
              </li>
              <li>
                <Link to="/sale-parts">Продажа запчастей</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 m-col-4 xs-col-4 | col3">
            <div className="head italic">Контакты</div>
            <a href={"tel:" + telCall} className="phone">
              {tel}
            </a>
            <div className="foot-btn">
              <button onClick={() => clickHandler()} className="btn-wt">
                <span className="ico ico-left ico-wt"></span>
                Написать в WhatsApp
              </button>
            </div>
            <div className="foot-address">{address}</div>
            <div className="foot-version">Версия 1.9</div>
          </div>
        </div>
      </div>
      {value && value[0] !== undefined && value[0].length > 0 ? (
        <div className="fixed_block">
          <Link to="/cart">
            Оформить заказ <span>{value[0].length}</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
