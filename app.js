function randoma(min, max) {
    return parseInt(Math.random() * ((max - min) + min))
}
async function getApiData(url, id = '') {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const toastEl = document.getElementById('myToast');

const toast = new bootstrap.Toast(toastEl, {
  autohide: false,
});

document.getElementById('pedir').addEventListener('click', async (e) => {
    const conselho = await getApiData('https://api.adviceslip.com/advice')
    document.getElementById('mensagem').innerHTML=conselho.slip.advice
    toast.show();
});