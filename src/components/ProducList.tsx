import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import Image from "next/image"; // Perbaikan impor Image
import { products } from "@wix/stores"; // Pastikan ini memiliki tipe yang benar
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
    limit?: number;
    searchParams?: any;
}) => {
  try {
    console.log("Fetching product data...");
    const wixClient = await wixClientServer();
    const res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit || PRODUCT_PER_PAGE)
      .find();

    console.log("Fetched products:", res.items); // Periksa apakah data berhasil diambil

    if (!res.items.length) {
      console.error("No products found in the response.");
    }

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {res.items.map((product: products.Product) => (
          <Link
            href={`/${product.slug}`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || "Product Image"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              {product.media?.items && product.media.items[1]?.image?.url && (
                <Image
                  src={product.media.items[1].image.url}
                  alt={product.name || "Additional Image"}
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">
                Rp{product.price?.price?.toLocaleString("id-ID")}
              </span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    product.additionalInfoSections.find(
                      (section: any) => section.title === "shortDesc"
                    )?.description || ""
                  ),
                }}
              />
            )}
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error occurred while loading products.</div>;
  }
};


export default ProductList;
