export const quiz = {
  questions: [
    {
      text: 'What is your favourite animal?',
      options: [
        { answer: 'Dog', weighting: 'Emily' },
        { answer: 'wolf', weighting: 'Chris' },
        { answer: 'I love all animals, they are my friends', weighting: 'Bryce' },
        { answer: 'Ocelot', weighting: 'Don' },
        { answer: 'bear', weighting: 'Dougal' }
      ]
    },
    {
      text: 'What is your favourite food?',
      options: [
        { answer: 'dog', weighting: 'Emily' },
        { answer: 'wolf', weighting: 'Chris' },
        { answer: 'potatoes', weighting: 'Bryce' },
        { answer: 'Elephants', weighting: 'Don' },
        { answer: 'bear', weighting: 'Dougal' }
      ]
    }
  ],
  results: [
    {
      title: 'Emily',
      description: 'Congrats, you\re a total Emily.'
    },
    {
      title: 'Chris',
      description: ''
    },
    {
      title: 'Bryce',
      description: ''
    },
    {
      title: 'Don',
      description: '"But Don, how could I be anything except a Don"'
    },
    {
      title: 'Dougal',
      description: ''
    }
  ]
}
