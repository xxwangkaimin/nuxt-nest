// 文章列表查询参数类型
export interface ArticlePageQuery extends PageQuery {
  title?: string
}

// 文章数据类型
export interface ArticleVo {
  articleColumn: {
    id: string;
    name: string
  };
  createTime: string;
  id: string;
  pic: string;
  publishTime: string;
  status: string
  title: string
}

// 文章列表响应数据类型
export type ArticleList = PageResult<ArticleVo>

// 文章详情数据类型
export interface ArticleInfo {
  articleColumn: {
    id: string;
    name: string
  }
  content: string;
  description: string;
  id: string;
  keywords: string;
  publishTime: string;
  title: string;
  view: number
}
