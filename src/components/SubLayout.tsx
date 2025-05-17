import Layout from "../components/Layout";

type Props = {
  title: string,
  children: React.ReactNode,
};

export default function SubLayout({ title, children }: Props) {

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto px-5 pt-10">
        <div className="mt-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">{title}</h1>
          <p className="text-lg mt-4 text-slate-600"></p>
        </div>
        {children}
      </div>
    </Layout>
  );
}
