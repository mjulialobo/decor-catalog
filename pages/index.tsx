import { useEffect, useState } from "react";
import axios from "axios";
import { HomeDetails } from "../src/screens/Home/HomeDetails";
import { Product } from "../src/components/ProductCard/types";

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
      <HomeDetails products={posts}/>
    </>
  );
}
