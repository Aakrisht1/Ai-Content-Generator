import CreateNewContent from './CreateNewContent';

interface PageProps {
  params: {
    'template-slug': string;
  };
}

const Page = ({ params }: PageProps) => {
  return <CreateNewContent templateSlug={params['template-slug']} />;
};

export default Page;
