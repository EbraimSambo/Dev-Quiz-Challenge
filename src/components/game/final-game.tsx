import React from 'react'
import { Button } from '../ui/base-button'
import { Progress } from '../ui/progress'

interface Props {
    props: {
        gameFinished: boolean
        score: number,
        restartGame: () => void
        totalQuestions: number
    }
}

const FinalGame = ({ props }: Props) => {
    const { gameFinished, score, restartGame, totalQuestions } = props
    const percentage = Math.round((score / totalQuestions) * 100)

    let message = ""
    let emoji = ""
    let color = ""
    let title = ""
    let badge = ""

    if (gameFinished) {
        if (percentage >= 90) {
            title = "Senior Developer! 🔥"
            message = "Impressionante! Você domina os conceitos técnicos!"
            emoji = "🏆"
            color = "text-yellow-400"
            badge = "bg-gradient-to-r from-yellow-400 to-yellow-600"
        } else if (percentage >= 75) {
            title = "Mid-Level Developer! 💪"
            message = "Muito bem! Você tem um sólido conhecimento técnico!"
            emoji = "🥈"
            color = "text-gray-300"
            badge = "bg-gradient-to-r from-gray-400 to-gray-600"
        } else if (percentage >= 60) {
            title = "Junior Developer! 📈"
            message = "Bom trabalho! Continue estudando e praticando!"
            emoji = "🥉"
            color = "text-orange-400"
            badge = "bg-gradient-to-r from-orange-400 to-orange-600"
        } else if (percentage >= 40) {
            title = "Iniciante com Potencial! 🌱"
            message = "Você está no caminho certo! Foque nos fundamentos!"
            emoji = "📚"
            color = "text-blue-400"
            badge = "bg-gradient-to-r from-blue-400 to-blue-600"
        } else {
            title = "Hora de Estudar! 🤓"
            message = "Todo dev começou do zero. Vamos programar juntos!"
            emoji = "💡"
            color = "text-green-400"
            badge = "bg-gradient-to-r from-green-400 to-green-600"
        }
    }

    const getSkillLevel = () => {
        if (percentage >= 90) return "Senior"
        if (percentage >= 75) return "Pleno"
        if (percentage >= 60) return "Junior"
        if (percentage >= 40) return "Estagiário"
        return "Iniciante"
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="text-center space-y-6 p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-lg border border-gray-700">

                {/* Badge do nível */}
                <div className={`inline-block px-4 py-2 rounded-full text-white font-bold text-sm ${badge}`}>
                    {getSkillLevel()} Level
                </div>

                {/* Emoji principal */}
                <div className={`text-7xl ${color}`}>{emoji}</div>

                {/* Título e mensagem */}
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-white">{title}</h1>
                    <p className={`text-lg font-medium ${color}`}>{message}</p>
                </div>

                {/* Stats do resultado */}
                <div className="bg-gray-700 rounded-xl p-6 space-y-4 border border-gray-600">
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-600 rounded-lg p-3">
                            <div className="text-2xl font-bold text-white">{score}</div>
                            <div className="text-sm text-gray-300">Acertos</div>
                        </div>
                        <div className="bg-gray-600 rounded-lg p-3">
                            <div className="text-2xl font-bold text-white">{percentage}%</div>
                            <div className="text-sm text-gray-300">Performance</div>
                        </div>
                    </div>

                    <div className="text-lg text-white font-semibold">
                        {score}/{totalQuestions} perguntas corretas
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-600 rounded-full h-4 overflow-hidden">
                        <Progress
                            value={percentage}
                            className="h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 [&>div]:bg-white"
                        />
                    </div>
                </div>

                {/* Dica baseada na performance */}
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="text-sm text-gray-300">
                        <strong className="text-white">💡 Dica para evoluir:</strong>
                        <br />
                        {percentage >= 90 && "Continue se atualizando com as últimas tecnologias!"}
                        {percentage >= 75 && percentage < 90 && "Foque em conceitos avançados e arquitetura de sistemas."}
                        {percentage >= 60 && percentage < 75 && "Pratique mais algoritmos e estruturas de dados."}
                        {percentage >= 40 && percentage < 60 && "Estude os fundamentos: HTML, CSS, JavaScript."}
                        {percentage < 40 && "Comece com cursos básicos e pratique muito código!"}
                    </div>
                </div>

                {/* Botões de ação */}
                <div className="space-y-3">
                    <Button
                        onClick={restartGame}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                        🔄 Tentar Novamente
                    </Button>

                    <div className="text-xs text-gray-400">
                        🎯 Pratique mais para melhorar sua pontuação!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinalGame