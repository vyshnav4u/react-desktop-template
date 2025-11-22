import { useEffect } from "react";
import styles from "./App.module.css";
// Import filesystem namespace
import { filesystem } from "@neutralinojs/lib";

function App() {
  console.log("App");
  useEffect(() => {
    const s = filesystem;
    console.log("useEffect ysh", filesystem);
    console.log("s", s);
    filesystem
      .readDirectory("./")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className={styles.app}>Hello Ysh Nav Msk</div>;
}

export default App;
