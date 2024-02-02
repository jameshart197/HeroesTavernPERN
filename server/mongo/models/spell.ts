import Class from "./class"
import Subclass from "./subclass"

export default interface Spell {
  higher_level: any[]
  index: string
  name: string
  desc: string[]
  range: string
  components: string[]
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  damage: Damage
  dc: Dc
  school: School
  classes: Class[]
  subclasses: Subclass[]
  url: string
}

export interface Damage {
  damage_type: DamageType
  damage_at_character_level: DamageAtCharacterLevel
}

export interface DamageType {
  index: string
  name: string
  url: string
}

export interface DamageAtCharacterLevel {
  "1": string
  "5": string
  "11": string
  "17": string
}

export interface Dc {
  dc_type: DcType
  dc_success: string
}

export interface DcType {
  index: string
  name: string
  url: string
}

export interface School {
  index: string
  name: string
  url: string
}
