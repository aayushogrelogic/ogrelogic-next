import Header from "./component/Header";
import Banner from "./component/Banner";
import WhoWeAre from "./component/WhoWeAre";
import ExploreOurWork from "./component/ExploreOurWork";
import IndustriesWeServed from "./component/IndustriesWeServed";
import Approach from "./component/Approach";
import Clients from "./component/Clients";
import Footer from "./component/footer";
import Newsletter from "./component/Newsletter";
import Message from "./component/Message";
import Innovation from "./component/Innovation";

export default function Home() {
    return (
     <>
      <Header/>   
      <Banner/>
      <WhoWeAre/>
      <ExploreOurWork/>
      <IndustriesWeServed/>
      <Approach/>
      <Clients/>
      <Innovation/>
      <Message/>
      <Newsletter/>
      <Footer/>
     </>
    )
  }