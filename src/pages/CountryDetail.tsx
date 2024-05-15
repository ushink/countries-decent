import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../models/models";
import { Card } from "react-bootstrap";

export function CountryDetail() {
  const { id } = useParams();

  const [country, setCountry] = useState<Country[] | undefined>();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${id}`
        );
        setCountry(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchCountry();
  }, [id]);

  if (!country) {
    return (
      <div className="m-sm-3 m-lg-3 d-flex justify-content-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="m-sm-3 m-lg-3 d-flex justify-content-center">
        <Card
          style={{
            width: "20rem",
            backgroundColor: "#e9e9e9",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card.Img
            style={{ maxWidth: "18rem", margin: "10px" }}
            variant="top"
            src={country[0]?.flags.png}
          />
          <Card.Body>
            <Card.Title>{country[0]?.name?.common}</Card.Title>
            <Card.Text>Capital: {country[0]?.capital}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
