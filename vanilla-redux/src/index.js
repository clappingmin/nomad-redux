import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

// reducer
// data의 수정이 일어나는 유일한 곳
const countModifier = (count = 0, action) => {
  // 기본값 : 0
  // ... modify state
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
// store
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', () => countStore.dispatch({ type: MINUS }));
