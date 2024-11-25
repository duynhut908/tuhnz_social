import React from "react";
import "./Search.css";

function SearchForm({ isSearchOpen, toggleSearchForm }) {
    return (
                <div className={`search-container`} onClick={toggleSearchForm}>
                    <div className={`search-form`} onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={toggleSearchForm}>
                            &times;
                        </button>
                        <h2>Search</h2>
                        <input type="text" placeholder="Search something..." />
                    </div>
                </div>
    );
}

export default SearchForm;