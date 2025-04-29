import { useRouter } from 'next/router';

export default function ReadPDFPage() {
  const router = useRouter();
  const { pdf } = router.query;

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {pdf ? (
        <iframe
          src={pdf}
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
