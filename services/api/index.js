import address from '~/services/api/address.js'
export default (apiCaller, apiInstances) => ({
  address: address(apiCaller),
  instances: apiInstances,
})