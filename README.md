# [WIP] TODO (feat.Zustand + Tanstack Query)

#### '결국 모든 것은 디펜던시다'라는 미명하에 상태관리에 대한 다양한 실험을 위해 만들어놓은 놀이터입니다.

#### 해당 프로젝트는 다음과 같은 기술스택을 포함합니다.

- React.js
- Zustand
- Tanstack Query (a.k.a. React Query)
- Stackflow (feat.Daangn)

<br/>

## Tasks

#### Upcoming Features

- [ ] 습관 관리 (like 깃헙잔디)

#### Major Task

- [x] Boiler Plate 구축
- [x] mock API 연동
- [x] 비즈니스 로직 분리
- [x] `Context API`로 전역상태 구축
- [x] mock API, `Firebase`로 전환
- [x] Fallback 구현 (feat.`Suspense`)
- [x] `Context API` -> `Zustand`로 전환
- [x] API패칭 `Tanstack Query`로 전환
- [ ] `Stackflow`로 UI 전환

#### Minor Task

- [ ] todo.id를 uuid로 전환 (`Firebase`에서 object의 value로 쿼리가 불가능함, 전체 패치 후 찾아야됨)
  - 현재의 로직은 `Firebase`가 발행하는 `auto-genrated-id`에 의존하고 있어 결합도가 다소 높다고 판단됨
  - 추후 DB를 바꾸더라도 `todoService` 레이어가 DB 스키마에 영향받지 않도록 해야함
  - 일시적으로 `Firebase` 의 `auto-genrated-id` 이외에 데이터 객체 내부에 id를 중복저장하는 방향으로 구현
- [ ] `Tanstack Query`로 옮기는 과정에서 부수적인 코드 clean up
  - [x] `Suspense` 대체할 `loading`, `error` state 관리
  - [ ] 비동기 함수 선언부 및 호출부 정리 
- [ ] `createdAt`추가 및 정렬

<br />

## Notes

- (24.12.03) `development` 환경에서는 번들링이나 컴프레션이 제대로 일어나지않고, 개발 환경 세팅을 위한 자잘한 리소스가 추가로 요청되어 최적화에 한계. 우선 이상태로 진행하고 추후 배포를 통해 더 개선을 해보는 것으로 결정.
- (23.12.03) LCP 개선을 위해 font를 local hosting으로 전환하고 `<head>`에서 preload 진행.
- (23.12.03) `Eslint` 및 `Vite Config`를 통해 추가 compression 진행. (`Lighthouse` 75 -> 77)
- (24.12.03) `<head>`에서 style import 다신 하지 말기 FCP에 악영향을 준다.(`Lighthouse` 73 -> 75)
- (24.12.03) 이왕 옮기는 거 성능개선 지표라도 보자는 생각에 `Lighthouse`로 Core Web Vital을 측정했습니다. 이 작은 앱이 73점인 것에 충격받아 개선작업을 우선순위로.
- (24.12.01) `Context API`로 관리하던 전역상태 관리를 `Zustand`로 옮겼지만, 서버상태를 굳이 `Zustand`로 관리하는 것이 이점이 없다는 판단에 `Tanstack Query`로 전환.
- (24.11.30) 오늘따라 내 코드가 이뻐보임. 피처가 작으니 당연한 걸수도. 언제나 Readable한 코드를 지향하자.

<br/>

<img width="850" alt="image" src="https://github.com/user-attachments/assets/19e5494b-583c-4843-b499-dc31e72164b2">

*상태관리 로직의 변천사 (v.24.12.04)*

<img width="850" alt="React.Suspense & Lazy로 비동기 콘텐츠를 호출하는 과정" src="https://github.com/user-attachments/assets/e4390cd6-5ccf-40af-9da9-6bbf8e8c9f95">

*React.Suspense & Lazy로 비동기 콘텐츠를 호출하는 과정 (w/ mid-tier mobile network throttling)*
