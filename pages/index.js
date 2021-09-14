import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getFiles } from "../lib/mdx";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
export default function Home({ works }) {
    return (
        <>
            <Head>
                <title>
                    nlvnp - A thing to show the things i made and more
                </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            </Head>
            <main className="relative flex flex-col px-10 pt-12 lg:space-x-12 lg:flex-row">
                <div className="top-0 mb-8 space-y-4 lg:mb-0 lg:sticky lg:h-screen lg:w-1/3">
                    <div className="text-2xl font-medium text-black bgre lg:text-5xl pt-9">
                        <div className="mb-1">Frontend Developer</div>

                        <div
                            style={{ fontFamily: "Comic Sans MS" }}
                            className="font-bold"
                        >
                            Designer;)
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-500 lg:text-base ">
                        What's poppin I'm Neil and I'm a developer, designer,
                        and UI/UX enthusiast. I am currently seeking for job
                        opportunities. and you found the thing that i made to
                        show the things that I helped to make or made myself
                    </p>
                </div>
                <section className="lg:w-2/3">
                    <h2 className="mb-10 text-sm font-bold tracking-widest text-gray-900 uppercase">
                        Works
                    </h2>
                    <ul className="space-y-4">
                        {works.map((work) => (
                            <li key={work.title}>
                                <Link href={`works/${work.slug}`}>
                                    <a>
                                        <article className="space-y-3">
                                            <Image
                                                src={work.image}
                                                width={1024}
                                                height={560}
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                            <div className="flex ">
                                                <h1 className="text-sm font-bold text-gray-900 lg:text-lg ">
                                                    {work.title}:&nbsp;
                                                </h1>
                                                <p className="text-sm font-medium text-gray-900 lg:text-lg ">
                                                    {work.summary}
                                                </p>
                                            </div>
                                        </article>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}
export async function getStaticProps() {
    const works = await getFiles("works");

    return {
        props: {
            works: works.map((w) => {
                const file = fs.readFileSync(
                    path.join(process.cwd(), "data", "works", w),
                    "utf-8"
                );
                const { data } = matter(file);
                return { ...data, slug: w.replace(/\.mdx/, "") };
            }),
        },
    };
}
