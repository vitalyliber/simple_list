import Image from "next/image";
import Link from "next/link";

export default function Tile({ image_url, slug, global_rank, full_name }) {
  return (
    <>
      <Link href={`/entries/${slug}`}>
        <a>
          <div className="container">
            <Image src={image_url} alt="Avatar" width={60} height={50} />
            <div className="name">{full_name}</div>
            <div>Global rank: {global_rank}</div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .container {
          margin: 40px 15px;
          background-color: white;
          box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
          padding: 25px;
        }
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
