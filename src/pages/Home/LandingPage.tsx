import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import { Main } from "../../components/ui/Main";
import { Testimonial } from "../../components/ui/Testimonial";
import { SideBar } from "../../components/ui/Sidebar";
const LandingPage = () => {
  return (
    <div className="App">
      <SideBar />
      <Header />
      <Main />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
