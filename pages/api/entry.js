// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const data = {
    entry: {
      id: "dd6efc58-14fd-456b-a3f7-3d157cea8307",
      slug: "test-dinglesen",
      total_votes: 201,
      image_url:
        "https://cdn.babyvote.com/staging/entry/image/dd6efc58-14fd-456b-a3f7-3d157cea8307/cropped_entry_cropped_entry_happy-birthday-meme-267.jpg",
      featured: false,
      rank: 2,
      first_name: "Test",
      last_name: "Dinglesen",
      full_name: "Test Dinglesen",
      country: "RU",
      gender: "male",
      next_slug: null,
      previous_slug: "name-cho",
      owner_name: "Ruth Dinglesen",
      owner_id: "7105c3a8-b075-4eed-b0f2-b0d18f961046",
      contest: {
        id: "59d99687-075e-4ee3-8785-cb09ea132c83",
        slug: "boys",
        competition_id: "4162ee97-12f8-4f6a-9a98-70dc3b6ba2ce",
        en_slug: "boy",
        started_at: "2020-12-01T08:10:10.157Z",
        prize: 12668,
        prize_currency: "£",
      },
    },
  };
  res.statusCode = 200;
  res.json(data);
};
