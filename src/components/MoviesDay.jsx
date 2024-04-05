import Card from 'react-bootstrap/Card';
import './MoviesDay.css';

const MoviesDay = ({eachMovie}) => {
    return (
        <Card className='movie-item'>
            <Card.Body className='bg-dark text-white'>
            <Card.Title>{eachMovie.title}</Card.Title>
            <Card.Text>{eachMovie.overview}</Card.Text>
            <Card.Text>Release Date: {eachMovie.release_date}</Card.Text>
            <Card.Img src={`https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`} alt="Movie Poster" />
            </Card.Body>
        </Card>
    )
}


export default MoviesDay;
