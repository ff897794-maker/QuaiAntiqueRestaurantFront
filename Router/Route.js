export default class Route {
  constructor(url, title, pathHtml, pathJS = "", authorize) {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}
