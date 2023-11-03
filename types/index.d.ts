declare global {
  interface IObject {
    [key: string]: any
  }

  /**
   * 分页查询参数基础类型
   */
  interface PageQuery {
    /**
     * 页码
     */
    index: number;
    /**
     * 没有条目大小
     */
    size: number
  }

  /**
   * 分页响应数据类型
   */
  interface PageResult<T> {
    /**
     * 数据列表
     */
    list: T[],
    /**
     * 总页数
     */
    pages: number;
    /**
     * 总条数
     */
    total: number
  }

  /**
   * 网络请求响应数据类型
   */
  interface ResponseData<T> {
    data: T;
    code: number;
    message: string
  }

  /**
   * 错误数据类型
   */
  interface ErrorData {
    message: string;
    stack: string;
    statusCode: number;
    url: string
  }

  /**
   * 分享参数数据类型
   */
  interface ShareOptions {
    title: string;
    desc: string;
    link: string;
    imgUrl: string
  }
}
declare module '#app' {
  interface NuxtApp {
    $ui: any
  }
  interface AppConfig {
    ui: {
      icons: {
        dark: string;
        light: string;
        search: string;
        external: string;
        chevron: string;
        hash: string
      },
      pagination: {
        default: {
          pageCount: number,
          preButton: {
            icon: string
          },
          nextButton: {
            icon: string
          }
        }
      }
    }
  }
}
export {}
