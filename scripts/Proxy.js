class Proxy {
  constructor() {
    this.PROXY_SEO_URL = 'https://nodejs-nmd-crawler.herokuapp.com/proxy/seo?url=';
  }

  static async getSEOFromUrl(url) {
    const response = await fetch(`${this.PROXY_SEO_URL}${url}`);
    const jsonData = await response.json();
    return jsonData;
  }; 
};

export default Proxy;
