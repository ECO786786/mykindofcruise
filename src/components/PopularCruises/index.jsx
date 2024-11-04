"use client";
import DateComponent from "../Date";
import "./index.css";
import { useEffect, useState } from "react";

const PopularCruises = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCruises = async () => {
      try {
        const res = await fetch("https://jjzl6.wiremockapi.cloud/cruises");
        const jsonData = await res.json();
        if (res.status === 200) {
          setData(jsonData);
        } else {
          console.log("Error:", res.status);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getCruises();
  }, []);

  return (
    <>
      <h2 className="cruises-h2">Popular Cruises</h2>
      <section className="card-container-cruises">
        {data.map((item, index) => (
          <div className="card-cruises" key={index}>
            {item.shipImage !== "https:undefined" && (
              <img
                className="card-cruises-img"
                src={item.shipImage}
                alt={item.name}
              />
            )}
            <div className="card-content-cruises">
              <p>
                {item.nights} nights {item.name}
              </p>
              <p className="lower-weight">{item.cruiseLineName}</p>
              <DateComponent isoDate={item.sailDate} />
              <p className="higher-weight">
                <span>from</span> {item.startPort}
              </p>
              <p>£{item.price}</p>
            </div>
            <img
              id="cruise-logo"
              style={{ background: item.iconBackgroundColor }}
              src={item.iconOverlay}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default PopularCruises;
