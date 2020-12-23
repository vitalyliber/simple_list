import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import fetcher from "../../api/fetcher";

export default function Entry() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  const { data, error } = useSWR(`/api/entry?slug=${slug}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const {
    entry: { full_name, image_url, rank },
  } = data;
  return (
    <>
      <div>
        <Image src={image_url} alt="Big avatar" width={900} height={720} />
        <div className="name">{full_name}</div>
        <div>Rank: {rank}</div>
      </div>
      <style jsx>{`
        .name {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          margin-top: 15px;
        }
      `}</style>
    </>
  );
}
