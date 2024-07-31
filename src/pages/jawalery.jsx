import { Fragment, useEffect, useState } from "react";
import { getJewelery } from "../Api/api";
import CardProduct from "../components/Fragments/CardProduct";

const jawalery = () => {
  const [jawalery, setJawalery] = useState([]);
  useEffect(() => {
    getJewelery((data) => {
      setJawalery(data);
    });
  });

  return (
    <Fragment>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jawalery.map((data) => (
          <CardProduct key={data.id}>
            <CardProduct.CardImages image={data.image}></CardProduct.CardImages>
            <CardProduct.CardText
              title={data.title}
              price={data.price}
              count={data.rating.count}
              rate={data.rating.rate}
            >
              {data.description.substring(0, 100)}...
            </CardProduct.CardText>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default jawalery;
