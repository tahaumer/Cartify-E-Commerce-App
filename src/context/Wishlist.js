import { useState, useContext, createContext, useEffect } from "react";

const WishContext = createContext();

const WishProvider = ({ children }) => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    let existingWishItem = localStorage.getItem('wish');
    if (existingWishItem) {
      setWish(JSON.parse(existingWishItem));
    }
  }, []);

  const toggleWish = (product) => {
    // Check if the product is already in the wishlist
    const isProductInWishlist = wish.some((p) => p._id === product._id);

    if (isProductInWishlist) {
      // Remove the product from the wishlist
      const updatedWish = wish.filter((p) => p._id !== product._id);
      setWish(updatedWish);
      localStorage.setItem('wish', JSON.stringify(updatedWish));
    } else {
      // Add the product to the wishlist
      const updatedWish = [...wish, product];
      setWish(updatedWish);
      localStorage.setItem('wish', JSON.stringify(updatedWish));
    }
  };

  return (
    <WishContext.Provider value={{ wish, toggleWish }}>
      {children}
    </WishContext.Provider>
  );
};

const useWish = () => useContext(WishContext);

export { useWish, WishProvider };
