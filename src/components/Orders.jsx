import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-backend-1j54.onrender.com/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, idx) => {
              return (
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td>{order.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
