import MoviesDay from "./MoviesDay";

const Movies = ({moviesData}) => {
    console.log('moviesData ', moviesData);
    return (
        <div className='movie'>
            <h2>Movies By Cities</h2>
            <div className="movie-list">
                {moviesData.map((eachMovie, index) => (
                    <MoviesDay key={index} eachMovie={eachMovie} />
                ))}
            </div>
        </div>
    );
};
export default Movies;