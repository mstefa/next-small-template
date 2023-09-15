import { useEffect, useState } from 'react';
import { retrieveItems } from '../repository/ProductsRepository';
import { ItemType } from '../types/ProductTypes';

export const useItems = () => {
  const [items, setItems] = useState([] as ItemType[]);

  useEffect(() => {
    retrieveItems()
      .then((items) => {
        setItems(items);
      })
      .catch((error) => console.error(error));
  }, []);

  return {
    items,
  };
};
