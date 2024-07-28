import "./style.scss";
import "./prelude.css";

import { render } from "solid-js/web";
import { App } from "./App";

render(() => <App />, document.getElementById("app")!);

postMessage({ payload: "removeLoading" }, "*");
