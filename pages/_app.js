// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
    return (
        <div
            className="flex flex-col min-h-screen"
            style={{ scrollBehavior: "smooth" }}
        >
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
