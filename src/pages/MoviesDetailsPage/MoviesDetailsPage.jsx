import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const MoviesDetailsPage = () => {
  return (
    <>
      <h1>MOVIE DETAILS PAGE</h1>
      <Link to="cast">CAST</Link>
      <Link to="reviews">REVIEWS</Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetailsPage;
