import Quiz, { Level } from "@/core/question.core";

export const questions: Array<Quiz> = [
  // NÍVEL 1 - Fundamentos de Programação
  {
    level: Level.ONE,
    question: "Qual é a complexidade de tempo de busca em um array não ordenado?",
    responses: [
      { text: "O(1)", isTrue: false },
      { text: "O(log n)", isTrue: false },
      { text: "O(n)", isTrue: true },
      { text: "O(n²)", isTrue: false },
    ],
  },
  {
    level: Level.TWO,
    question: "Em JavaScript, qual é o resultado de: typeof null?",
    responses: [
      { text: "null", isTrue: false },
      { text: "undefined", isTrue: false },
      { text: "object", isTrue: true },
      { text: "boolean", isTrue: false },
    ],
  },
  {
    level: Level.THREE,
    question: "Qual método HTTP é idempotente?",
    responses: [
      { text: "POST", isTrue: false },
      { text: "PUT", isTrue: true },
      { text: "PATCH", isTrue: false },
      { text: "DELETE", isTrue: false },
    ],
  },
  {
    level: Level.FOUR,
    question: "Em SQL, qual comando é usado para remover duplicatas?",
    responses: [
      { text: "UNIQUE", isTrue: false },
      { text: "DISTINCT", isTrue: true },
      { text: "REMOVE", isTrue: false },
      { text: "FILTER", isTrue: false },
    ],
  },

  // NÍVEL 2 - Conceitos Intermediários
  {
    level: Level.FIVE,
    question: "O que é um 'closure' em JavaScript?",
    responses: [
      { text: "Uma função que fecha o programa", isTrue: false },
      { text: "Uma função que acessa variáveis de seu escopo externo", isTrue: true },
      { text: "Uma função sem parâmetros", isTrue: false },
      { text: "Uma função recursiva", isTrue: false },
    ],
  },
  {
    level: Level.SIX,
    question: "Em Git, qual comando desfaz o último commit mantendo as mudanças?",
    responses: [
      { text: "git revert HEAD", isTrue: false },
      { text: "git reset --hard HEAD~1", isTrue: false },
      { text: "git reset --soft HEAD~1", isTrue: true },
      { text: "git checkout HEAD~1", isTrue: false },
    ],
  },
  {
    level: Level.SEVEN,
    question: "Qual padrão de design é usado para criar uma única instância de uma classe?",
    responses: [
      { text: "Factory", isTrue: false },
      { text: "Observer", isTrue: false },
      { text: "Singleton", isTrue: true },
      { text: "Strategy", isTrue: false },
    ],
  },
  {
    level: Level.EIGHT,
    question: "Em Docker, o que é um 'container'?",
    responses: [
      { text: "Uma máquina virtual", isTrue: false },
      { text: "Uma instância isolada de uma aplicação", isTrue: true },
      { text: "Um tipo de banco de dados", isTrue: false },
      { text: "Um protocolo de rede", isTrue: false },
    ],
  },

  // NÍVEL 3 - Conceitos Avançados
  {
    level: Level.TEN,
    question: "O que é o 'Event Loop' em Node.js?",
    responses: [
      { text: "Um loop infinito que trava a aplicação", isTrue: false },
      { text: "Mecanismo que permite operações não-bloqueantes", isTrue: true },
      { text: "Uma biblioteca para eventos", isTrue: false },
      { text: "Um tipo de middleware", isTrue: false },
    ],
  },
  {
    level: Level.ELEVEN,
    question: "Em arquitetura de microsserviços, o que é o 'Circuit Breaker' pattern?",
    responses: [
      { text: "Um padrão para quebrar código", isTrue: false },
      { text: "Proteção contra falhas em cascata", isTrue: true },
      { text: "Um tipo de load balancer", isTrue: false },
      { text: "Um padrão de autenticação", isTrue: false },
    ],
  },
  {
    level: Level.TWELVE,
    question: "Qual é a principal diferença entre TCP e UDP?",
    responses: [
      { text: "TCP é mais rápido que UDP", isTrue: false },
      { text: "UDP garante entrega ordenada, TCP não", isTrue: false },
      { text: "TCP é confiável, UDP é mais rápido", isTrue: true },
      { text: "Não há diferença significativa", isTrue: false },
    ],
  },
  {
    level: Level.THIRTEEN,
    question: "Em sistemas distribuídos, o que representa o 'CAP Theorem'?",
    responses: [
      { text: "Consistency, Availability, Performance", isTrue: false },
      { text: "Consistency, Availability, Partition tolerance", isTrue: true },
      { text: "Concurrency, Availability, Performance", isTrue: false },
      { text: "Cache, API, Performance", isTrue: false },
    ],
  },

  // Perguntas Adicionais para cada nível
  {
    level: Level.ONE,
    question: "Qual é a diferença principal entre '==' e '===' em JavaScript?",
    responses: [
      { text: "Não há diferença", isTrue: false },
      { text: "=== compara tipo e valor, == só valor", isTrue: true },
      { text: "== é mais rápido", isTrue: false },
      { text: "=== é deprecated", isTrue: false },
    ],
  },
  {
    level: Level.TWO,
    question: "O que significa 'API REST'?",
    responses: [
      { text: "Application Programming Interface Restful", isTrue: false },
      { text: "Representational State Transfer", isTrue: true },
      { text: "Remote Execute State Transfer", isTrue: false },
      { text: "Rapid Execute State Transfer", isTrue: false },
    ],
  },
  {
    level: Level.THREE,
    question: "Em programação orientada a objetos, o que é 'encapsulamento'?",
    responses: [
      { text: "Criar muitas classes", isTrue: false },
      { text: "Ocultar detalhes internos de implementação", isTrue: true },
      { text: "Herdar de várias classes", isTrue: false },
      { text: "Usar apenas métodos estáticos", isTrue: false },
    ],
  },
  {
    level: Level.FOUR,
    question: "Qual porta padrão usa o protocolo HTTPS?",
    responses: [
      { text: "80", isTrue: false },
      { text: "8080", isTrue: false },
      { text: "443", isTrue: true },
      { text: "22", isTrue: false },
    ],
  },

  // Nível 2 - Mais perguntas
  {
    level: Level.FIVE,
    question: "O que é 'hoisting' em JavaScript?",
    responses: [
      { text: "Elevação de declarações para o topo do escopo", isTrue: true },
      { text: "Uma biblioteca de animações", isTrue: false },
      { text: "Um método de otimização", isTrue: false },
      { text: "Um padrão de design", isTrue: false },
    ],
  },
  {
    level: Level.SIX,
    question: "Em React, o que são 'hooks'?",
    responses: [
      { text: "Funções que permitem usar state em componentes funcionais", isTrue: true },
      { text: "Componentes de classe especiais", isTrue: false },
      { text: "Eventos do DOM", isTrue: false },
      { text: "Métodos de estilização", isTrue: false },
    ],
  },
  {
    level: Level.SEVEN,
    question: "O que é 'Big O notation'?",
    responses: [
      { text: "Uma forma de medir performance de algoritmos", isTrue: true },
      { text: "Uma linguagem de programação", isTrue: false },
      { text: "Um tipo de banco de dados", isTrue: false },
      { text: "Um protocolo de rede", isTrue: false },
    ],
  },

  // Nível 3 - Mais perguntas avançadas
  {
    level: Level.TEN,
    question: "Em DevOps, o que significa 'CI/CD'?",
    responses: [
      { text: "Continuous Integration/Continuous Deployment", isTrue: true },
      { text: "Code Integration/Code Deployment", isTrue: false },
      { text: "Container Integration/Container Deployment", isTrue: false },
      { text: "Client Integration/Client Deployment", isTrue: false },
    ],
  },
  {
    level: Level.ELEVEN,
    question: "O que é 'sharding' em bancos de dados?",
    responses: [
      { text: "Backup de dados", isTrue: false },
      { text: "Particionamento horizontal de dados", isTrue: true },
      { text: "Compressão de dados", isTrue: false },
      { text: "Encriptação de dados", isTrue: false },
    ],
  },
  {
    level: Level.TWELVE,
    question: "Em Kubernetes, o que é um 'Pod'?",
    responses: [
      { text: "A menor unidade deployável", isTrue: true },
      { text: "Um tipo de load balancer", isTrue: false },
      { text: "Um banco de dados", isTrue: false },
      { text: "Um protocolo de rede", isTrue: false },
    ],
  },

  // Novas perguntas adicionadas para mais "subníveis" (mais questões por nível)
  // Cada nível agora tem pelo menos 3 questões
  {
    level: Level.ONE,
    question: "O que é um algoritmo?",
    responses: [
      { text: "Uma linguagem de programação", isTrue: false },
      { text: "Uma sequência de passos para resolver um problema", isTrue: true },
      { text: "Um tipo de dado", isTrue: false },
      { text: "Um erro no código", isTrue: false },
    ],
  },
  {
    level: Level.TWO,
    question: "Qual é o propósito do 'let' em JavaScript?",
    responses: [
      { text: "Declarar variáveis globais", isTrue: false },
      { text: "Declarar variáveis com escopo de bloco", isTrue: true },
      { text: "Declarar constantes", isTrue: false },
      { text: "Declarar funções", isTrue: false },
    ],
  },
  {
    level: Level.THREE,
    question: "O que significa HTTP status 404?",
    responses: [
      { text: "Sucesso", isTrue: false },
      { text: "Não encontrado", isTrue: true },
      { text: "Erro interno", isTrue: false },
      { text: "Redirecionamento", isTrue: false },
    ],
  },
  {
    level: Level.FOUR,
    question: "O que é uma chave primária em SQL?",
    responses: [
      { text: "Uma coluna única que identifica registros", isTrue: true },
      { text: "Uma tabela temporária", isTrue: false },
      { text: "Um tipo de join", isTrue: false },
      { text: "Um índice secundário", isTrue: false },
    ],
  },
  {
    level: Level.FIVE,
    question: "O que é currying em programação funcional?",
    responses: [
      { text: "Transformar função de múltiplos args em sequência de funções", isTrue: true },
      { text: "Uma técnica de loop", isTrue: false },
      { text: "Um padrão de erro", isTrue: false },
      { text: "Uma biblioteca JS", isTrue: false },
    ],
  },
  {
    level: Level.SIX,
    question: "Qual comando Git mescla branches?",
    responses: [
      { text: "git push", isTrue: false },
      { text: "git merge", isTrue: true },
      { text: "git pull", isTrue: false },
      { text: "git commit", isTrue: false },
    ],
  },
  {
    level: Level.SEVEN,
    question: "O que é o padrão Observer?",
    responses: [
      { text: "Notificar objetos sobre mudanças de estado", isTrue: true },
      { text: "Criar instâncias únicas", isTrue: false },
      { text: "Abstrair criação de objetos", isTrue: false },
      { text: "Definir estratégias intercambiáveis", isTrue: false },
    ],
  },
  {
    level: Level.EIGHT,
    question: "O que é uma imagem Docker?",
    responses: [
      { text: "Um arquivo executável com dependências", isTrue: true },
      { text: "Uma máquina virtual completa", isTrue: false },
      { text: "Um script de build", isTrue: false },
      { text: "Um repositório Git", isTrue: false },
    ],
  },
  {
    level: Level.EIGHT,
    question: "Qual comando constrói uma imagem Docker?",
    responses: [
      { text: "docker run", isTrue: false },
      { text: "docker build", isTrue: true },
      { text: "docker push", isTrue: false },
      { text: "docker compose", isTrue: false },
    ],
  },
  {
    level: Level.TEN,
    question: "O que é serverless computing?",
    responses: [
      { text: "Executar código sem gerenciar servidores", isTrue: true },
      { text: "Uma arquitetura sem backend", isTrue: false },
      { text: "Um tipo de banco de dados", isTrue: false },
      { text: "Uma ferramenta de deploy", isTrue: false },
    ],
  },
  {
    level: Level.ELEVEN,
    question: "O que é API Gateway em microsserviços?",
    responses: [
      { text: "Ponto de entrada único para APIs", isTrue: true },
      { text: "Um banco de dados distribuído", isTrue: false },
      { text: "Um load balancer simples", isTrue: false },
      { text: "Um pattern de autenticação", isTrue: false },
    ],
  },
  {
    level: Level.TWELVE,
    question: "O que é WebSocket?",
    responses: [
      { text: "Protocolo para comunicação bidirecional full-duplex", isTrue: true },
      { text: "Um método HTTP", isTrue: false },
      { text: "Um tipo de banco NoSQL", isTrue: false },
      { text: "Uma biblioteca JS", isTrue: false },
    ],
  },
  {
    level: Level.THIRTEEN,
    question: "O que é eventual consistency?",
    responses: [
      { text: "Dados se tornam consistentes ao longo do tempo", isTrue: true },
      { text: "Consistência imediata em todos os nós", isTrue: false },
      { text: "Um tipo de erro", isTrue: false },
      { text: "Uma métrica de performance", isTrue: false },
    ],
  },
  // Novas perguntas adicionadas para aumentar a variedade e evitar previsibilidade
  // Adicionadas mais questões em níveis existentes e novo nível NINE
  {
    level: Level.ONE,
    question: "O que é uma variável em programação?",
    responses: [
      { text: "Um contêiner para armazenar dados", isTrue: true },
      { text: "Uma função que executa ações", isTrue: false },
      { text: "Um loop repetitivo", isTrue: false },
      { text: "Um erro de sintaxe", isTrue: false },
    ],
  },
  {
    level: Level.ONE,
    question: "Qual estrutura de dados usa LIFO?",
    responses: [
      { text: "Fila", isTrue: false },
      { text: "Pilha", isTrue: true },
      { text: "Árvore", isTrue: false },
      { text: "Grafo", isTrue: false },
    ],
  },
  {
    level: Level.TWO,
    question: "O que faz o operador '&&' em JavaScript?",
    responses: [
      { text: "Concatenação de strings", isTrue: false },
      { text: "Operador lógico AND", isTrue: true },
      { text: "Atribuição de valor", isTrue: false },
      { text: "Comparação estrita", isTrue: false },
    ],
  },
  {
    level: Level.TWO,
    question: "Qual é o tipo de dado para texto em JS?",
    responses: [
      { text: "Number", isTrue: false },
      { text: "String", isTrue: true },
      { text: "Boolean", isTrue: false },
      { text: "Array", isTrue: false },
    ],
  },
  {
    level: Level.THREE,
    question: "O que é herança em OOP?",
    responses: [
      { text: "Reutilização de código de classes base", isTrue: true },
      { text: "Criação de múltiplas instâncias", isTrue: false },
      { text: "Ocultação de dados", isTrue: false },
      { text: "Polimorfismo de métodos", isTrue: false },
    ],
  },
  {
    level: Level.THREE,
    question: "Qual método HTTP cria um recurso?",
    responses: [
      { text: "GET", isTrue: false },
      { text: "POST", isTrue: true },
      { text: "PUT", isTrue: false },
      { text: "DELETE", isTrue: false },
    ],
  },
  {
    level: Level.FOUR,
    question: "O que faz o comando JOIN em SQL?",
    responses: [
      { text: "Combina tabelas baseadas em colunas relacionadas", isTrue: true },
      { text: "Deleta registros", isTrue: false },
      { text: "Atualiza valores", isTrue: false },
      { text: "Cria índices", isTrue: false },
    ],
  },
  {
    level: Level.FOUR,
    question: "Qual é o comando para inserir dados em SQL?",
    responses: [
      { text: "UPDATE", isTrue: false },
      { text: "INSERT", isTrue: true },
      { text: "SELECT", isTrue: false },
      { text: "DELETE", isTrue: false },
    ],
  },
  {
    level: Level.FIVE,
    question: "O que é uma promessa (Promise) em JS?",
    responses: [
      { text: "Objeto que representa o resultado futuro de uma operação assíncrona", isTrue: true },
      { text: "Uma função síncrona", isTrue: false },
      { text: "Um tipo de loop", isTrue: false },
      { text: "Um erro de código", isTrue: false },
    ],
  },
  {
    level: Level.FIVE,
    question: "O que faz o método map() em arrays?",
    responses: [
      { text: "Cria um novo array transformando cada elemento", isTrue: true },
      { text: "Remove elementos", isTrue: false },
      { text: "Ordena o array", isTrue: false },
      { text: "Filtra elementos", isTrue: false },
    ],
  },
  {
    level: Level.SIX,
    question: "Qual comando Git cria uma nova branch?",
    responses: [
      { text: "git branch", isTrue: true },
      { text: "git commit", isTrue: false },
      { text: "git merge", isTrue: false },
      { text: "git push", isTrue: false },
    ],
  },
  {
    level: Level.SIX,
    question: "O que é um rebase no Git?",
    responses: [
      { text: "Reaplicar commits em cima de outra base", isTrue: true },
      { text: "Deletar uma branch", isTrue: false },
      { text: "Mesclar branches", isTrue: false },
      { text: "Atualizar repositório remoto", isTrue: false },
    ],
  },
  {
    level: Level.SEVEN,
    question: "O que é o padrão Factory?",
    responses: [
      { text: "Cria objetos sem expor a lógica de criação", isTrue: true },
      { text: "Observa mudanças de estado", isTrue: false },
      { text: "Garante uma única instância", isTrue: false },
      { text: "Define algoritmos intercambiáveis", isTrue: false },
    ],
  },
  {
    level: Level.SEVEN,
    question: "O que é polimorfismo?",
    responses: [
      { text: "Capacidade de objetos de diferentes classes responderem ao mesmo método", isTrue: true },
      { text: "Herança múltipla", isTrue: false },
      { text: "Encapsulamento de dados", isTrue: false },
      { text: "Abstração de classes", isTrue: false },
    ],
  },
  {
    level: Level.EIGHT,
    question: "O que é Docker Compose?",
    responses: [
      { text: "Ferramenta para definir e rodar multi-containers", isTrue: true },
      { text: "Um comando para build de imagens", isTrue: false },
      { text: "Um repositório de imagens", isTrue: false },
      { text: "Um tipo de container", isTrue: false },
    ],
  },
  {
    level: Level.EIGHT,
    question: "Qual comando inicia um container Docker?",
    responses: [
      { text: "docker start", isTrue: false },
      { text: "docker run", isTrue: true },
      { text: "docker build", isTrue: false },
      { text: "docker push", isTrue: false },
    ],
  },
  // Novo nível NINE adicionado para conceitos intermediários-avançados
  {
    level: Level.NINE,
    question: "O que é IaC (Infrastructure as Code)?",
    responses: [
      { text: "Prática de gerenciar infraestrutura através de código", isTrue: true },
      { text: "Uma linguagem de programação", isTrue: false },
      { text: "Um tipo de banco de dados", isTrue: false },
      { text: "Um protocolo de rede", isTrue: false },
    ],
  },
  {
    level: Level.NINE,
    question: "O que é um middleware em Express.js?",
    responses: [
      { text: "Função que tem acesso ao request e response", isTrue: true },
      { text: "Um tipo de banco de dados", isTrue: false },
      { text: "Uma rota HTTP", isTrue: false },
      { text: "Um erro de servidor", isTrue: false },
    ],
  },
  {
    level: Level.NINE,
    question: "O que é JWT?",
    responses: [
      { text: "JSON Web Token para autenticação", isTrue: true },
      { text: "Uma biblioteca JS", isTrue: false },
      { text: "Um método HTTP", isTrue: false },
      { text: "Um padrão de design", isTrue: false },
    ],
  },
  {
    level: Level.NINE,
    question: "O que é caching em aplicações web?",
    responses: [
      { text: "Armazenar dados temporariamente para acesso rápido", isTrue: true },
      { text: "Encriptar dados", isTrue: false },
      { text: "Comprimir arquivos", isTrue: false },
      { text: "Validar inputs", isTrue: false },
    ],
  },
  {
    level: Level.TEN,
    question: "O que é um load balancer?",
    responses: [
      { text: "Distribui tráfego entre servidores", isTrue: true },
      { text: "Um banco de dados", isTrue: false },
      { text: "Uma ferramenta de build", isTrue: false },
      { text: "Um pattern de código", isTrue: false },
    ],
  },
  {
    level: Level.TEN,
    question: "O que significa idempotência em APIs?",
    responses: [
      { text: "Operação pode ser repetida sem mudar o resultado após a primeira", isTrue: true },
      { text: "Operação assíncrona", isTrue: false },
      { text: "Operação que altera estado", isTrue: false },
      { text: "Operação de leitura apenas", isTrue: false },
    ],
  },
  {
    level: Level.ELEVEN,
    question: "O que é saga pattern em microsserviços?",
    responses: [
      { text: "Gerencia transações distribuídas", isTrue: true },
      { text: "Um tipo de autenticação", isTrue: false },
      { text: "Um load balancer", isTrue: false },
      { text: "Um banco NoSQL", isTrue: false },
    ],
  },
  {
    level: Level.ELEVEN,
    question: "O que é eventual consistency em bancos distribuídos?",
    responses: [
      { text: "Consistência que se propaga ao longo do tempo", isTrue: true },
      { text: "Consistência forte imediata", isTrue: false },
      { text: "Um erro de rede", isTrue: false },
      { text: "Uma métrica de latência", isTrue: false },
    ],
  },
  {
    level: Level.TWELVE,
    question: "O que é gRPC?",
    responses: [
      { text: "Framework RPC de alto desempenho", isTrue: true },
      { text: "Um método HTTP", isTrue: false },
      { text: "Um banco de dados", isTrue: false },
      { text: "Uma linguagem de programação", isTrue: false },
    ],
  },
  {
    level: Level.TWELVE,
    question: "O que é um service mesh?",
    responses: [
      { text: "Camada de infraestrutura para microsserviços", isTrue: true },
      { text: "Um tipo de container", isTrue: false },
      { text: "Um banco de dados", isTrue: false },
      { text: "Um padrão de design", isTrue: false },
    ],
  },
  {
    level: Level.THIRTEEN,
    question: "O que é Paxos em sistemas distribuídos?",
    responses: [
      { text: "Algoritmo de consenso", isTrue: true },
      { text: "Um protocolo de rede", isTrue: false },
      { text: "Um tipo de sharding", isTrue: false },
      { text: "Uma ferramenta DevOps", isTrue: false },
    ],
  },
  {
    level: Level.THIRTEEN,
    question: "O que é chaos engineering?",
    responses: [
      { text: "Prática de experimentar falhas em produção", isTrue: true },
      { text: "Um tipo de teste unitário", isTrue: false },
      { text: "Uma arquitetura de software", isTrue: false },
      { text: "Um pattern de microsserviços", isTrue: false },
    ],
  },
  // Novo nível FOURTEEN adicionado para conceitos ultra-avançados
  {
    level: Level.FOURTEEN,
    question: "O que é blockchain em termos de programação?",
    responses: [
      { text: "Cadeia de blocos com dados imutáveis", isTrue: true },
      { text: "Um banco de dados relacional", isTrue: false },
      { text: "Uma API REST", isTrue: false },
      { text: "Um framework JS", isTrue: false },
    ],
  },
  {
    level: Level.FOURTEEN,
    question: "O que é quantum computing?",
    responses: [
      { text: "Computação baseada em qubits e superposição", isTrue: true },
      { text: "Computação clássica acelerada", isTrue: false },
      { text: "Uma rede neural", isTrue: false },
      { text: "Um algoritmo de busca", isTrue: false },
    ],
  },
  {
    level: Level.FOURTEEN,
    question: "O que é edge computing?",
    responses: [
      { text: "Processamento de dados perto da fonte", isTrue: true },
      { text: "Computação em nuvem centralizada", isTrue: false },
      { text: "Um tipo de container", isTrue: false },
      { text: "Um protocolo de segurança", isTrue: false },
    ],
  },
  {
    level: Level.FOURTEEN,
    question: "O que é zero-trust architecture?",
    responses: [
      { text: "Modelo de segurança que não confia em nada por padrão", isTrue: true },
      { text: "Uma arquitetura sem autenticação", isTrue: false },
      { text: "Um padrão de microsserviços", isTrue: false },
      { text: "Um tipo de load balancer", isTrue: false },
    ],
  },
];