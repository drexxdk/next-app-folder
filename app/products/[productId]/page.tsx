export default async function Product({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  return <div>Product {productId}</div>;
}
