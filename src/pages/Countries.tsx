import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../models/models";
import { ListGroup } from "react-bootstrap";

export function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="m-sm-3 m-lg-3 d-flex justify-content-center flex-direction-column">
      <ListGroup>
        <h1 className="display-4 text-center my-5 text-danger">Countries</h1>

        {countries.map((country) => (
          <ListGroup.Item
            key={Math.random()}
            action
            href={`/country/${country.name.common}`}
          >
            {(country as Country)?.name.common}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
