export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (!url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(url.origin + "./index.html", request));
    }

    return env.ASSETS.fetch(request);
  }
};
