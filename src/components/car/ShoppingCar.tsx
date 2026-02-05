import { useMemo, useState } from "react";

interface Item {
  id: number;
  name: string;
  price: number;
}
export const ShoppingCar = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Manzana", price: 10.5 },
    { id: 2, name: "Banana", price: 5 },
    { id: 3, name: "Cereza", price: 15 },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  const totalCost = useMemo(
    () =>
      items.reduce((total, item) => {
        console.log("okkkk");
        return total + item.price;
      }, 0),
    [items],
  );
  const discountedTotal = useMemo(() => {
    console.log("recalculando discount");
    return totalCost * discount;
  }, [totalCost, discount]);

  const addItem = () => {
    const item = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    };
    console.log(totalCost);
    setItems([...items, item]);
  };

  return (
    <div>
      <h2>mi tienda </h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} <span> precio - ${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p>Costo total: ${totalCost.toFixed(2)}</p>
      <p>
        Descuento:
        <input
          type="number"
          onChange={(e) => setDiscount(parseFloat(e.target.value) / 100 || 0)}
        />
        %
      </p>
      <p>Precio final: ${(totalCost - discountedTotal).toFixed(2)}</p>
      <button onClick={addItem}>Agregar producto</button>
    </div>
  );
};
