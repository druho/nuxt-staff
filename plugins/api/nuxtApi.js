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
    getBeers2,
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
    const foo = await api.get("/apiNuxt/beers");
    console.log(JSON.stringify(foo));

    const { data } = await api.get("/apiNuxt/beers");
    console.log(`[plugin.nuxtApi.getBeers - ${getSide()}] length: ${data.length}`)
    return data;
  }
  async function getBeers2() {
    try {
      return unWrap(
        await api.get("/apiNuxt/beers6")
      )
    } catch (error) {
      handelError(error)
    }
  }

  async function getPostById(id) {
    const { data } = await api.get(`/apiNuxt/posts/${id}`);
    console.log(`[plugin.nuxtApi.getPostById - ${getSide()}] post.title: ${data.title}`)
    return data;
  }

  async function unWrap(response) {
    const { data, status, statusText } = response;
    const result = {
      data,
      error: {}
    }
    console.log(`unWrap: ${JSON.stringify(result)}`);
    return result;
  }
  function handelError(error) {
    console.log(`handelError: ${JSON.stringify(error)}`);

    return {
      data: {},
      error
      // status: 500,
      // statusText: error.message,
    }
  }

}
