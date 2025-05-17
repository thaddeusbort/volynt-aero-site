import SubLayout from "../components/SubLayout";
import { GetStaticProps } from "next";
import { getSolutionsPageContent } from "../lib/mdx";
import ReactMarkdown from "react-markdown";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import ContactForm from "../components/ContactForm";

export const getStaticProps: GetStaticProps = async () => {
  const { mdxSource, frontMatter } = await getSolutionsPageContent();
  return {
    props: { mdxSource, frontMatter },
  };
};

export default function Solutions({ mdxSource, frontMatter }) {
  return (
    <SubLayout title={frontMatter.title}>
      <MDXRemote {...mdxSource} />
    </SubLayout>
  );
}
