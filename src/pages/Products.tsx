import ProductCard from '@/features/products/ProductCard';
import useProducts from '@/features/products/useProducts';
import useScrollToCategory from '@/features/products/useScrollToCategory';
import useProductsByCategory from '@/hooks/useProductsByCategory';
import { Product } from '@/types/Product';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { useRef } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const { data: products, isLoading, error } = useProducts();
  const productsByCategory = useProductsByCategory(products?.data ?? []);

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Smooth scroll function
  const scrollToCategory = useScrollToCategory(categoryRefs);
  // console.log(categoryRefs, '=>categoryRefs');

  const navigate = useNavigate();

  function handleCardClick(id: number) {
    navigate(`/productDetail/${id}`);
  }

  return (
    <div>
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
      {error && <p>Error loading products.</p>}

      <div className="flex flex-col md:flex-row lg:flex-row space-x-4 mb-14 gap-4 items-center ">
        {/* Tabs for each category */}
        {productsByCategory &&
          Object.keys(productsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className="text-lg font-bold text-black hover:underline"
            >
              {capitalizeFirstLetter(category)}
            </button>
          ))}
      </div>

      {productsByCategory &&
        Object.keys(productsByCategory).map((category) => (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            className="mb-8"
          >
            {/* Category title */}
            <h2 className="text-2xl font-bold my-4 ms-10 md:ms-0">
              {category.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ms-10 md:ms-0 ">
              {productsByCategory[category].map((product: Product) => (
                <ProductCard
                  id={Number(product.id)}
                  key={product.id}
                  imageUrl={product.image ?? 'N/A'}
                  title={product.title ?? 'N/A'}
                  price={product.price ?? 'N/A'}
                  onClick={() => handleCardClick(Number(product.id))}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
