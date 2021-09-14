// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{ scrollBehavior: "smooth" }}
        >
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
