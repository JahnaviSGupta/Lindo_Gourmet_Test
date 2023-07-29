
import productsData from "../../../ProductsData";
import DashBuyAgainCard from "./DashBuyAgainCard";



function DashPartThree() {
  return (
    <div class="homeOne row">
    {productsData.map(productItem =>(
      <DashBuyAgainCard
            key={productItem.key}
            title = {productItem.title}
            picture = {productItem.picture.path}
            description = {productItem.description}
         
      />
    ))}
    </div>
  );
}

export default DashPartThree;