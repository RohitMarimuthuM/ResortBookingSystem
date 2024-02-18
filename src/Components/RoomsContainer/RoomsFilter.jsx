import React, { useContext, useState } from "react";
import { RoomContext } from "../../Context/Context";
import Title from "../Title/Title";
import "./RoomsFilter.css";

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const [searchTerm, setSearchTerm] = useState("");

  const { handleChange } = context;

 
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    handleChange(inputValue); 
  };

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />

      <form className="filter-form">
       
        <div className="form-group search-group">
          <label htmlFor="type" className="search-icon">
            <i className="fas fa-search"></i>
          </label>
          <input
            type="text"
            name="type"
            id="type"
            value={searchTerm}
            className="form-control search-input"
            onChange={handleInputChange}
            placeholder="Search by room type..."
          />
        </div>
      </form>
    </section>
  );
}
