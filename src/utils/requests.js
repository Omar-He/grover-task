const api_key = process.env.REACT_APP_API_KEY;

export async function getArticles(page, keyword) {
  const req = fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}&page=${page}&q=${keyword}&
    sort=newest${keyword ? `&fq=headline:(${keyword})` : ""}`
  );
  const res = await req;
  return res.json();
}

export async function getOneArticles(id) {
  try {
    const req = fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${api_key}&fq=_id:("nyt://article/${id}")`
    );
    const res = await req;
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
