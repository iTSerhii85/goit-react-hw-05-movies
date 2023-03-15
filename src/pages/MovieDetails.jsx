import { AboutMovie } from "components/aboutMovie/AboutMovie";
import { getMovieBiId } from "fetch";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export const MovieDetails =()=>{
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieBiId(movieId).then(data => setMovie(data));

        return function cleanup() {getMovieBiId(movieId)}
    }, [movieId]);

    return(
        <>
         {movie && <AboutMovie movie={movie}/>}
         <Link to="cast">Cast</Link>
         <br />
         <Link to="reviews">Reviews</Link>
         <Outlet/>
        </>
    )
}