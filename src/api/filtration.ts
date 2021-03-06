import BASE_URL from './baseUrl'

/**
 * 以下为获取搜索中区域下菜单及内容
 */

export type TareaType = 'area' | 'metro' | 'location'
export type TpriceType = 'total' | 'price'
export type TmoreType = 'dimension' |   // 面积
  'decoratio' |  // 装修
  'orientation' |  // 朝向
  'floor' | // 楼层
  'feature' |  // 特色
  'floorYear' |  // 楼龄
  'elevator' |  // 是否有电梯
  'purpose'  // 用途

export type TitemValue = 'default' | 'new' | 'totalLow' | 'totalHigh' | 'priceLow' | 'priceHigh' | 'areaLow' | 'areaHigh' | 'rentLow' | 'rentHigh' | 'lookLow' | 'lookHigh'

export interface ISearchQueryForm {
  area: { // 区域筛选项
    // 区域  |  地铁   | 附近
    type: TareaType
    value: string
  }
  price: { // 售价筛选项
    // 总价 | '单价'
    type: TpriceType
    value: string
  }
  rent: string  // 租金
  house: string // 户型
  more: ImoreQuery[]
  currentPage: number
  pageSize: number
  order: TitemValue  // 排序方式
}
export interface ImoreQuery {
  type: TmoreType
  value: string
}

export interface IfiltrationChild {
  id: string
  label: string
}

export interface IfiltrationItem {
  name: string
  value: string
  items: IfiltrationChild[]
}
// 获取搜索下区域相关菜单及内容
export function getFiltrationArea(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationArea`).then((res) => res.json())
}

// 获取售价下相关菜单及内容
export function getFiltrationPrice(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationPrice`).then((res) => res.json())
}

// 获取搜索下户型相关内容
export function getFiltrationHouse(): Promise<{ result: IfiltrationChild[] }> {
  return fetch(`${BASE_URL}/getFiltrationHouse`).then((res) => res.json())
}

export function getFiltrationMore(): Promise<{ result: IfiltrationItem[] }> {
  return fetch(`${BASE_URL}/getFiltrationMore`).then((res) => res.json())
}
