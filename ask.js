#!/usr/bin/env node

const readline = require('readline')
const philosophers = require('./philosophers')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const topics = [
  'freedom',
  'morality',
  'justice',
  'power',
  'truth',
  'history',
  'knowledge',
  'government',
]

function detectTopic(question) {
  const lower = question.toLowerCase()
  for (let topic of topics) {
    if (lower.includes(topic)) return topic
  }
  return null
}

function generateTextResponse(topic) {
  if (!topic) {
    return `Sorry, I couldn't identify a topic in your question. Try using keywords like: freedom, morality, justice, power, etc.`
  }

  const responses = {
    thucydides: philosophers.thucydides[topic],
    nietzsche: philosophers.nietzsche[topic],
    foucault: philosophers.foucault[topic],
  }

  return `📚 Topic: ${topic.toUpperCase()}

🌻 Thucydides:
${responses.thucydides}

🌻 Nietzsche:
${responses.nietzsche}

🌻 Foucault:
${responses.foucault}
`
}

if (process.argv.length > 2) {
  const question = process.argv.slice(2).join(' ')
  const topic = detectTopic(question)
  const response = generateTextResponse(topic)
  console.log(response)
  rl.close()
} else {
  console.log('🧠 Ask the Philosophers (type "exit" to quit)')
  askQuestion()
}

function askQuestion() {
  rl.question('❓ Your question: ', (question) => {
    if (question.toLowerCase() === 'exit') {
      rl.close()
      return
    }

    const topic = detectTopic(question)
    const response = generateTextResponse(topic)
    console.log('\n' + response + '\n')
    askQuestion()
  })
}
