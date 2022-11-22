import data from "../../data.json";
export default function Docs() {
  return (
    <>
      <div className="title">
        <h1>{data.docs.title}</h1>
        <p>{data.docs.disc}</p>
      </div>
      {data.docs.hTitle.map((el, i) => {
        if (i !== 0 && i !== 1) {
          return (
            <div>
              <h1>{el}</h1>
              <p>{data.docs.hText[i]}</p>
            </div>
          );
        } else if (i === 0) {
          return (
            <div>
              <h1>{el}</h1>
              <p>{data.docs.hText[i]}</p>
              {data.docs.sTitle[0].tryReact.map((ele, index) => {
                return (
                  <div key={index}>
                    <h3> {ele} </h3>
                    <p> {data.docs.sText[0].tryReact[index]} </p>
                  </div>
                );
              })}
            </div>
          );
        } else if (i === 1) {
          return (
            <div>
              <h1>{el}</h1>
              <p>{data.docs.hText[i]}</p>
              {data.docs.sTitle[0].learnReact.map((ele, index) => {
                return (
                  <div key={index}>
                    <h3> {ele} </h3>
                    <p> {data.docs.sText[0].learnReact[index]} </p>
                  </div>
                );
              })}
            </div>
          );
        }

        {
        }
      })}
    </>
  );
}
