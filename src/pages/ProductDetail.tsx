import { ProductDetailCard } from '@/components/productDetailCard';
import useGetProduct from '@/features/products/useGetProduct';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProduct(Number(id));

  return (
    <div>
      {error && <p>Error loading product.</p>}
      <h1 className="text-3xl font-bold mb-11">Product Details</h1>
      {isLoading && (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="black"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      )}
      {!isLoading && !error && product && (
        <ProductDetailCard
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          imageUrl={product.image}
        />
      )}
    </div>
  );
}
