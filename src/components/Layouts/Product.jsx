import CardProduct from "../Fragments/CardProduct";
import Button from "../elements/button/Button";

const Product = (props) => {
  const { products, handleClick } = props;
  return (
    <div className="container mt-10">
      <div className="flex justify-between poppins-bold">
        <h2>Recently</h2>
        <h3>Browse all</h3>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {Object.values(
          products.map((data) => (
            <CardProduct key={data.id}>
              <CardProduct.CardImages
                image={data.image}
              ></CardProduct.CardImages>
              <CardProduct.CardText
                title={data.title.substring(0, 10)}
                price={data.price}
                count={data.rating.count}
                rate={data.rating.rate}
              >
                {data.description.substring(0, 50)}...
              </CardProduct.CardText>
              <Button
                name="Add to cart"
                classname="mx-auto block"
                handleClick={() => handleClick(data.id)}
              />
            </CardProduct>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
