import { Product } from '@/types/Product';

const useProductsByCategory = (products: Product[]) => {
  if (!Array.isArray(products) || products.length === 0) return {};
  return products.reduce((acc: Record<string, Product[]>, product: Product) => {
    const { category } = product;
    if (category) {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
    }
    return acc;
  }, {});
};
export default useProductsByCategory;
