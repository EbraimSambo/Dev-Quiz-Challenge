import React from 'react'
import { Button } from '../ui/base-button'

interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartGame = ({ setStart }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center space-y-8 p-8 bg-gray-800 rounded-2xl shadow-2xl max-w-lg border border-gray-700">
        <div className="space-y-4">
          <div className="text-6xl mb-4">💻</div>
          <h1 className="text-4xl font-bold text-white">Dev Quiz Challenge</h1>
          <p className="text-gray-300 text-lg">Teste seus conhecimentos técnicos em programação!</p>
        </div>
        
        <div className="space-y-4 text-left text-sm text-gray-300 bg-gray-700 p-6 rounded-xl">
          <h3 className="font-bold text-white text-center mb-3">🎯 Níveis de Dificuldade</h3>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span><strong>Nível 1-4:</strong> Fundamentos (HTML, CSS, JavaScript básico)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span><strong>Nível 5-8:</strong> Intermediário (Frameworks, Git, APIs)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span><strong>Nível 9-12:</strong> Avançado (Arquitetura, DevOps, Sistemas)</span>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <span>⚡</span>
            <span>Perguntas sobre programação, algoritmos e tecnologia</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🏆</span>
            <span>Desafie suas habilidades técnicas</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🎯</span>
            <span>Aprenda com cada pergunta</span>
          </div>
        </div>

        <Button
          onClick={() => setStart(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          🚀 Iniciar Challenge
        </Button>
        
        <div className="text-xs text-gray-500 mt-4">
          Preparado para testar seus skills? 🤔
        </div>
      </div>
    </div>
  )
}

export default StartGame