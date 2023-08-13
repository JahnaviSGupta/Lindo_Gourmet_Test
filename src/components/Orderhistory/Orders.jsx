import React from "react";
import OrdersTable from "./OrdersTable";

const orders = [
  {
    id: 1,
    orderName: "Order 1",
    detail: "Some details for Order 1",
    createDate: "2023/08/12",
    price: 100.0,
  },
  {
    id: 2,
    orderName: "Order 2",
    detail: "Some details for Order 2",
    createDate: "2023/08/12",
    price: 100.0,
  },
  {
    id: 3,
    orderName: "Order 3",
    detail: "Some details for Order 3",
    createDate: "2023/08/12",
    price: 100.0,
  },
];

export default function Orders({ cn }) {
  return <OrdersTable className={cn} orders={orders} />;
}
