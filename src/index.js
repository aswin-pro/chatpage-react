import React from "react";
import ReactDom from "react-dom/client";
import "./style.css"
const root = ReactDom.createRoot(document.getElementById("root"))


function Chatpage(props) { //props={imgurl:{item.imgurl}}
  return (
        <div className="container">
              <div className="main">
                  <img src={props.imgurl} alt="" />
                  <div className="content">
                      <h2>{props.name}</h2>
                      <p>{props.text}</p>
                  </div>
                  <div className="time">
                    <p>{props.time}</p>
                    <p>{props.rating}</p>
                  </div>
              </div>
        </div>
  )
}

//Array of objects

var list =[
  {
    imgurl:"https://images.pexels.com/photos/4307849/pexels-photo-4307849.jpeg?auto=compress&cs=tinysrgb&w=400",
    name:"Aswin",
    text:"Are You There ?",
    time:"09:30 am",
    rating:"⭐ ⭐ ⭐ "
  },
  {
    imgurl:"https://images.pexels.com/photos/5528969/pexels-photo-5528969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Mike",
    text:"I need your help",
    time:"09:15 am",
    rating:"⭐ ⭐  "
  },
  {
    imgurl:"https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Steav",
    text:"Good Morning...",
    time:"09:00 am",
    rating:"⭐ ⭐ ⭐ "
  },
  {
    imgurl:"https://images.pexels.com/photos/6121918/pexels-photo-6121918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"John",
    text:"Thanks for it......",
    time:"08:50 am",
    rating:"⭐ ⭐  "
  },
  {
    imgurl:"https://images.pexels.com/photos/12566569/pexels-photo-12566569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Henry",
    text:"I will come tomo",
    time:"07:50 am",
    rating:"⭐ ⭐ ⭐ "
  },

]
root.render(
  <div className="main-container">
    <input type="text" placeholder="Search" />
    {list.map(function(item) {
      return (
        <Chatpage 
          // key={item.name} // Unique key for each Chatpage component
          imgurl={item.imgurl}
          name={item.name}
          text={item.text}
          time={item.time}
          rating={item.rating}
        />
      );
    })}
  </div>
);