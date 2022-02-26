import { BackgroundVideo, Navbar, Carousel } from "../../ABComponents";
import {
  HomePageGrid,
  BlogCardsList,
  EmailSubscription,
  Testimonials,
  SurveyFormSection,
  ContactUs,
  HomePageCarouselSection
} from "./components/index";


// HOME PAGE LAYOUT.
export default function HomeLayout() {
  return (
    <>
      <BackgroundVideo />
      <HomePageCarouselSection />
      <HomePageGrid />
      <BlogCardsList />
      <EmailSubscription />
      <Testimonials />
      <SurveyFormSection />
      <ContactUs />
    </>
  );
}

// TODO: this will be SSR
