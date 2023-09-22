import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import News from "./components/news/News";
import Product from "./components/product/Product";
import Product2 from "./components/product2/Product2";
import Team from "./components/team/Team";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Product />
      <Product2 />
      <Team />
      <News />
      <Footer />
    </div>
  );
}

export default App;
