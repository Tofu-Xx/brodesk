export const search = (rawurl: string, q: string) => {
  if (q.trim() === "") return;
  const url = rawurl.replace("%s", q);
  open(`${url.startsWith("http") ? "" : "https://"}${url}`);
};
