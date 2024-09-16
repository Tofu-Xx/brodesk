export type Locator = {
  name: string;
  rawurl: string;
};
export const locators: Locator[] = [
  {
    name: "google",
    rawurl: "google.com/search?q=%s",
  },
  {
    name: "bing",
    rawurl: "bing.com/search?q=%s",
  },
  {
    name: "ddg",
    rawurl: "duckduckgo.com/?q=%s",
  },
];
