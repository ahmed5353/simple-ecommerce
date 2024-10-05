import CartOutline from '@/assets/icons/CartOutline';
import logo from '../../public/logo.webp';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useState } from 'react';

export default function Header() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [viewCart, setViewCart] = useState(false);

  return (
    <div className="px-6 py-3 flex justify-between items-center bg-gray-300 ">
      <img src={logo} alt="logo" width="40" height="40" />

      {/* Cart iocn */}
      <div
        className="relative cursor-pointer"
        onClick={() => setViewCart((state) => !state)}
      >
        <CartOutline />
        <span className="absolute -top-1 -right-2 text-sm text-white bg-red-600 rounded-full px-2">
          {cartItems.length}
        </span>
        {/* Modal or dropdown for cart items */}
        {viewCart && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-md p-4 rounded-lg">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
