import { hash } from 'ohash'
// import { getBaseUrl } from '~/utils/env-config'

interface FetchOptions {
  method: 'get' | 'post';
  params?: IObject;
  body?: IObject
}

const baseUrl = getBaseUrl()

export function fetch<T>(url: string, options: FetchOptions): Promise<ResponseData<T>> {
  return new Promise((resolve, reject) => {
    const requestUrl = baseUrl + url
    const key = hash(JSON.stringify(options) + url)
    useFetch(requestUrl, {...options, key}).then(({data, error}) => {
      if (error.value) {
        // console.log(error.value)
        throw createError({
          statusCode: error.value?.statusCode ?? 500,
          message: error.value?.statusMessage ?? error.value?.message ?? '未知错误'
        })
      } else {
        // console.log(requestUrl)
        // console.log(options.params)
        const value = data.value as ResponseData<T>
        // console.log(value)
        if (!value) {
          throw createError({statusCode: 500, message: '未知错误'})
        } else {
          if (value.code !== 200) {
            throw createError({statusCode: value.code, message: value.message})
          } else {
            resolve(value)
          }
        }
      }
    }).catch(err => {
      // console.log(err)
      reject(err)
      // throw createError({statusCode: 500, message: err.message ?? '未知错误'})
    })
  })
}



