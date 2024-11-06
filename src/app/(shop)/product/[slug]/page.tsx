import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { ValidCategory } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: ValidCategory;
  }>;
}

const { products } = initialData;

export default async function Product({ params }: Props) {
  const { slug } = await params;
  const product = products.find((product) => product.slug === slug);
  if (product === undefined) notFound();
  const { title, price, description, images } = product;

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          className="block md:hidden"
          title={title}
          images={images}
        />

        {/* Desktop Slideshow */}
        <ProductSlideshow
          className="hidden md:block"
          title={title}
          images={images}
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {title}
        </h1>
        <p className="text-lg mb-5">${price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripción */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}
