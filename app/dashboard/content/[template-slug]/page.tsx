import CreateNewContent from './CreateNewContent';

interface PageProps {
  params: Promise<{
    'template-slug': string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  return <CreateNewContent templateSlug={resolvedParams['template-slug']} />;
};

export default Page;