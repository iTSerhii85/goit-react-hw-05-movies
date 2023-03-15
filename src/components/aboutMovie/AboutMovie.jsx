export const AboutMovie =({movie})=>{
    return (
        <>
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={180} height={250} />
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
            </div>
        </>
    )
}