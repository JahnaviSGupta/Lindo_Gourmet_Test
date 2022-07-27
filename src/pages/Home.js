import "../styles/Home.css";

import HeroSection from "../components/HeroSection";
import HomeCategories from "../components/HomeCategories";

function Home() {
  return (
    // <div>
    //     <h1>Categories</h1>
    //   {todos ? todos : 'There is no data available'}
    // </div>
    <div>
      <h2>Home</h2>
      <HeroSection />
      <HomeCategories />
    </div>
  );
}

export default Home;
