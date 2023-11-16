import { notFound } from 'next/navigation';
import Z from './Z';
import { connectDatabase } from '../db';

const fetchPhotosFromMongoDB = async () => {
  const db = await connectDatabase();
  const photos = await db.collection('photos').find({}).toArray();
  return photos;
};

export default function FotografiaSlubna({ photos }) {
  if (!photos) return notFound();

  return (
    <div className="ml-3 mt-12 mb-20">
      <Z />
    </div>
  );
}

export async function getServerSideProps() {
  const photos = await fetchPhotosFromMongoDB();

  return {
    props: { photos },
  };
}