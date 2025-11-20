import { MoonStar } from "lucide-react";
import { GradientTabsDemo } from "./components/tabs";

function App() {
  return (
    <div className="relative">
      <div className="absolute top-5 right-7 z-2 px-[10px] py-[10px] border border-black-600 rounded-full bg-gray-200 cursor-pointer">
        <MoonStar />
      </div>
      <GradientTabsDemo />
    </div>
  );
}

export default App;
