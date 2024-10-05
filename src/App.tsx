import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// const Products = lazy(() => import('@/pages/Products'));
// const ProductDetail = lazy(() => import('@/pages/ProductDetail'));

// Lazy loading the components
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* Wrapping routes with Suspense */}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Lazy loaded routes */}
            <Route index element={<Navigate replace to="products" />} />
            <Route path="products" index element={<Products />} />
            <Route path="productDetail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
