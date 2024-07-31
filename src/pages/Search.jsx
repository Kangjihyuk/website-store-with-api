import { Fragment, useEffect, useState } from "react";
import { getAllProduct } from "../Api/api";
import CardProduct from "../components/Fragments/CardProduct";
import Input from "../components/elements/Input/Input";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  useEffect(() => {
    getAllProduct((item) => {
      console.log(item);
      setSearch(item);
      setFilterSearch(item);
    });
  }, []);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    let filter = search.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFilterSearch(filter);
  };

  return (
    <Fragment>
      <div className="flex justify-center translate-y-3">
        <Input handleSearch={handleSearch} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterSearch.length > 0 ? (
          filterSearch.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.CardImages
                image={item.image}
              ></CardProduct.CardImages>
              <CardProduct.CardText
                title={item.title.substring(0, 10)}
                price={item.price}
                count={item.rating.count}
                rate={item.rating.rate}
              >
                {item.description.substring(0, 50)}...
              </CardProduct.CardText>
            </CardProduct>
          ))
        ) : (
          <div>data tidak ditemukan</div>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
