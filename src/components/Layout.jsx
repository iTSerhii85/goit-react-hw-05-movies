import { NavLink, Outlet } from "react-router-dom"

export const Layout =()=>{
    return (
    <>
     <header>
       <nav>
         <NavLink to="/">Home</NavLink>
          <br/>
         <NavLink to="/movies">Movies</NavLink>
       </nav>
     </header>
     <main>
       <Outlet/>
     </main>
     <footer>2023</footer>
    </>
    )
}