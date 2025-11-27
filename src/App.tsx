import "./App.css";
import TabsNavigation from "./components/TabsNavigation";
import { Button } from "antd";
import { MoonOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="min-h-screen w-full bg-white relative transition-colors duration-200 flex items-start justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "white",
          backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
                            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)`,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <Button className="absolute! top-5 right-5 rounded-full! w-[44px]! h-[44px]! bg-gray-200! shadow-sm">
        <MoonOutlined style={{ fontSize: "18px" }} />
      </Button>
      <div className="w-[700px] h-[95vh] mt-4 bg-white/80 rounded-3xl shadow-xl px-10 py-6 backdrop-blur-md border border-slate-200">
        <h1 className="text-5xl pb-[10px] font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Task Manager
        </h1>
        <p className="text-center mt-2 mb-5 text-slate-600 font-semibold">Stay organized, get things done ✨</p>

        <TabsNavigation />

        <div className="text-center block mt-6 text-gray-400 dark:text-gray-600">
          <p>No tasks yet. Add one above! 👆</p>
        </div>
      </div>
    </div>
  );
}

export default App;
