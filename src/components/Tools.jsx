export default function Tools({ str, search }) {
  const length = str.split(search).length - 1;
  return search.length > 2
    ? str.split(search).map((el, i) => (
        <span>
          {el}
          {i !== length ? <span className="searched">{search}</span> : ""}
        </span>
      ))
    : str;
}
