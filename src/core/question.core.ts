export enum Level {
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE",
    SIX = 'SIX',
    SEVEN = "SEVEN",
    EIGHT = "EIGHT",
    NINE = "NINE", // Novo nível adicionado
    TEN = "TEN",
    ELEVEN = "ELEVEN",
    TWELVE = 'TWELVE',
    THIRTEEN = "THIRTEEN",
    FOURTEEN = "FOURTEEN" // Novo nível adicionado
  }
export interface QuizResponse {
    text: string,
    isTrue: boolean
}
export default interface Quiz {
    level: Level
    question: string,
    responses: Array<QuizResponse>
}