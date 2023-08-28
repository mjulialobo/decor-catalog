export type Product = {
  name: string;
  description: string;
  id: string;
  height: number;
  width: number;
  weight: number;
  depth: number;
  category: string;
  type: string;
  createdAt: number;
  color: string;
  image: string[];
};

export type ProductCardProps = {
  product: Product;
  key: number;
};
