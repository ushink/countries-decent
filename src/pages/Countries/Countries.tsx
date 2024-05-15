import { useEffect, useState } from "react";
// import s from "./Countries.module.css";
import axios from "axios";
import { Country } from "../../models/models";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Страны</h1>
      <ul>
        {countries.map((country) => (
          <li key={Math.random()}>
            <Link to={`/country/${country.name.common}`}>
              {(country as Country)?.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
