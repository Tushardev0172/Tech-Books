import React from "react";
import { createContext, useReducer } from "react";
import { ProductReducer } from "./productReducer";

export const productContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useReducer(ProductReducer, [
    {
      id: 1,
      name: "DBMS",
      price: 75,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/DBMS-Gujarati-With-Outer-Shadow-Effect.png.webp",
    },
    {
      id: 2,
      name: "C Programming",
      price: 410,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/12/CC-102-e1614410875645.png.webp",
    },
    {
      id: 3,
      name: "C++",
      price: 210,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2020/09/CC-203-Object-Oriented-Concepts-and-Programming-C-With-Outer-Shadow-e1602319392499.jpg",
    },
    {
      id: 4,
      name: "ASP.NET with C#",
      price: 399,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/ASP.-Net-With-Spine-Effect.png.webp",
    },
    {
      id: 5,
      name: "Web Design",
      price: 475,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/Web-Design-With-Spine-Effect-e1573550138873.png",
    },
    {
      id: 6,
      name: "Internet & HTML",
      price: 180,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/12/CC-103-Internet-HTML-Sem-1-e1614411052359.png.webp",
    },
    {
      id: 7,
      name: "Operating System",
      price: 99,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2020/09/CC-204-Fundamentals-of-Operating-System-With-Outer-Shadow-e1602319506919.jpg.webp",
    },
    {
      id: 8,
      name: "Computer Networks",
      price: 90,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2020/12/CC-303-Computer-Networks-e1614242177901.png.webp",
    },
    {
      id: 9,
      name: "Python Programming",
      price: 150,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2020/12/CC-302-Python-Programming-e1614242036377.png.webp",
    },
    {
      id: 10,
      name: "Visual Basic.net",
      price: 550,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/Visual-Basic.Net-With-Spine-Effect.png.webp",
    },
    {
      id: 11,
      name: "AutoCad 2016",
      price: 289,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2022/03/AutoCad-2016-Eng.png",
    },
    {
      id: 12,
      name: "PHP with MySQL",
      price: 135,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/Basic-PHP-With-My-SQL-1.png.webp",
    },
    {
      id: 13,
      name: "RedHat Linux",
      price: 90,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/RedHat.-Linux-Gujarati-With-Outer-Shadow-Effect.png.webp",
    },
    {
      id: 14,
      name: "Android Starter",
      price: 180,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/Android-Starter-Gujarati-With-Outer-Shadow-Effect.png.webp",
    },
    {
      id: 15,
      name: "HTML & JavaScript",
      price: 200,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/HTML-JavaScript-Gujarati-With-Outer-Shadow-Effect-e1573550202828.png",
    },
    {
      id: 16,
      name: "Adobe Photoshop ",
      price: 199,
      image:
        "https://computerworld.ind.in/wp-content/uploads/2019/09/Adobe-Photoshop-CS3-With-Outer-Shadow-English.png.webp",
    },
  ]);
  return (
    <productContext.Provider value={{ products }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
