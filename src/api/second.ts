import BASE_URL from './baseUrl'
import { ISearchQueryForm } from '@/api/filtration'
/**
 * 以下为二手房页面接口
 */

export function getSecondHouses(queryForm: ISearchQueryForm): Promise<{ result: IhouseItem[] }> {
  return fetch(`${BASE_URL}/getSecondHouses`).then(res => res.json())
}

/**
 * 二手房详情
 */

export interface IsecondHouseInfo {
  traits: string[]
  title: string
  total: string
  type: string
  acreage: number
  price: number
  budget: string
  orientation: '东' | '南' | '西' | '北'
  floor: number
  decoration: string
  number: number
  entrustStartTime: string
  entrustEndTime: string
  subway: string
}

export interface IsecondHouseBroker {
  id: string
  avatar: string
  name: string
  score: number
  evaluatePeople: number
  post: string
  affiliation: string
  relation: string
  phone: number
}

export interface IsecondHouseEvaluate {
  id: string
  title: string
  remark: string
}

export interface IsecondHouseShool {
  id: string
  name: string
  distance: string
  level: string
}

export interface IsecondHouseGarden {
  name: string
  price: number
  year: number
  category: string
  area: string
}

export interface IsecondHouseLoanItem {
  name: string
  value: string
  interest?: string
  proportion: string
}

export interface IsecondHouseTrendItem {
  month: number
  average: number
  hangtag: number
}

export interface IsecondHouseTrend {
  houseCount: number
  trend: string
  items: IsecondHouseTrendItem[]
}
export interface IsecondHouseDetail {
  id: string
  imgs: string[]
  info: IsecondHouseInfo
  brokers: IsecondHouseBroker[]
  evaluates: IsecondHouseEvaluate[]
  schools: IsecondHouseShool[]
  garden: IsecondHouseGarden
  loans: IsecondHouseLoanItem[]
  trend: IsecondHouseTrend
}

export function getSecondDetail(id: string): Promise<{ result: IsecondHouseDetail }> {
  return fetch(`${BASE_URL}/getSecondDetail/${id}`).then(res => res.json())
}
