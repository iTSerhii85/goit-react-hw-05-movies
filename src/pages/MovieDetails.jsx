import { useParams } from "react-router-dom";

export const MovieDetails =()=>{
    const { movieId } = useParams();
    console.log(movieId);
    // const movie = getMovieById(movieId);
    return(
        <>
            {/* <h1>{movie.name}</h1> */}
            <p>About movie</p>
        </>
    )
}