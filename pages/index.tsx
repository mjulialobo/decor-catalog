import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import axios from "axios";
import { ProductCard } from "../components/ProductCard/ProductCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://64ebb7dee51e1e82c5779ea8.mockapi.io/api/decor/Products")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Header />

      {posts.map(
        (product, index) =>
          index <= 4 && <ProductCard key={product.id} product={product} />
      )}
    </>
  );
}
