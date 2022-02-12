export async function getArticles(page, keyword) {
  const req = fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=HvMrEU0KA419DJ9NCW4BVj7n9tzQWUfi&page=${page}&q=${keyword}&sort=newest&limit=15`
  );
  const res = await req;
  return res.json();
}

export async function getOneArticles(id) {
  try {
    const req = fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=HvMrEU0KA419DJ9NCW4BVj7n9tzQWUfi&fq=_id:("nyt://article/${id}")`
    );
    const res = await req;
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
