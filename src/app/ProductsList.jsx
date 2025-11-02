'use client'
import { useEffect, useState } from "react";
import { FaRegHeart , FaHeart  } from "react-icons/fa";
import "../styles/productsList.css"
export default function ProductsList() {
  const [data, setData] = useState([]);
  const [hearts, setHearts] = useState({})

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
      const json = await res.json();
      
      const initial = {};
      json.forEach(item => (initial[item.id] = false));
      setHearts(initial);

      setData(json);
    }
    getProducts();
  }, []);

  const toggleHeart = (id) => {
    setHearts(prev => ({
        ...prev,
        [id]: !prev[id]
    }));
  }

  return (
    <ul className = "products-lists">
        {data.map(each => (
            <li key = {each.id} className="list">
                <img src = {each.image} alt = {each.title} className="img" />
                <div className="details">
                    <h1 className="title">{each.title}</h1>
                    <div className="d">
                        <p className="des"><span className="s">Sign in</span> or Create an account to see pricing</p>
                        {hearts[each.id] ? (<FaHeart className = "hearted" onClick = {() => toggleHeart(each.id)} />) : (<FaRegHeart className="heart" onClick={() => toggleHeart(each.id)} />)}
                    </div>
                </div>
            </li>
        ))}
    </ul>
  );
}
