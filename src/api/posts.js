const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어 학습",
    body: "리덕스 미들웨어 직접 구현하기",
  },
  {
    id: 2,
    title: "redux-thunk 학습",
    body: "redux-thunk 사용해서 비동기 처리 구현",
  },
  {
    id: 3,
    title: "redux-saga 학습",
    body: "추후 redux-saga를 사용해서 비동기 처리 방법 학습",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
