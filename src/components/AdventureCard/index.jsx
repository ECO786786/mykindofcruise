"use client";
import "./index.css";
import { useEffect, useState } from "react";

const AdventureCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await fetch("https://jjzl6.wiremockapi.cloud/adventures");
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
    getImages();
  }, []);
  return (
    <>
      <h2>My Adventure</h2>
      <section className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            {item.image !== "https:undefined" && (
              <img src={item.image} alt={item.name} />
            )}
            <div className="card-content">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AdventureCard;
