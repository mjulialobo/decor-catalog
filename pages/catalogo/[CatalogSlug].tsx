import axios from "axios";
import { useEffect, useState } from "react";
import { NavigationDetails } from "../../src/screens/Navigation/NavigationDetails";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const query = router.query.CatalogSlug;
  const [posts, setPosts] = useState([]);

  const products = posts.filter((product) => {
    const productCategory = product.category
      ? product.category.toLowerCase()
      : "";

    return productCategory === query;
  });

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
  return <NavigationDetails products={products} />;
}
