export default function AddToCart(props) {
  function handleAdd(item) {
    var items = JSON.parse(localStorage.getItem("items") || "[]");
    console.log(items);

    // returns if object is found in array
    const isFound = items.some((el) => {
      return el.id === item.id;
    });

    // if found, update quantity += 1
    if (isFound) {
      const newItems = items.map((obj) => {
        if (obj.name === item.name) {
          return { ...obj, quantity: parseInt(obj.quantity) + 1 };
        }
        return obj;
      });

      items = newItems;
    }
    // if not found, then push item to array
    else {
      items.push(item);
    }

    localStorage.setItem("items", JSON.stringify(items));
    window.location.reload();
  }

  return (
    <div>
      <button
        onClick={() =>
          handleAdd({ id: 0, name: "Green Tea", price: 1, quantity: 1 })
        }
      >
        Add to cart (GT)
      </button>
      <button
        onClick={() =>
          handleAdd({ id: 1, name: "Black Tea", price: 1.5, quantity: 1 })
        }
      >
        Add to cart (BT)
      </button>
    </div>
  );
}
