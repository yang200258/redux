/**
 * @param obj The object to inspect.
 * @returns True if the argument appears to be a plain object.
 */
export default function isPlainObject(obj: any): boolean {
  // 使用typeof判断是否是object（null的typeof值也是object，所以添加特殊条件）
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  // 递归查找obj的原型对象（找到null的下一层）
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}
