import data from "../../data.json";
import "./Tutorial.scss";
export default function Tutorial() {
  return (
    <>
      {data.tutorial.title.map((el, i) => {
        return (
          <div className="v-Countainer" >
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${data.tutorial.link[i]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <h1> {el} </h1>
          </div>
        );
      })}
    </>
  );
}
