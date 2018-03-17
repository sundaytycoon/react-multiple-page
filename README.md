# react-multiple-page

# specific dependency

1. react-router-dom 4.2.2
2. react-router 4.2.0

# specific note about BrowserRouter

1. 가설 : 

history.action === 'REPLACE' 로 억지로 상태를 만들어서 history.replace(location.pathname, { state }) 주면, history.action === 'POP' 발생시에 Prompt를 발생시킨다.

> 결론 : 아님. 실험 해봤는데 그렇게 안됨.

2. 가설 :

history.action === 'PUSH'로 들어오면서 상태를 정상적으로 만들어 주면, (history.push 또는 <Link to> 로 들오 올때), 
history.action === 'POP' 발생시에 Prompt를 정상적으로 이벤트를 발생시킨다. 

> 결론 : 아님, pop이 연속이어도 prompt는 정상적으로 작동 했었음.

3. replace를 제외한 pop이나 push에서 when이 true일 때만 실행됨? 


> 아직 결론 안남 REPLACE상태에서도 한번 시도 해봐야함


4.  history에 이전에 쌓여있던것 하나의 row가 action:push, when:true 상태로 기록되어있고, 그 상태에서 벗어나려 할 때 나타날 것


> 결론 아직 안남.


# practice or TEST CASE

1. Redirect를 출력해서 history에 쌓이게 하기.

> 결론 되긴 됨, () => (<Redirect {...this.options} />) 을 하나 추가해서 reidrect를 출력시켰는데... history.action === 'REPLACE'로 남음


2. Redirect에서 action="PUSH" 하면 history.replace(location.pathname, state) 를 안해도 history.action === push 를 만들 수 있다.

> 결론 : 실패

3. history.go(-2); history.push(location.pathname, state) 

> 결론 : 어리석은 코드같음... 마치 push 하고 goBack 하는것 처럼 동작해버림....


# todo

1. nextPage, prevPage에서 pages의 크기보다 작거나 크면 에러를 띄울 수 있도록.
2. goPage에서는 replace를 통한 이동을 할 수 있도록
3. when에 대한 규칙을 올바르게 세울 수 있도록
4. 이전에 location.state가 가지고 있던 state를 버리지 않고 겸 사용할 수 있도록. 이전 걸 지우지 못하도록.
5. 생성 및 사라지는 타이밍에 에니메이션을 줄 수 있도록
6. 커스텀 prompt 태그를 만들 수 있도록


# references

 1. history back...! [robertgonzales/App.jsx](https://gist.github.com/robertgonzales/e54699212da497740845712f3648d98c)