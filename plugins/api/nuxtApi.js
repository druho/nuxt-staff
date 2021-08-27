export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
        "foo": "bar"
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('https://my_api.com')

  // Inject to context as $api
  inject('nuxtApi', {
    getPlanets,
    getBeers,
    getPostById
  });

  function getSide() {
    return process.client ? 'client' : 'server';
  }
  async function getPlanets() {
    const { data } = await api.get("/apiNuxt/planets");
    console.log(`[plugin.nuxtApi.getPlanets - ${getSide()}] length: ${data.length}`)
    return data;
  }
  async function getBeers() {
    const { data } = await api.get("/apiNuxt/beers");
    console.log(`[plugin.nuxtApi.getBeers - ${getSide()}] length: ${data.length}`)
    return data;
  }
  async function getPostById(id) {
    const { data } = await api.get(`/apiNuxt/posts/${id}`);
    console.log(`[plugin.nuxtApi.getPostById - ${getSide()}] post.title: ${data.title}`)
    return data;
  }
}
