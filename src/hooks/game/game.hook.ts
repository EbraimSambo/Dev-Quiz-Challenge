import Quiz, { Level, QuizResponse } from "@/core/question.core"
import { questions } from "@/json/questions"
import React from "react"

export const useGame = () => {
    const [start, setStart] = React.useState(false)
    const [level, setLevel] = React.useState<Level>(Level.ONE)
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [gameFinished, setGameFinished] = React.useState(false)
    const [selectedAnswer, setSelectedAnswer] = React.useState<QuizResponse | null>(null)
    const [showResult, setShowResult] = React.useState(false)
  
    const levelOrder = React.useMemo(() => [
      Level.ONE,
      Level.TWO,
      Level.THREE,
      Level.FOUR,
      Level.FIVE,
      Level.SIX,
      Level.SEVEN,
      Level.EIGHT,
      Level.NINE,
      Level.TEN,
      Level.ELEVEN,
      Level.TWELVE,
      Level.THIRTEEN,
      Level.FOURTEEN
    ], [])
  
    // Filtrar perguntas por nível
    const levelQuestions = React.useMemo(() => {
      return questions.filter(q => q.level === level)
    }, [level])
  
    // Embaralhar as perguntas do nível atual para randomização por sessão
    const shuffledQuestions = React.useMemo(() => {
      return [...levelQuestions].sort(() => Math.random() - 0.5)
    }, [levelQuestions])
  
    // Pergunta atual baseada no índice
    const currentQuestion = shuffledQuestions[currentQuestionIndex] || questions[0]
  
    // Embaralhar as respostas da pergunta atual para evitar previsibilidade
    const displayedQuestion = React.useMemo(() => {
      if (!currentQuestion) return questions[0];
      return {
        ...currentQuestion,
        responses: [...currentQuestion.responses].sort(() => Math.random() - 0.5)
      }
    }, [currentQuestion])
  
    const selectQuestion = (response: QuizResponse) => {
      if (showResult) return // Evita múltiplos cliques
  
      setSelectedAnswer(response)
      setShowResult(true)
  
      if (response.isTrue) {
        setScore(prev => prev + 1)
      }
  
      // Avançar para próxima pergunta após 2 segundos
      setTimeout(() => {
        nextQuestion()
      }, 2000)
    }
  
    const nextQuestion = () => {
      setSelectedAnswer(null)
      setShowResult(false)
  
      if (currentQuestionIndex + 1 < shuffledQuestions.length) {
        setCurrentQuestionIndex(prev => prev + 1)
      } else {
        // Avançar para próximo nível
        const currentLevelIndex = levelOrder.indexOf(level)
        if (currentLevelIndex + 1 < levelOrder.length) {
          setLevel(levelOrder[currentLevelIndex + 1])
          setCurrentQuestionIndex(0)
        } else {
          // Fim do jogo
          setGameFinished(true)
        }
      }
    }
  
    const restartGame = () => {
      setStart(false)
      setLevel(Level.ONE)
      setCurrentQuestionIndex(0)
      setScore(0)
      setGameFinished(false)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  
    const getLevelName = (level: Level) => {
      switch(level) {
        case Level.ONE: return "Nível 1"
        case Level.TWO: return "Nível 2"  
        case Level.THREE: return "Nível 3"
        case Level.FOUR: return "Nível 4"
        case Level.FIVE: return "Nível 5"
        case Level.SIX: return "Nível 6"
        case Level.SEVEN: return "Nível 7"
        case Level.EIGHT: return "Nível 8"
        case Level.NINE: return "Nível 9" // Novo
        case Level.TEN: return "Nível 10" // Ajustado
        case Level.ELEVEN: return "Nível 11" // Ajustado
        case Level.TWELVE: return "Nível 12" // Ajustado
        case Level.THIRTEEN: return "Nível 13" // Ajustado
        case Level.FOURTEEN: return "Nível 14" // Novo
        default: return "Nível 1"
      }
    }
  
    return {
      start,
      setStart,
      level,
      setLevel,
      question: displayedQuestion,
      setQuestion: () => {}, // Deprecated - controle agora é interno
      selectQuestion,
      score,
      gameFinished,
      selectedAnswer,
      showResult,
      restartGame,
      currentQuestionIndex: currentQuestionIndex + 1,
      totalQuestions: shuffledQuestions.length,
      totalAllQuestions: questions.length,
      getLevelName
    }
  }