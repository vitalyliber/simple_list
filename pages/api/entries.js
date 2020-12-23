// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const data = {
    entries: [
      {
        id: "bfa978f4-c745-4b72-8cd3-dbf36592fe02",
        slug: "name-cho",
        total_votes: 1035,
        image_url:
          "https://cdn.babyvote.com/staging/entry/image/bfa978f4-c745-4b72-8cd3-dbf36592fe02/thumbnail_cropped_entry_ava.png",
        global_rank: 1,
        full_name: "Firstname Lastname",
      },
      {
        id: "f0547070-048a-400b-8970-a3aaf40de2cd",
        slug: "girl-sharpewitz",
        total_votes: 402,
        image_url:
          "https://cdn.babyvote.com/staging/entry/image/f0547070-048a-400b-8970-a3aaf40de2cd/thumbnail_cropped_entry_went_wrong.png",
        global_rank: 2,
        full_name: "Girl Sharpewitz",
      },
      {
        id: "dd6efc58-14fd-456b-a3f7-3d157cea8307",
        slug: "test-dinglesen",
        total_votes: 201,
        image_url:
          "https://cdn.babyvote.com/staging/entry/image/dd6efc58-14fd-456b-a3f7-3d157cea8307/thumbnail_cropped_entry_happy-birthday-meme-267.jpg",
        global_rank: 3,
        full_name: "Test Dinglesen",
      },
    ],
    meta: {
      per: 20,
      page: 1,
      total_count: 3,
      total_pages: 1
    },
  };
  res.statusCode = 200;
  res.json(data);
};
