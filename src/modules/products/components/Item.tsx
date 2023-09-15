import { ProductType } from '../types/ProductTypes';
import { Card, CardBody } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

export function Item(item: ProductType) {
  return (
    <Card
      isBlurred
      className="max-w-[400px] border-none bg-background/60 dark:bg-default-100/50 "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={item.imgUrl}
              width="40%"
            />
          </div>
          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">
                  {item.title}
                </h3>
                <p className="text-small text-foreground/80">
                  {item.description}
                </p>
                <h1 className="text-large font-medium mt-2">{item.price}</h1>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
