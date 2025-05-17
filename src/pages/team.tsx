import SubLayout from "../components/SubLayout";
import { GetStaticProps } from "next";
import { getTeamPageContent } from "../lib/mdx";
import ReactMarkdown from "react-markdown";

export const getStaticProps: GetStaticProps = async () => {
  const { frontMatter } = await getTeamPageContent();
  return {
    props: { frontMatter },
  };
};

export default function Team({ frontMatter }) {
  return (
    <SubLayout title={frontMatter.title}>
      <div className="mt-16 flex flex-wrap">
        {frontMatter.teamMembers?.filter(member => !!member?.image).map((member, i) => (
          <div key={i} style={{ backgroundImage: `url('${member?.image}')`, flex:'1 1 500px', backgroundSize:'cover', backgroundPosition:'center center', height:'550px', maxWidth:'400px', cursor:'pointer'}}>
            <div className="p-5 bg-white opacity-0 w-full h-full hover:opacity-80 transition-all duration-500">
              <div className="font-bold">{member?.name}</div>
              <div className="italic">{member?.title}</div>
              <ReactMarkdown>{member?.bio}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </SubLayout>
  );
}
