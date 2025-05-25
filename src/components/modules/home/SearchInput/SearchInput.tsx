"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [houses, setHouses] = useState([]);
 

//   useEffect(() => {
//     const searchProperty = async () => {
//       const { data: houses } = await getSearchedAllListingHouse({ searchTerm: searchQuery });
//       setHouses(houses);
//     };
//     searchProperty();
//   }, [searchQuery]);

  return (
    <div className="relative px-4  md:px-0 max-w-2xl mx-auto">
      <form role="search" className="w-full">
        <Input
          type="search"
          placeholder="Search House..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search house"
          className="rounded-full p-6 outline-0 focus:outline-0 focus-within:outline-none"
        />
      </form>

      {searchQuery && (
        <div className="absolute top-full left-0 right-0 px-4 md:px-0 mt-2 bg-background rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {houses?.length > 0 ? (
            houses?.map((product: IProduct) => (
              <Link href={`/houses/${product?._id}`} key={product._id}>
                <div className="flex items-center gap-5 p-2 hover:bg-accent transition-colors">
                  {/* Image Container */}
                  <div className="w-40 h-20 flex-shrink-0 relative rounded-lg overflow-hidden">
                    <Image
                      src={product.imageUrls[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Card Content */}
                  <Card className="flex-1 hover:bg-transparent">
                    <CardHeader className="pb-1">
                      <h3 className="font-semibold">{product.name}</h3>
                    </CardHeader>
                  </Card>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-2 text-center text-muted-foreground">
              No products found for {searchQuery}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
