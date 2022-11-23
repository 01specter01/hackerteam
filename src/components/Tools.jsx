export default function Tools({ str, search }) {
  return search.length > 2
    ? str.split(search).map((el, i) => (
        <span>
          {el}
          {i !== str.split(search).length - 1 ? (
            <span className="searched">{search}</span>
          ) : (
            ""
          )}
        </span>
      ))
    : str;
}
