import { Item } from '@/modules/products/components/Item';
import { retrieveProducts } from '@/modules/products/repository/ProductsRepository';
import Container from '@/modules/shared/components/Container';

export default async function Store() {
  const products = await retrieveProducts();

  return (
    <Container>
      {products.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Container>
  );
}
