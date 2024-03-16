import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import Nav from './Nav';
import { ProductContext } from "../utils/Context"; 
import Loading from "./Loading";
import instance from "../utils/axios";


const Home = () => {
  const [products] = useContext(ProductContext);

  // Check if products is an array, if not, fallback to an empty array
  const productList = Array.isArray(products) ? products : [];

  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {productList.map((p, i) => (
          <Link 
            to={`/details/${p.id}`} 
            key={i} 
            className="card p-5 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center item-center"
          >
            <div
              className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300">
              {p.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
