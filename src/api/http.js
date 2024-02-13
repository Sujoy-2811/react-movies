import conf from "../conf/conf.js";

export class Http {
  //get Trending
  async getTrending(params) {
    //vars
    const url = conf.url + "trending/all/day";
    const headers = {
      Authorization: "Bearer " + conf.tokenKey,
    };

    //fetch
    const data = await fetch(url, {
      headers,
      params,
    });
    if (!data.ok) {
      const err = new Error();
      err.message = await data.json();
      throw err;
    }
    const res = await data.json();
    return res;
  }
}

const http = new Http();
export default http;
