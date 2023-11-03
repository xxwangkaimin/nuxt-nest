import { fetch } from '~/utils/http'
import type { ArticleInfo, ArticleList, ArticlePageQuery } from '~/api/types'

/**
 * 获取文章列表
 * @param params
 */
export function getArticleList(params: ArticlePageQuery) {
  return fetch<ArticleList>('article/front/list', {method: 'get', params})
}

export function getArticleInfo(params: { id: string }) {
  return fetch<ArticleInfo>('article/front/info', {method: 'get', params})
}
