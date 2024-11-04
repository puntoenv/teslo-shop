import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ValidCategory } from "@/interfaces";

interface Props {
  params: Promise<{
    id: ValidCategory;
  }>;
}

const seedProducts = initialData.products;
const LABELS: Record<ValidCategory, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "todos",
} as const;

export default async function Category(props: Props) {
  const { id } = await props.params;
  const products = seedProducts.filter(({ gender }) => gender === id);
  const gender = LABELS[id];

  if (gender === undefined) {
    notFound();
  }

  return (
    <div>
      <Title
        title="Tienda"
        subtitle={`Articulos para ${gender}`}
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
}
