# jotai-todo

Atomic state management jotai

## Getting Started

- `npm i jotai`

- 일본어로 '상태' 라는 의미이고 팀 내부에서 무거운 redux를 대신할 state management를 선정하여  
  jotai , zustand , recoil 을 비교해 간단한 TodoList를 만들어 비교했습니다.  
  jotai 공식문서에서 zustand와 recoil의 차이점에 대해서 설명하고 있습니다.

  https://jotai.org/docs/basics/comparison

- ## <u>**어떤것을 선택할까?**</u>

  - useState+useContext 를 대체해야하는 경우 Jotai 가 더 적절합니다.
  - React 외부에서 상태를 업데이트 한다면 zustand
  - 코드 분리가 더 중요하다면 Jotai
  - Devtools 를 많이 사용한다면 zustand
  - suspense 를 사용한다면 jotai

- ## <u>**Jotai vs Recoil**</u>
  - 복잡한 요구사항이 있는 큰 앱의 경우 Recoil이 더 적절함.
  - jotai 는 atom 객체의 id에 의존하고 key가 따로 필요없음
  - recoil은 atom 문자열 key에 의존
