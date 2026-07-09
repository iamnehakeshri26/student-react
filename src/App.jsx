import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {

    fetch("/src/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });

  }, []);

  return (
    <div style={{ padding: "30px", background: "#f5f5f5", minHeight: "100vh" }}>

      <h1 style={{ textAlign: "center", color: "#0d6efd" }}>
        Student Accommodation
      </h1>

      {properties.map((property) => (

        <div
          key={property.id}
          style={{
            background: "#fff",
            padding: "20px",
            margin: "20px auto",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            maxWidth: "700px"
          }}
        >

          <h2>{property.name}</h2>

          <p><b>City:</b> {property.city}</p>

          <p><b>Price:</b> ₹{property.price}/month</p>

          <p><b>Gender:</b> {property.gender}</p>

          <button
            style={{
              background: "#0d6efd",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            View Details
          </button>

        </div>

      ))}

    </div>
  );
}

export default App;