import { Button } from '@/components/ui/button';
import { IProduct } from '@/types';
import Link from 'next/link';
import CountDown from './CountDown';
import SCContainer from '@/components/ui/core/SCContainer';
import ProductCard from '@/components/ui/core/ProductCard';
import { getFlashSaleProducts } from '@/services/FlashSale';

const FlashSale = async () => {
  const { data: products } = await getFlashSaleProducts();

  return (
    <div className=" bg-white bg-opacity-50 pt-6 pb-8">
      <SCContainer>
        <div className="flex items-center justify-between gap-2 lg:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              Flash Sale
            </h2>
            <CountDown />
          </div>

          <Link href="/rentals">
            <Button
              variant="outline"
              className="rounded-full border-primary bg-primary text-secondary hover:bg-secondary/10 hover:text-primary"
            >
              All Collections
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {products?.slice(0, 4)?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </SCContainer>
    </div>
  );
};

export default FlashSale;
