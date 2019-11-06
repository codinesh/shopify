const baseURL = '/api'

export interface IHttpResponse<T> extends Response {
  data?: T
}

export async function useFetch<T>(
  request: RequestInfo
): Promise<IHttpResponse<T>> {
  return new Promise((resolve, reject) => {
    let response: IHttpResponse<T>
    fetch(`${baseURL}${request}`)
      .then(res => {
        response = res
        return res.json()
      })
      .then(body => {
        if (response.ok) {
          response.data = body
          resolve(response)
        } else {
          reject(response)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
