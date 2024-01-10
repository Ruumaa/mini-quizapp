const { hash } = require('bcrypt');
const prisma = require('../lib/prisma');

async function main() {
  const createManyQuestions = await prisma.question.createMany({
    data: [
      {
        title: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctIndex: 1,
      },
      {
        title: 'Which element has the chemical symbol "H"?',
        options: ['Helium', 'Hydrogen', 'Hassium', 'Hafnium'],
        correctIndex: 1,
      },
      {
        title: 'In what year did the Titanic sink?',
        options: ['1912', '1905', '1923', '1899'],
        correctIndex: 0,
      },
      {
        title: 'Who wrote the play "Romeo and Juliet"?',
        options: [
          'William Shakespeare',
          'Charles Dickens',
          'Jane Austen',
          'Mark Twain',
        ],
        correctIndex: 0,
      },
      {
        title: 'What is the capital of China?',
        options: ['Seoul', 'Tokyo', 'Beijing', 'Bangkok'],
        correctIndex: 2,
      },
    ],
  });
  const password = '1';
  const hashed = await hash(password, 10);

  const createUser = await prisma.user.create({
    data: {
      username: 'admin',
      password: hashed,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
