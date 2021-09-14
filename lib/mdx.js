import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
export async function getFile(slug) {
    const file = fs.readFileSync(
        path.join(process.cwd(), "data", "works", `${slug}.mdx`),
        "utf8"
    );

    const { code, frontmatter } = await bundleMDX(file);

    return {
        code,
        frontmatter,
    };
}
/**
 *
 * @param {string} type
 * @returns
 */
export async function getFiles(type = "") {
    const files = fs.readdirSync(
        path.join(process.cwd(), "data", type),
        "utf8"
    );
    return files;
}
