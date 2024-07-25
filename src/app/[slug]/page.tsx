import MainContent from "@/components/Content/MainContent";
import Detail from "@/components/Detail/Detail";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <MainContent>
      <Detail postSlug={params.slug} />
    </MainContent>
  );
}
