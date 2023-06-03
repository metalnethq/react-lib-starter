import "./App.css";
import { Test } from "./lib/component";

function App() {
  return (
    <>
      <Test>
        <span className="text-3xl">
          Created with: &nbsp;
          <a
            className="underline"
            href="https://github.com/bytemebaby/react-lib-starter"
          >
            react-lib-starter
          </a>
          ❤️
        </span>
      </Test>
    </>
  );
}

export default App;
