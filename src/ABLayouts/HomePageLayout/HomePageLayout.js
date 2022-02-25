import { BackgroundVideo, Navbar, Carousel } from "../../ABComponents";
import { HomePageGrid, BlogCardsList, EmailSubscription, Testimonials, SurveyFormSection, ContactUs } from './components/index'

// import HomePageGrid from "./components/HomePageGrid/HomePageGrid";


// HOME PAGE LAYOUT.
export default function HomeLayout() {
  return (
    <>
      <BackgroundVideo />{" "}
      <Carousel />
      <HomePageGrid />
      {/* <BlogCardsList /> */}
      <EmailSubscription />
      {/* <Testimonials /> */}
      <SurveyFormSection />
      <ContactUs />
    </>
  );
}

// TODO: this will be SSR