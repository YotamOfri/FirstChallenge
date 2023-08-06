import { BlueSide } from "./components/BlueSide";
import { WhiteSide } from "./components/WhiteSide";

function App() {
  return (
    <div className="w-screen h-screen flex  justify-center items-center bg-Neutral-PaleBlue">
      <div className=" sm:h-100 h-ninteprecent sm:w-102 w-11/12 bg-Neutral-White rounded-Custom flex flex-col sm:flex-row">
        <BlueSide></BlueSide>
        <WhiteSide></WhiteSide>
      </div>
    </div>
  );
}
export default App;
