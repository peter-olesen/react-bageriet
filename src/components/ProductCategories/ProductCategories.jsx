import pcs from "./ProductCategories.module.scss";
import { useEffect, useState } from "react";

// https://api.mediehuset.net/bakeonline/categories

export const ProductCategories = ({ setId }) => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://api.mediehuset.net/bakeonline/categories"
        );
        if (!res.ok) {
          throw new Error("Could not fetch categories");
        }

        const data = await res.json();
        setCategories(data.items || []);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, []);

  //   console.log(categories);

  return (
    <aside>
      <ul className={pcs.ProductCategories}>
        {categories?.map((item) => {
          return (
            <li onClick={() => setId(item.id)} key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
