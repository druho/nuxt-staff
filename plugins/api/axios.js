export default function ({ $axios, redirect }) {

  $axios.onRequest(config => {
    // console.log('Making request to ' + JSON.stringify(config));

  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (error.response.status === 500) {
      redirect('/sorry')
    }
    if (code === 400) {
      redirect('/400')
    }
  })
}
