# TODO (feat.Zustand + Tanstack Query)

#### 상태관리에 대한 다양한 실험을 위해 만들어놓은 놀이터입니다.

#### 해당 프로젝트는 다음과 같은 기술스택을 포함합니다.

- React.js
- Zustand
- Tanstack Query (a.k.a. React Query)
- Stackflow (feat.Daangn)

<br/>

### Major Task

- [x] Boiler Plate 구축
- [x] mock API 연동
- [x] 비즈니스 로직 분리
- [x] `Context API`로 전역상태 구축
- [x] mock API, `Firebase`로 전환
- [ ] [WIP] Fallback 구현
- [ ] `Zustand`로 전환
- [ ] API패칭 `Tanstack Query`로 전환
- [ ] `Stackflow`로 UI 전환


<br />

### Minor Task
- [ ] todo.id를 uuid로 전환 (`Firebase`에서 object의 value로 쿼리가 불가능함, 전체 패치 후 찾아야됨)
  - 현재의 로직은 `Firebase`가 발행하는 `auto-genrated-id`에 의존하고 있어 결합도가 다소 높다고 판단됨
  - 추후 DB를 바꾸더라도 `todoService` 레이어가 DB 스키마에 영향받지 않도록 해야함
  - 일시적으 `Firebase` 의 `auto-genrated-id` 이외에 데이터 객체 내부에 id를 중복저장하는 방향으로 구현
