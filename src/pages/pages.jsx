import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import Header from "../components/Layouts/Header";
import Product from "../components/Layouts/Product";
import { getAllProduct } from "../Api/api";
import Popup from "../components/Layouts/Popup";
import OurHistory from "../components/Layouts/OurHistory";
import { Footer } from "../components/Layouts/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Pages() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); // Inisialisasi dengan 0
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);

  // Ambil data dari API
  useEffect(() => {
    getAllProduct((data) => {
      setProducts(data);
    });

    // Ambil jumlah item dari localStorage saat komponen dimount
    const storedCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    setCart(storedCart);
    setCount(storedCart.reduce((total, item) => total + item.quantity, 0));
  }, []);

  const handleClick = (id) => {
    let ids = JSON.parse(localStorage.getItem("id")) || [];
    if (!ids.includes(id)) {
      ids.push(id);
      localStorage.setItem("id", JSON.stringify(ids));
    }
    console.log(ids);
    // Ambil item yang ada di localStorage
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    // Cek apakah item sudah ada di cart
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      // Jika item sudah ada, tambahkan quantity
      cart[itemIndex].quantity += 1;
    } else {
      // Jika item belum ada, tambahkan item baru
      cart.push({ id, quantity: 1 });
    }
    // Simpan kembali ke localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    // Perbarui state cart dan count berdasarkan panjang array cart
    setCart(cart);
    setCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  const handlePopUp = () => {
    setOrderPopup(!orderPopup);
  };

  let settingsHistory = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 2,
    slidesToShow: 3,
    //nanti diganti true ribet anjir
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  let settingsHeader = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    //nanti diganti true ribet anjir
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <Fragment>
      <Navbar
        count={JSON.parse(localStorage.getItem("shoppingCart"))?.length || 0}
        handlePopUp={handlePopUp}
      />
      <Header settings2={settingsHeader} />
      <Product products={products} handleClick={handleClick} />
      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        cart={cart}
        products={products}
      />
      <OurHistory settings={settingsHistory} />
      <Footer />
    </Fragment>
  );
}

export default Pages;
