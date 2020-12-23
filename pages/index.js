import useSWR from "swr";
import { useState } from "react";
import fetcher from "../api/fetcher";
import Tile from "../components/TIle";
export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error } = useSWR(`/api/entries?page=${pageIndex}`, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data?.entries.map((el) => (
        <Tile {...el} />
      ))}
      <button
        disabled={data?.meta?.page === 1}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        Previous
      </button>
      <button
        disabled={pageIndex === data?.meta?.total_pages}
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
    </div>
  );
}
