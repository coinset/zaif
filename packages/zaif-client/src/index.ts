import a from 'node-fetch'

a('https://api.zaif.jp/api/1/currencies/btc').then(async (e) => {
  console.log(await e.json())
})
