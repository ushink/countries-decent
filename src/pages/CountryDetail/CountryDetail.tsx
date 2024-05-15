import { useParams } from "react-router";
import s from "./CountryDetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../../models/models";
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
  }, []);

  if (!country) {
    return (
      <div className="m-sm-3 m-lg-3 d-flex justify-content-center">
        Loading...
      </div>
    );
  }

  console.log(country);
  return (
    <>
      <div className="m-sm-3 m-lg-3 d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={country[0]?.flags.png} />
          <Card.Body>
            <Card.Title>{country[0]?.name?.common}</Card.Title>
            <Card.Text>Capital: {country[0]?.capital}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
