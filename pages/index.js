import useSWR from "swr";
import fetcher from "../api/fetcher";
import Tile from "../components/TIle";
export default function Home() {
  const { data, error } = useSWR("/api/entries", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <>
      <div>
        {data?.entries.map((el) => (
          <Tile {...el} />
        ))}
      </div>
    </>
  );
}
