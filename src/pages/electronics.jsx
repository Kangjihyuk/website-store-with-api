import { Fragment, useEffect, useState } from "react";
import { getElectronics } from "../Api/api";
import CardProduct from "../components/Fragments/CardProduct";

const electronics = () => {
  const [electronics, setElectronics] = useState([]);
  useEffect(() => {
    getElectronics((data) => {
      setElectronics(data);
    });
  }, []);

  return (
    <Fragment>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {electronics.map((data) => (
          <CardProduct key={data.id}>
            <CardProduct.CardImages image={data.image}></CardProduct.CardImages>
            <CardProduct.CardText
              title={data.title}
              price={data.price}
              count={data.rating.count}
              rate={data.rating.rate}
            >
              {data.description.substring(0, 130)}
            </CardProduct.CardText>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default electronics;
