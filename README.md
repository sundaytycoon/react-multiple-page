# react-multiple-page

# specific dependency

1. react-router-dom 4.2.2
2. react-router 4.2.0

### 실험1. Prompt는 언제 실행이 될까?

**목적 : Prompt(또는 history.block) 가 정상적으로 발현되는 타이밍이 언제인가!**

- 가설 1

```
history.action === 'REPLACE' 로 억지로 상태를 만들어서 history.replace(location.pathname, { state }) 주면, history.action === 'POP' 발생시에 Prompt를 발생시킨다.

결론 : 아님. location.state의 여부는 관계없음. 그렇다면 ... history.action과 연관이 있나?
```

- 가설 2

```
history.action === 'PUSH'로 들어오면서 상태(state)를 정상적으로 만들어 주면, (history.push 또는 <Link to>를 이용해서 의도한 페이지로 들어 오고나서, 페이지 뒤로가기 이벤트 history.action === 'POP' 발생시에 Prompt를 정상적으로 이벤트를 발생시킨다. 

결론 : 아님 반례) pop이 연속이어도 prompt는 정상적으로 작동 했었음.
```

- 가설 3

```
의도한 페이지로 들어올 때에 history의 current row가 <Prompt when={true} .../> 상태로 기록되어있고, 그 상태가 기록되어있는 현재 history의 current row에서 다른 페이지로 이동시에 발생한다.

결론 : (실험중,  이 가설대로 움직이는 것 같은 느낌이 든다.)
```

### 짜투리 실험.

1. 실험 : Redirect를 출력해서 history에 쌓이게 하기.

> 결론 되긴 됨, () => (<Redirect {...this.options} />) 을 하나 추가해서 reidrect를 출력시켰는데... history.action === 'REPLACE'로 남음

2. 실험 : Redirect에서 action="PUSH" 하면 history.replace(location.pathname, state) 를 안해도 history.action === push 를 만들 수 있다.

> 결론 : 실패

3. 실험 : history.go(-2); history.push(location.pathname, state)

> 결론 : 어리석은 코드같음... 마치 push 하고 goBack goBack 하는것 처럼 동작해버림.... 의도는 goBack goBack 후에 push 인데....


# todo

1. nextPage, prevPage에서 pages의 크기보다 작거나 크면 에러를 띄울 수 있도록.
2. goPage에서는 replace를 통한 이동을 할 수 있도록
3. when에 대한 규칙을 올바르게 세울 수 있도록
4. 이전에 location.state가 가지고 있던 state를 버리지 않고 겸 사용할 수 있도록. 이전 걸 지우지 못하도록.
5. 생성 및 사라지는 타이밍에 에니메이션을 줄 수 있도록
6. 커스텀 prompt 태그를 만들 수 있도록


# references

 1. history back...! [robertgonzales/App.jsx](https://gist.github.com/robertgonzales/e54699212da497740845712f3648d98c)