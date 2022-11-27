export interface Game {
  id: number
  name: string
  color: string
  vorgaenger: Game[]
}
