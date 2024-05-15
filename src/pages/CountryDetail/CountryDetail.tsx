import { useParams } from "react-router";
import s from "./CountryDetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../../models/models";

export function CountryDetail() {
  const { id } = useParams();

  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get<Country>(
          `https://restcountries.com/v3.1/name/${id}`
        );
        setCountry(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div className={s.container}>
      <h2 className={s.title}>{(country as Country)?.name?.common}</h2>
    </div>
  );
}
