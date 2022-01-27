import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

function Home({ toDos, addToDo }) {
  // 이제 Home에서 dispatch 함수를 사용할 수 있다.
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write yout to do..."
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

// state를 하나 가져오고 싶다.
// mapStateToProps이라고 함
// mapStateToProps(redux store로부터 온 state)(componets의 props << 필수 아님)
// mapStateToProps는 오브젝트를 하나 리턴해야 한다.
// state는 store한테서, ownProps는 react-router에 의해서 home에게 준 것
// mapStateToProps를 사용한다는 의미는 redux store로부터 니가 무엇인가를 가져오고 싶다는 의미이다.
// 가져오고 나서 props에 넣는다. 어디에? component의 props에..
// mapStateToProps로부터 주는 state는 react-router에 의해서 home의 props가 된다.
function getCurrentState(state) {
  return { toDos: state }; // Home props에 들어간당! 무엇을 리턴해주든 home의 prop로 들어간다.
}

// 여기서 props를 바꿀 수 있는 파워가 생겼당~~
function mapDispatchToProps(dispatch) {
  return { addToDo: (text) => dispatch(add(text)) };
}

// getCurrentState를 사용해서 Home에게 store로부터 state를 가져다 줄 것이다.
// connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해 준다.
export default connect(getCurrentState, mapDispatchToProps)(Home);
