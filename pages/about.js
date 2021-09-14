export default function About() {
    return (
        <div className="flex-1 w-full max-w-6xl px-10 mx-auto mt-24">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                About Me
                <span
                    style={{ fontFamily: "Times New Roman" }}
                    className="text-6xl italic "
                >
                    self
                </span>
            </h1>
            <div className="leading-6 prose prose-lg text-gray-600">
                <p>
                    Hey, I’m Neil. I'm a developer, designer, and a UI/UX
                    Enthusiast. I am currently seeking for job opportunities to
                    further grow my career in web development.
                </p>
                <p>
                    I have a great passion for building beautiful and possibly
                    highly accessible user interfaces that its users the ability
                    to help in their daily lives, as well as provide them with
                    great value.
                </p>
                <p>
                    I am currently residing in Davao, a city in Mindanao in the
                    country of the Philippines. I graduted with a degree in
                    Information Technology Specializing in Multimedia Systems
                </p>
            </div>

            <a
                href="/Resume - Neil Ivan Palacios.pdf"
                className="inline-block px-4 py-2 mt-5 text-sm font-bold text-blue-600 transition bg-blue-100 rounded-lg hover:bg-blue-50"
            >
                Grab my single sheet of digital paper (My Resume)
            </a>
        </div>
    );
}
