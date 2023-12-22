import Banner from "../../Components/HeaderSection/BannerSection/Banner";
import Navbar from "../../Components/HeaderSection/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import WebsiteTitle from "../../Shared/WebsiteTitle/WebsiteTitle";
import AllPersonSection from "./AllPersonsection";
const HomePage = () => {
     return (
          <div>
               <WebsiteTitle title={"Home Page"}></WebsiteTitle>
               <Navbar></Navbar>
               <Banner></Banner>
               <AllPersonSection></AllPersonSection>
               <Footer></Footer>
          </div>
     );
};

export default HomePage;
