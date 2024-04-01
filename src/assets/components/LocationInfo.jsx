import React from 'react';

function LocationInfo({ location, accessToken }) {
    return (
        <>
        <div className='card text-center my-3'>
            <div className='card-header'>
                Location Information
            </div>
            <div className='card-body'>
                <h5 className='card-title'>{location.display_name}</h5>
                <p className='card-text'>Latitude: {location.lat}</p>
                <p className='card-text'>Longitude: {location.lon}</p>
                {location.lat && location.lon && (
                    <img
                        src={''}
                        className='card-img-top my-2'
                        alt='Location Map'
                    />
                )}
            </div>
        </div>
        </>
    );
}

export default LocationInfo;