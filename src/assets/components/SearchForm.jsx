import React from 'react';

function SearchForm({ setCity, getLocation }) {
    function handleNewCity(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getLocation();
    }
    
    return (
        <form onSubmit={handleSubmit} className='mb-3'>
            <input
            type='text'
            className='form-control'
            placeholder='Explore A City'
            onChange={handleNewCity}
        />
        </form>
    );
}

export default SearchForm;