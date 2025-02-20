import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Termekek = () => {
  const [termekek, setTermekek] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/products")
      .then((res) => res.json())
      .then((data) => {
        setTermekek(data);
        setLoading(false);
      })
      .catch((error) => console.error("Hiba a fetch közben:", error));
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Betöltés...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center display-4 mb-4 text-primary">Termékek</h1>
      <div className="row">
        {termekek.map((termek) => (
          <div key={termek.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={termek.image} className="card-img-top p-3" alt={termek.title} style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title text-center">{termek.title}</h5>
                <p className="card-text">
                  <strong>Ár:</strong> ${termek.price}
                </p>
                <p className="card-text">
                  <strong>Leírás:</strong> {termek.description.substring(0, 100)}...
                </p>
                <p className="card-text">
                  <strong>Kategória:</strong> {termek.category}
                </p>
                <p className="card-text">
                  <strong>Értékelés:</strong>  {termek.rating.rate} ({termek.rating.count} értékelés)
                </p>
                <a href="#" className="btn btn-primary d-block">
                  Megnézem 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Termekek;
