export default function AddToCart() {
  function handleAdd(x) {
    console.log(x);
    localStorage.setItem("name", x);
    // name: ["green tea", "oolong tea"]
  }

  return (
    <div>
      <button onClick={() => handleAdd("greenTea")}>Add to cart (GT)</button>
      <button onClick={() => handleAdd("oolongTea")}>Add to cart (OT)</button>
    </div>
  );
}
