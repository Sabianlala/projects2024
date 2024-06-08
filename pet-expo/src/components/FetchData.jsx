import React, { useState, useEffect } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

const FetchData = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  async function fetchData() {
    const url = `https://freetestapi.com/api/v1/${props.type}`;
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); 
      setData(result); 
      setFilteredData(result); 
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:" + error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); 

  const handleSearch = (query) => {
    const filtered = data.filter((type) =>
      type.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="container mt-5">
      <SearchBar onSearch={handleSearch} />
        <>
          {filteredData.length > 0 ? (
            <div className="row">
              {filteredData.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  origin={item.origin}
                  description={item.description}
                  onClick={() => handleTypeClick(item)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p>Loading...</p>
            </div>
          )}
        </>
    </div>
  );
}

export default FetchData;
