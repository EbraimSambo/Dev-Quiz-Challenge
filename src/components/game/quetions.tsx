import Quiz, { Level } from '@/core/question.core'
import React from 'react'

interface Props {
  useGame: () => {
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    level: Level;
    setLevel: React.Dispatch<React.SetStateAction<Level>>;
    question: Quiz;
    selectQuestion: (response: any) => void;
    score: number;
    selectedAnswer: any;
    showResult: boolean;
    currentQuestionIndex: number;
    totalQuestions: number;
    getLevelName: (level: Level) => string;
  }
}

const Question = ({ useGame }: Props) => {
  const {
    question,
    selectQuestion,
    score,
    selectedAnswer,
    showResult,
    currentQuestionIndex,
    totalQuestions,
    level,
    getLevelName
  } = useGame()

  const getAnswerStyle = (response: any) => {
    if (!showResult) {
      return "border-gray-600 bg-gray-700 hover:border-blue-400 hover:bg-gray-600 hover:shadow-lg transform hover:-translate-y-1"
    }
    if (response.isTrue) {
      return "border-green-500 bg-green-900 shadow-green-500/50"
    }
    if (selectedAnswer && selectedAnswer.text === response.text && !response.isTrue) {
      return "border-red-500 bg-red-900 shadow-red-500/50"
    }
    return "border-gray-600 bg-gray-700"
  }

  const getNumberStyle = (response: any) => {
    if (!showResult) {
      return "bg-gradient-to-r from-blue-600 to-purple-600"
    }
    if (response.isTrue) {
      return "bg-gradient-to-r from-green-600 to-emerald-600"
    }
    if (selectedAnswer && selectedAnswer.text === response.text && !response.isTrue) {
      return "bg-gradient-to-r from-red-600 to-red-700"
    }
    return "bg-gray-500"
  }

  const getLevelColor = () => {
    switch(level) {
      case Level.ONE: case Level.TWO: case Level.THREE: case Level.FOUR:
        return "text-green-400"
      case Level.FIVE: case Level.SIX: case Level.SEVEN: case Level.EIGHT:
        return "text-yellow-400"
      default:
        return "text-red-400"
    }
  }

  const getLevelIcon = () => {
    switch(level) {
      case Level.ONE: case Level.TWO: case Level.THREE: case Level.FOUR:
        return "🟢"
      case Level.FIVE: case Level.SIX: case Level.SEVEN: case Level.EIGHT:
        return "🟡"
      default:
        return "🔴"
    }
  }

  return (
    <div className='max-w-4xl w-full p-8 space-y-6 rounded-2xl shadow-2xl bg-gray-800 border border-gray-700'>
      {/* Header com informações do jogo */}
      <div className="flex justify-between items-center text-sm bg-gray-700 rounded-lg p-4 border border-gray-600">
        <div className={`flex items-center gap-2 font-semibold ${getLevelColor()}`}>
          <span>{getLevelIcon()}</span>
          <span>{getLevelName(level)}</span>
        </div>
        <div className="text-gray-300 font-medium">
          <span className="text-blue-400">Q{currentQuestionIndex}</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">{totalQuestions}</span>
        </div>
        <div className="text-purple-400 font-semibold">
          💎 Score: <span className="text-white">{score}</span>
        </div>
      </div>

      {/* Pergunta */}
      <div className="text-center space-y-4">
        <div className="text-4xl">💻</div>
        <h2 className="font-bold text-2xl text-white leading-tight px-4">
          {question.question}
        </h2>
      </div>

      {/* Respostas */}
      <div className="space-y-4">
        {question.responses.map((response, index) => (
          <div
            className={`flex items-center gap-4 border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 shadow-lg ${getAnswerStyle(response)} ${showResult ? 'cursor-default' : 'hover:scale-[1.02]'}`}
            key={response.text}
            onClick={() => !showResult && selectQuestion(response)}
          >
            <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 shadow-lg ${getNumberStyle(response)}`}>
              {String.fromCharCode(65 + index)}
            </div>
            <h3 className="font-semibold text-lg text-white flex-1 leading-relaxed">
              {response.text}
            </h3>
            {showResult && response.isTrue && (
              <div className="text-green-400 font-bold text-2xl animate-bounce">✅</div>
            )}
            {showResult && selectedAnswer?.text === response.text && !response.isTrue && (
              <div className="text-red-400 font-bold text-2xl">❌</div>
            )}
          </div>
        ))}
      </div>

      {/* Feedback */}
      {showResult && (
        <div className="text-center py-6 bg-gray-700 rounded-xl border border-gray-600">
          {selectedAnswer?.isTrue ? (
            <div className="space-y-2">
              <div className="text-green-400 font-bold text-xl animate-pulse">
                🎉 Correto! Você sabe programar!
              </div>
              <div className="text-gray-300 text-sm">
                Próxima pergunta em breve...
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-red-400 font-bold text-xl">
                😅 Ops! Não foi dessa vez...
              </div>
              <div className="text-gray-300 text-sm">
                Continue codando! Próxima pergunta em breve...
              </div>
            </div>
          )}
        </div>
      )}

      {/* Progress indicator visual */}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${(currentQuestionIndex / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default Question