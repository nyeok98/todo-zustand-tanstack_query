# [WIP] TODO (feat.Zustand + Tanstack Query) 
#### 이 작은 앱이 Lighthouse 점수가 73점인 것에 충격받아 개선작업을 우선순위로 둡니다.(24.12.03)
---

#### '결국 모든 것은 디펜던시다'라는 미명하에 상태관리에 대한 다양한 실험을 위해 만들어놓은 놀이터입니다.

#### 해당 프로젝트는 다음과 같은 기술스택을 포함합니다.

- React.js
- Zustand
- Tanstack Query (a.k.a. React Query)
- Stackflow (feat.Daangn)

<br/>

## Tasks

#### Upcoming Features
- [ ] 습관 관리

#### Major Task

- [x] Boiler Plate 구축
- [x] mock API 연동
- [x] 비즈니스 로직 분리
- [x] `Context API`로 전역상태 구축
- [x] mock API, `Firebase`로 전환
- [x] Fallback 구현 (feat.`Suspense`)
- [x] `Context API` -> `Zustand`로 전환
- [ ] [WIP] API패칭 `Tanstack Query`로 전환
- [ ] [WIP] styles `Emotion`으로 전환
- [ ] `Stackflow`로 UI 전환


#### Minor Task

- [ ] todo.id를 uuid로 전환 (`Firebase`에서 object의 value로 쿼리가 불가능함, 전체 패치 후 찾아야됨)
  - 현재의 로직은 `Firebase`가 발행하는 `auto-genrated-id`에 의존하고 있어 결합도가 다소 높다고 판단됨
  - 추후 DB를 바꾸더라도 `todoService` 레이어가 DB 스키마에 영향받지 않도록 해야함
  - 일시적으로 `Firebase` 의 `auto-genrated-id` 이외에 데이터 객체 내부에 id를 중복저장하는 방향으로 구현
- [ ] `createdAt`추가 및 정렬

<br />

## Notes
<img width="600" alt="상태관리 로직의 변천사" src="https://github.com/user-attachments/assets/009e6274-8b4e-4c39-96ef-d13b5d1c5623">

상태관리 로직의 변천사 v.24.12.03


<img width="600" alt="React.Suspense & Lazy로 비동기 콘텐츠를 호출하는 과정" src="https://github.com/user-attachments/assets/e4390cd6-5ccf-40af-9da9-6bbf8e8c9f95">

React.Suspense & Lazy로 비동기 콘텐츠를 호출하는 과정 (w/ mid-tier mobile network throttling)
