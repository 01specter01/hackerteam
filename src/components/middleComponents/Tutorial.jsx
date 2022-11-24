import data from "../../data.json";
import Publicty from "./Publicty";
import "./Tutorial.scss";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Tutorial() {
  const [like, setLike] = useState(
    localStorage.getItem("likes") !== null
      ? JSON.parse(localStorage.getItem("likes"))
      : {}
  );
  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(like));
  }, [like]);
  const handleClickIcon = (i, asc) => {
    setLike(
      (prev) =>
        (prev = {
          ...prev,
          [i]: asc ? like[i] + 1 || 1 : like[i] - 1 || 0,
        })
    );
  };
  return (

    <div>
      <div className="tutorials">
        {data.tutorial.title.map((el, i) => {
          return (
            <div className="v-Countainer">
              <iframe
                width="550"
                height="320"

                src={`https://www.youtube.com/embed/${data.tutorial.link[i]}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />


              <h3 className="textVideo">
                {el}
                <div className="likeIcons">
                  <AiFillLike
                    onClick={() => handleClickIcon(i, true)}
                    className="liked"
                  />
                  <span className="counter">{like[i] > 0 && like[i]}</span>
                  <AiFillDislike
                    className="disliked"
                    onClick={() => handleClickIcon(i, false)}
                  />
                </div>
              </h3>
            </div>
          );
        })}
      </div>
      <Publicty />
    </div>

  );
}
