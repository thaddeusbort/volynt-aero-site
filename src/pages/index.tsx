import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import { getHomePageContent } from "../lib/mdx";
import ReactMarkdown from "react-markdown";

export const getStaticProps: GetStaticProps = async () => {
  const { frontMatter } = await getHomePageContent();
  return {
    props: { frontMatter },
  };
};

export default function Home({ frontMatter }) {
  return (
    <Layout>
      <main className="bg-cover w-full" style={{ height:'800px', maxHeight:'80vh', backgroundImage: `url('${frontMatter.heroImage}')` }}>
        <div className="max-w-screen-xl md:w-3/4 lg:w-1/2 mx-auto px-5 pt-32 md:pt-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl lg:tracking-tight text-primary-300 max-w-xl" style={{ lineHeight:'1.1em' }}>{frontMatter.heroTitle}</h1>
            <div className="text-lg mt-4 text-slate-600 max-w-xl text-primary-300"><ReactMarkdown>{frontMatter.heroText}</ReactMarkdown></div>
            <div className="mt-6 flex"> <a href="#content" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent bg-primary-300">{frontMatter.heroButtonLabel}</a> </div>
        </div>
      </main>
  
      <div className="max-w-screen-xl mx-auto px-5 pt-10">
        <a id="content"></a>
        <div className="py-32 lg:px-48 md:px-20">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl colored-bold"><ReactMarkdown>{frontMatter.largeQuote}</ReactMarkdown></div>
          </div>
        </div>

        {frontMatter.sections?.filter(section => !!section?.image).map((section, i) => (
          <div key={i} className="pt-32">
            <div className="grid md:grid-cols-2 gap-4">
              {i % 2 === 0 ? (
                <>
                  <div><img src={section?.image!} alt={section?.title} width="600"/></div>
                  <div>
                    <h2 className="text-4xl lg:text-5xl lg:tracking-tight"><ReactMarkdown>{section?.title}</ReactMarkdown></h2>
                    <div className="text-lg text-slate-600 mt-4"><ReactMarkdown>{section?.text}</ReactMarkdown></div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-4xl lg:text-5xl lg:tracking-tight"><ReactMarkdown>{section?.title}</ReactMarkdown></h2>
                    <div className="text-lg text-slate-600 mt-4"><ReactMarkdown>{section?.text}</ReactMarkdown></div>
                  </div>
                  <div><img src={section?.image!} alt={section?.title} width="600"/></div>
                </>
              )}
            </div>
          </div>
        ))}

        <div className="bg-black px-10 md:px-20 py-10 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
          <h2 className="text-white text-3xl md:text-6xl">{frontMatter.contact?.title}</h2>
          <p className="text-slate-500 mt-4 text-lg md:text-xl">{frontMatter.contact?.text}</p>
          <div className="flex mt-5"> <a href="/contact" className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white text-black   border-2 border-transparent">{frontMatter.contact?.buttonLabel} </a> </div>
        </div>
        
      </div>
    </Layout>
  );
}
