import { BASE_URL } from './base_url';

export const getQuestions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz`, {
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error during GET quiz', error);
  }
};

export const sendScore = async (userId, score) => {
  try {
    const response = await fetch(`${BASE_URL}/api/quiz/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application.json' },
      body: JSON.stringify({
        score: score,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error during POST score', error);
  }
};

export const SignUp = async (values) => {
  const { username, password } = await values;
  const response = await fetch(`${BASE_URL}/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const result = await response.json();
  return result;
};

export const getUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth`, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error during GET user', error);
  }
};
