import UrlRouting from "./PageRouting/URLs";
// import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Smart Soft Studios</title> */}
        <UrlRouting />
        {/* </Helmet> */}
    </div>
  );
}

export default App;
