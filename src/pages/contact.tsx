import SubLayout from "../components/SubLayout";
import { GetStaticProps } from "next";
import { getContactPageContent } from "../lib/mdx";
import ReactMarkdown from "react-markdown";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import ContactForm from "../components/ContactForm";

export const getStaticProps: GetStaticProps = async () => {
  const { mdxSource, frontMatter } = await getContactPageContent();
  return {
    props: { mdxSource, frontMatter },
  };
};

export default function Team({ mdxSource, frontMatter }) {
  return (
    <SubLayout title={frontMatter.title}>
      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <div className="text-lg leading-relaxed text-slate-500"><MDXRemote {...mdxSource} /></div>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              {/* <svg viewBox="0 0 24 24" className="text-gray-400 w-4 h-4" astro-icon="uil:map-marker">
                <path fill="currentColor" d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8zm0 17.65c-2.13-2-6-6.31-6-9.65a6 6 0 0 1 12 0c0 3.34-3.87 7.66-6 9.65zM12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
              </svg> */}
              <span>{frontMatter.address}</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              {/* <svg viewBox="0 0 24 24" class="text-gray-400 w-4 h-4" astro-icon="uil:envelope">
                <path fill="currentColor" d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.41 2-5.88 5.88a1 1 0 0 1-1.42 0L5.41 6zM20 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.41l5.88 5.88a3 3 0 0 0 4.24 0L20 7.41z" />
              </svg> */}
              <a href="mailto:jbennett@volyntaero.com">{frontMatter.email}</a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600"></div>
            <div className="mt-5">
              <img src={frontMatter.image!}/>
            </div>
          </div>
        </div>
        <div>
          <p className="text-slate-500 mb-3"> Please fill out the form and we will be in touch with you shortly. </p>
          <ContactForm />
        </div>
      </div>
    </SubLayout>
  );
}
