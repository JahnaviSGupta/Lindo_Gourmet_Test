import Layout from "../Layout";
import JsonToReact from "./jsonToReact";

export default function GenericProduct() {
  // This product data will be pulled from the server
  // Axios Calls
  const productData1 = {
    element: "T-Shirt",
    elements: [
      {
        element: "Setup",
        label: "Setup fee",
        price: "100.0",
      },
      {
        element: "Quantity",
        label: "1 to 9",
        price: "1.5",
      },
      {
        element: "Quantity",
        label: "10 to 19",
        price: "1.4",
      },
      {
        element: "Quantity",
        label: "20+",
        price: "1.2",
      },
      {
        element: "Integer",
        name: "size",
        label: "Size",
        minimum: "0",
        maximum: "10",
      },
      {
        element: "Select",
        name: "fabric",
        label: "Fabric",
        elements: [
          {
            element: "Choice",
            name: "cotton",
            label: "Cotton",
          },
          {
            element: "Choice",
            name: "wool",
            label: "Wool",
          },
        ],
      },
      {
        element: "Select",
        name: "sleevestyle",
        label: "Sleeve Style",
        elements: [
          {
            element: "Choice",
            name: "short",
            label: "Short",
          },
          {
            element: "Choice",
            name: "long",
            label: "Long",
          },
        ],
      },
      {
        element: "Boolean",
        name: "collar",
        label: "Collar",
      },
      {
        element: "File",
        name: "design",
        label: "Design",
      },
    ],
  };

  const productData2 = {
    element: "Laptop",
    elements: [
      {
        element: "Setup",
        label: "Setup fee",
        price: "150.0",
      },
      {
        element: "Quantity",
        label: "1 to 5",
        price: "800.0",
      },
      {
        element: "Quantity",
        label: "6 to 10",
        price: "750.0",
      },
      {
        element: "Quantity",
        label: "11+",
        price: "700.0",
      },
      {
        element: "Select",
        name: "brand",
        label: "Brand",
        elements: [
          {
            element: "Choice",
            name: "hp",
            label: "HP",
          },
          {
            element: "Choice",
            name: "dell",
            label: "Dell",
          },
          {
            element: "Choice",
            name: "lenovo",
            label: "Lenovo",
          },
          {
            element: "Choice",
            name: "asus",
            label: "Asus",
          },
        ],
      },
      {
        element: "Select",
        name: "processor",
        label: "Processor",
        elements: [
          {
            element: "Choice",
            name: "i3",
            label: "Intel Core i3",
          },
          {
            element: "Choice",
            name: "i5",
            label: "Intel Core i5",
          },
          {
            element: "Choice",
            name: "i7",
            label: "Intel Core i7",
          },
        ],
      },
      {
        element: "Select",
        name: "storage",
        label: "Storage",
        elements: [
          {
            element: "Choice",
            name: "256gb",
            label: "256GB SSD",
          },
          {
            element: "Choice",
            name: "512gb",
            label: "512GB SSD",
          },
          {
            element: "Choice",
            name: "1tb",
            label: "1TB HDD",
          },
        ],
      },
      {
        element: "Boolean",
        name: "graphics",
        label: "Dedicated Graphics",
      },
    ],
  };

  const productData3 = {
    element: "Coffee Mug",
    elements: [
      {
        element: "Setup",
        label: "Setup fee",
        price: "20.0",
      },
      {
        element: "Quantity",
        label: "1 to 4",
        price: "8.0",
      },
      {
        element: "Quantity",
        label: "5 to 9",
        price: "7.0",
      },
      {
        element: "Quantity",
        label: "10+",
        price: "6.0",
      },
      {
        element: "Select",
        name: "color",
        label: "Color",
        elements: [
          {
            element: "Choice",
            name: "white",
            label: "White",
          },
          {
            element: "Choice",
            name: "black",
            label: "Black",
          },
          {
            element: "Choice",
            name: "blue",
            label: "Blue",
          },
        ],
      },
      {
        element: "Select",
        name: "design",
        label: "Design",
        elements: [
          {
            element: "Choice",
            name: "logo",
            label: "Company Logo",
          },
          {
            element: "Choice",
            name: "custom",
            label: "Custom Design",
          },
        ],
      },
      {
        element: "File",
        name: "customdesign",
        label: "Custom Design File",
      },
    ],
  };

  const productData4 = {
    element: "Sunglasses",
    elements: [
      {
        element: "Setup",
        label: "Setup fee",
        price: "25.0",
      },
      {
        element: "Quantity",
        label: "1 to 3",
        price: "40.0",
      },
      {
        element: "Quantity",
        label: "4 to 7",
        price: "35.0",
      },
      {
        element: "Quantity",
        label: "8+",
        price: "30.0",
      },
      {
        element: "Select",
        name: "style",
        label: "Style",
        elements: [
          {
            element: "Choice",
            name: "aviator",
            label: "Aviator",
          },
          {
            element: "Choice",
            name: "wayfarer",
            label: "Wayfarer",
          },
          {
            element: "Choice",
            name: "round",
            label: "Round",
          },
        ],
      },
      {
        element: "Select",
        name: "framecolor",
        label: "Frame Color",
        elements: [
          {
            element: "Choice",
            name: "black",
            label: "Black",
          },
          {
            element: "Choice",
            name: "brown",
            label: "Brown",
          },
          {
            element: "Choice",
            name: "gold",
            label: "Gold",
          },
          {
            element: "Choice",
            name: "silver",
            label: "Silver",
          },
        ],
      },
      {
        element: "Select",
        name: "lenscolor",
        label: "Lens Color",
        elements: [
          {
            element: "Choice",
            name: "gray",
            label: "Gray",
          },
          {
            element: "Choice",
            name: "green",
            label: "Green",
          },
          {
            element: "Choice",
            name: "brown",
            label: "Brown",
          },
        ],
      },
      {
        element: "Boolean",
        name: "polarized",
        label: "Polarized Lenses",
      },
    ],
  };

  return (
    <Layout>
      <div className="product-view-main-wrapper bg-white pt-[30px] w-full">
        <div className="breadcrumb-wrapper w-full ">
          <div className="container-x mx-auto">
            <div className="w-full h-full">
              <JsonToReact jsonData={productData1} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}