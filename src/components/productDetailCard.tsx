'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from '@/components/ui/Image';
import { Product } from '@/types/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';

export function ProductDetailCard({
  id,
  title = 'N/A',
  description = 'N/A',
  price = 0,
  category = 'N/A',
  imageUrl = 'N/A',
}: Product) {
  const dispatch = useDispatch();
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addToCart({ id, title, price: numericPrice, image: imageUrl }));
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <Badge variant="secondary" className="mt-2">
                {category}
              </Badge>
            </div>

            <Separator />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Price</h3>
              <p className="text-2xl font-bold">
                ${price?.toFixed(2) ?? '0.00'}
              </p>
            </div>

            <Button className="w-full h-10 " onClick={handleAddToCartClick}>
              Add to Cart
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Separator className="my-4" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Description</h3>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
