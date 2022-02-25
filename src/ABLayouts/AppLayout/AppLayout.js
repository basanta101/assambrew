// the main layout for the whole app.
import { useRouter } from "next/router";
import { Navbar, Footer } from "../../ABComponents";

export default function AppLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
