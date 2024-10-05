import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from '@/components/ui/Image';
import { addToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

interface ProductCardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number | string;

  onClick: () => void;
}

export default function ProductCard({
  id,
  imageUrl,
  title,
  price,
  onClick,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  const displayPrice = !isNaN(numericPrice) ? numericPrice.toFixed(2) : '0.00';

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addToCart({ id, title, price: numericPrice, image: imageUrl }));
  };
  return (
    <Card
      className="w-full max-w-sm overflow-hidden flex flex-col justify-between cursor-pointer"
      onClick={onClick}
    >
      <div className="relative py-4 group ">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover mx-auto transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          width="40%"
          height="auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold line-clamp-2 mb-2">{title}</h2>
          <p className="text-lg font-bold text-primary">${displayPrice}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button onClick={handleAddToCartClick} className="w-full">
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
