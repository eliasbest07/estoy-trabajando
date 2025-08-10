import Background from "./components/background";
import FirstView from "./components/first_view";
import GridShowWorks from "./components/grid_show_works";
import AppNav from "./components/nav_bar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Background/>
      <AppNav/>
      <FirstView/>
      <GridShowWorks/>
    </div>
  );
}
