import city from '@/assets/city.json'

export default (apiCaller) => ({
  getState() {
    const provinces = []
    city.forEach((item) => {
      if (item.type === 'province') {
        provinces.push(item)
      }
    })
    return provinces
    // return apiCaller.get('/api/addresses/provinces', config)
  },
  getCity(id) {
    console.log(id)
    // return apiCaller.post('/api/addresses/cities/by-province-id', config)
    return city.filter(
      (item) =>
        item['province_id'] === id &&
        item.type !== 'province' &&
        item.type === 'city'
    )
  },
  getAddresses(config) {
    return apiCaller.post('api/addresses/person', config)
  },
  addAddress(config) {
    return apiCaller.post('/api/addresses/create', config)
  },
})
