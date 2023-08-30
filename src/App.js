import { useState } from "react";
import Price from "./components/price-main/price";
import Service from "./components/service/service";
import Btn from "./components/reset-btn/reset";
import "./main.css";

export default function App() {
  const [pay, setPay] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  // const halfPay = pay * 2;

  // const mainService = (serviceValue) => {
  //   if (serviceValue === "0") return 0;
  //   if (serviceValue === "5") return Math.round((5 / halfPay) * 100);
  //   if (serviceValue === "10") return Math.round((10 / halfPay) * 100);
  //   if (serviceValue === "20") return Math.round((20 / halfPay) * 100);
  // };

  // if (mainService(service1) && !mainService(service2)) return mainService(service1);
  // if (!mainService(service1) && mainService(service2)) return mainService(service2);
  // if (mainService(service1) && mainService(service2)) return mainService(service1) + mainService(service2);

  const totatlSevicePrice = Math.round(pay * ((service1 + service2) / 2 / 100));

  return (
    <div>
      <Price setPay={setPay} pay={pay} />
      <Service setService={setService1} service={service1} text={"How did you like the service"} />
      <Service setService={setService2} service={service2} text={"How did your friend like the service"} />
      {pay > 0 && (
        <>
          <h2>
            You pay ${pay + (totatlSevicePrice > 0 && pay > 0 ? totatlSevicePrice : " ")} {totatlSevicePrice > 0 && pay > 0 ? `($${pay} + $${totatlSevicePrice} tip)` : ""}
          </h2>
          <Btn setPay={setPay} setService1={setService1} setService2={setService2} />{" "}
        </>
      )}
    </div>
  );
}
