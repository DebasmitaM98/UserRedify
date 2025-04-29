"use client";
import { useGetDetailsPdfList } from '@/components/query/user/getpdfdetailslist';
import { useParams } from 'next/navigation';

export default function ReadPDFPage() {
  const {id} = useParams();
    const { data } = useGetDetailsPdfList(id);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {data?.data?.pdf ? (
        <iframe
          src={data?.data?.pdf}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}
