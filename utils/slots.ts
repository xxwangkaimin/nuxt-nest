/**
 * 获取插槽子集元素的文本
 * @param children
 */
export const getSlotChildrenText = (children: any[]): string => children.map(node => {
  if (!node.children || typeof node.children === 'string') {
    return node.children || ''
  }else if (Array.isArray(node.children)) {
    return getSlotChildrenText(node.children)
  } else if (node.children.default) {
    return getSlotChildrenText(node.children.default())
  }
}).join('')
