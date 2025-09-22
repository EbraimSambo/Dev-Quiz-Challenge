"use client"
import FinalGame from "@/components/game/final-game";
import Question from "@/components/game/quetions";
import StartGame from "@/components/game/start-game";
import { useGame } from "@/hooks/game/game.hook";

export default function Game() {
  const gameData = useGame()
  const {
    start,
    setStart,
    gameFinished,
    score,
    restartGame,
    totalAllQuestions
  } = gameData

  // Tela inicial
  if (!start) {
    return (
      <StartGame setStart={setStart} />
    )
  }

  // Tela de resultado final
  if (gameFinished) return (
    <FinalGame props={{
      gameFinished,
      restartGame,
      score,
      totalQuestions: totalAllQuestions
    }} />
  )

  // Tela do jogo
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100 p-4">
      <Question useGame={() => gameData} />
    </div>
  )
}