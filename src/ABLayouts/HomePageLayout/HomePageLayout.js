import { BackgroundVideo, Navbar, Carousel } from "../../ABComponents";
import { HomePageGrid, BlogCardsList, EmailSubscription, Testimonials, SurveyFormSection } from './components/index'

// import HomePageGrid from "./components/HomePageGrid/HomePageGrid";


// HOME PAGE LAYOUT.
export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <BackgroundVideo />{" "}
      <Carousel />
      <HomePageGrid />
      <BlogCardsList />
      <EmailSubscription />
      {/* <Testimonials /> */}
      <SurveyFormSection />
    </>
  );
}

// TODO: this will be SSR