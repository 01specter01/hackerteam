import "./Loading.scss";
import reactLogo from "../assets/react.svg";
export default function Loading() {
  return (
    <div className="loading">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>if(brain !== null) keepCoding(brain)</h1>
      <h2>less software, more smart</h2>
    </div>
  );
}
