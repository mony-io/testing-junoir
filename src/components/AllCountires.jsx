import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchCountry from './SearchCountry';
import Sorting from './Sorting';
import Pagination from './Pagination';

function AllCountires() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLaoing] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const getAllCountries = async () => {
      setIsLaoing(true);
      try {
        const { data: response } = await axios.get(
          'https://restcountries.com/v3.1/all'
        );

        setCountries(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
      }
      setIsLaoing(false);
    };
    getAllCountries();
  }, []);

  const getCountryByName = async (countryName) => {
    try {
      const { data: response } = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );

      setCountries(response);
      console.log(response);
    } catch (error) {
      setIsLaoing(false);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const { data: response } = await axios.get(
        `https://restcountries.com/v3.1/region/${regionName}`
      );

      setCountries(response);
      console.log(response);
    } catch (error) {
      setError(error.message);
      setIsLaoing(false);
    }
  };

  // somthing wrong with this
  const nativeName = countries.map((country) => country.name.nativeName);
  // console.log(nativeName[0].ara.official);

  return (
    <div>
      <div className="flex items-center justify-between px-9 md:flex-row flex-col">
        <SearchCountry onSearch={getCountryByName} />
        <Sorting onSelect={getCountryByRegion} />
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-2 mx-4 h-[660px] overflow-auto">
        {isLoading && !error && (
          <h3 className="col-span-4 text-center mt-12">Loading...</h3>
        )}
        {error && !isLoading && (
          <h3 className="col-span-4 text-center mt-12">{error}</h3>
        )}

        {currentPosts?.map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between my-6">
            <div className="bg-[#f1f1f1]  p-6 h-[400px] w-[400px] rounded-sm shadow-sm">
              <img
                className="w-[300px] h-[150px] object-cover"
                src={country.flags.png}
                alt="image"
              />
              <div className="my-3 w-full h-[300px]">
                <Link to={`/country/${country.name.common}`}>
                  <h3 className="font-bold">{country.name.official}</h3>
                </Link>
                <p className="mt-1 text-sm">{country.cca2}</p>
                <p className="mt-1 text-sm">{country.cca3}</p>
                <p className="mt-1 text-sm">
                  Native Name: {nativeName[0].ara?.official}
                </p>
                <p className="mt-1 text-sm">{country.altSpellings}</p>
                <p className="text-sm">{country.idd.root}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-9 mt-6">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={countries.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default AllCountires;
