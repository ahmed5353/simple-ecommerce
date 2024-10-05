import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/apiProducts';
import { Product } from '@/types/Product';

export default function useProducts() {
  const { data, isLoading, error } = useQuery<{ data: Product[] }>({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { data, isLoading, error };
}
