import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavigationDetails } from '../src/screens/Navigation/NavigationDetails';
 
export default function Navigation() {
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
  return <NavigationDetails products={posts} />
}