import type { Metadata } from 'next';
import { getApiDocs } from '@/lib/swagger';
import { ReactSwagger } from '@/components/react-swagger';

export const metadata: Metadata = {
  title: 'Swagger',
};

export default async function SwaggerPage() {
  const spec = await getApiDocs();
  return (
    <section>
      <ReactSwagger spec={spec} />
    </section>
  );
}
