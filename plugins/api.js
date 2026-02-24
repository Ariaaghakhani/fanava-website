import createApi from '@/services/api/index.js'
// import { cachedToken } from '@/plugins/auth.client'

const apiPromisesCache = new Map()

export const apiCaller = (apiCallerInstances) => ({
  get(url, config = {}) {
    const instance = config.instance || 'default'
    const apiCallerInstance = apiCallerInstances[instance]

    const cacheKey = url + (config.params ? JSON.stringify(config.params) : '')

    if (apiPromisesCache.has(cacheKey)) {
      return apiPromisesCache.get(cacheKey)
    }

    const promise = apiCallerInstance(url, {
      method: 'GET',
      params: config.params || undefined,
    })

    apiPromisesCache.set(cacheKey, promise)
    promise.finally(() => {
      apiPromisesCache.delete(cacheKey)
    })

    return promise
  },

  post(url, config = {}) {
    const instance = config.instance || 'default'
    const apiCallerInstance = apiCallerInstances[instance]

    return apiCallerInstance(url, {
      method: 'POST',
      body: config.data || undefined,
      params: config.params || undefined,
    })
  },

  put(url, config = {}) {
    const instance = config.instance || 'default'
    const apiCallerInstance = apiCallerInstances[instance]

    return apiCallerInstance(url, {
      method: 'PUT',
      body: config.data || undefined,
      params: config.params || undefined,
    })
  },

  patch(url, config = {}) {
    const instance = config.instance || 'default'
    const apiCallerInstance = apiCallerInstances[instance]

    return apiCallerInstance(url, {
      method: 'PATCH',
      body: config.data || undefined,
      params: config.params || undefined,
    })
  },

  delete(url, config = {}) {
    const instance = config.instance || 'default'
    const apiCallerInstance = apiCallerInstances[instance]

    return apiCallerInstance(url, {
      method: 'DELETE',
      body: config.data || undefined,
      params: config.params || undefined,
    })
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const onResponse = ({ response }) => {
    if (response?.ok) {
      response._data = {
        data: response._data,
      }
    }
  }

  const onResponseError = ({ response }) => {
    if (response?._data) {
      response.data = response._data
      delete response._data
    }
  }

  const defaultInstance = $fetch.create({
    baseURL: runtimeConfig.public.BACKEND_URL,
    onRequest({ request, options }) {
      // Set headers directly in options
      const headers = {
        'ngrok-skip-browser-warning': '69420',
      }

      // Add token on client side
      // if (import.meta.client && cachedToken?.value) {
      //   headers['Authorization'] = `Bearer ${cachedToken.value}` // Added Bearer prefix too
      // }

      options.headers = {
        ...options.headers,
        ...headers,
      }
    },
    onResponse,
    onResponseError,
  })

  const cmsInstance = $fetch.create({
    baseURL: runtimeConfig.public.CMS_URL,
    onRequest({ options }) {
      if (import.meta.server) {
        options.headers = {
          ...options.headers,
          'Strapi-Response-Format': 'v4',
        }
      }
    },
    onResponse,
    onResponseError,
  })

  const apiInstances = {
    default: defaultInstance,
    cms: cmsInstance,
  }

  nuxtApp.provide('api', createApi(apiCaller(apiInstances), apiInstances))
})
