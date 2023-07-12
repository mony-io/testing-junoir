import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  if (!open) return null;

  const { countryName } = useParams();

  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const { data: response } = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}`
        );

        setCountry(response);
        console.log(response);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    getCountryByName();
  }, [countryName]);

  return (
    <div className="m-20">
      <Link to="/">
        <button className="border p-2 mb-9 px-6">Back</button>
      </Link>

      {!isLoading && !error && <h4>Loading........</h4>}
      {error && !isLoading && { error }}

      {country?.map((country, index) => (
        <div className="flex justify-between flex-col lg:flex-row" key={index}>
          <div className="mr-20">
            <img
              src={country.flags.png}
              alt="image"
              className="lg:w-[400px] lg:h-[200px] object-cover border"
            />
          </div>

          <div className="w-full h-[300px] lg:mt-0 mt-12">
            <h3 className="font-bold">{country.name.official}</h3>
            <p className="mt-1 text-sm">
              <span className="font-bold">cca2: </span>
              {country.cca2}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">cca3: </span>
              {country.cca3}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Population: </span>
              {country.population}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Status:</span> {country.status}
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Continents:</span>
              {country.continents}
            </p>
            <p className="text-sm mt-1">
              <span className="font-bold">Timezones:</span> {country.timezones}
            </p>
            <p className="text-sm mt-1">
              <span className="font-bold">Translations: </span>
              {country.translations.ara.common}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryInfo;
