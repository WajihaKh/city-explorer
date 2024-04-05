const Movies = ({movieData}) => {
    console.log('movieData ', movieData);
    return (
        <div className='movie'>
            <h2>Movies By Cities</h2>
            <div className="movie-list">
                {movieData.map((movieObj, index) => (
                    <div key={index} className='movie-item'>
                    <p>{movieObj.title}</p>
                    <p>{movieObj.overview}</p>
                    <p>{movieObj.release_date}</p>
            </div>
                ))}
            </div>
        </div>
    );
}
export default Movies;