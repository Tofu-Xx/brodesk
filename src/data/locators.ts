export interface Locator {
  name: string
  rawurl: string
}
export const locators: Locator[] = [{
  name: 'gg',
  rawurl: 'google.com/search?q=%s',
}, {
  name: 'bing',
  rawurl: 'bing.com/search?q=%s',
}, {
  name: 'ddg',
  rawurl: 'duckduckgo.com/?q=%s',
}, {
  name: 'bili',
  rawurl: 'search.bilibili.com/all?keyword=%s',
}, {
  name: 'ytb',
  rawurl: 'youtube.com/results?search_query=%s',
}, {
  name: 'gh',
  rawurl: 'github.com/search?q=%s',
}, {
  name: 'wiki',
  rawurl: 'wikipedia.org/wiki/Special:Search?search=%s',
}, {
  name: 'tb',
  rawurl: 's.taobao.com/search?q=%s',
}, {
  name: 'iqi',
  rawurl: 'iqiyi.com/search/%s',
}]
