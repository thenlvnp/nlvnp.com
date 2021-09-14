import React, { useMemo } from "react";
import { getFiles, getFile } from "../../lib/mdx";
import Image from "next/image";

import { getMDXComponent } from "mdx-bundler/client";
export default function Work({ code, frontmatter }) {
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
        <>
            <main className="flex-1 w-full max-w-6xl mx-auto mt-24">
                <div className="px-10">
                    <div className="">
                        <div>
                            <h1 className="mb-2 text-2xl font-bold text-gray-900 lg:text-5xl">
                                {frontmatter.title}
                            </h1>
                            <p className="text-lg font-medium text-gray-600">
                                {frontmatter.subtitle}
                            </p>
                        </div>
                        <div className="mt-5 space-y-4 ">
                            <div className="text-base font-medium ">
                                <h2 className="text-gray-500">
                                    What i worked on
                                </h2>
                                <ul className="text-gray-900">
                                    {frontmatter.role.map((r, index) => (
                                        <li key={index}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                            {frontmatter?.stack ? (
                                <div className="text-base font-medium ">
                                    <h2 className="text-gray-500">
                                        Tools Used
                                    </h2>
                                    <ul className="text-gray-900">
                                        {frontmatter?.stack?.map((r, index) => (
                                            <li key={index}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="mt-8">
                        <Image
                            src={frontmatter.image}
                            width={1024}
                            height={560}
                            objectFit="cover"
                            layout="responsive"
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-center px-10 mt-5">
                    <div className="w-full prose prose-lg max-w-none prose-blue">
                        <Component
                            components={{
                                Image,
                            }}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
export async function getStaticPaths() {
    const works = await getFiles("works");
    return {
        paths: works.map((w) => ({
            params: { slug: w.replace(/\.mdx/, "") },
        })),
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const work = await getFile(params.slug);
    return { props: { ...work } };
}
