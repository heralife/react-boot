# SK Hynix PKG Design Platform

![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)
![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)

> **⚠️ Copyright (c) 2026 heralife. All Rights Reserved.**
> 저작권자의 명시적 허가 없이 복제, 수정, 배포를 금지합니다.

SK하이닉스 반도체 패키지(PKG) 설계 관리 플랫폼

---

## Quick Start

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 실행 → http://localhost:5173
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

---

## Tech Stack

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19.2 | UI 프레임워크 |
| Vite | 7.3 | 빌드 도구, HMR |
| React Router DOM | 7.13 | SPA 라우팅 |
| React-Bootstrap | 2.10 | UI 컴포넌트 (Table, Modal, Form, Dropdown 등) |
| Bootstrap | 5.3 | CSS 프레임워크 베이스 |
| Tailwind CSS | 4.1 | 유틸리티 기반 CSS |
| Styled Components | 6.3 | CSS-in-JS (동적 스타일링) |
| SCSS (Sass) | 1.97 | CSS 전처리기 (변수, 믹스인, 중첩) |
| Recharts | 3.7 | 차트 시각화 (Line, Pie, Bar) |
| React Icons | 5.5 | 아이콘 (Heroicons Outline 시리즈) |

---

## File Description (파일별 설명)

### Root Files (루트 파일)

| File | Description |
|------|-------------|
| `package.json` | 프로젝트 메타 정보, 의존성 목록, npm 스크립트 (`dev`, `build`, `lint`, `preview`) 정의 |
| `vite.config.js` | Vite 빌드 설정. React 플러그인, Tailwind CSS 플러그인, SCSS `loadPaths`(스타일 디렉토리 경로), Bootstrap 경고 무시 설정 포함 |
| `index.html` | SPA 진입 HTML. `<div id="root">` 요소와 `main.jsx` 스크립트 로드 |
| `eslint.config.js` | ESLint 9 설정. React Hooks/Refresh 플러그인 적용 |
| `PROJECT_SPEC.md` | 프로젝트 기획서 (전체 구조, 페이지 기능, 기술 분배표 등) |

---

### `src/` Entry Files (엔트리 파일)

| File | CSS Tech | Description |
|------|----------|-------------|
| `main.jsx` | - | **앱 진입점**. `ReactDOM.createRoot`로 렌더링. `BrowserRouter`로 라우팅 활성화. `index.css`(Tailwind)와 `global.scss`(전역 SCSS) 임포트 |
| `App.jsx` | - | **라우팅 정의**. `<Routes>` 안에 8개 경로 설정. `/login`은 독립 렌더링, 나머지는 `<MainLayout>` 안에서 `<Outlet>` 기반 렌더링 |
| `index.css` | Tailwind | **Tailwind CSS 엔트리**. `@import "tailwindcss"` 선언 후 `@theme` 블록에서 SK Hynix 커스텀 색상 변수(`--color-hynix-red`, `--color-navy` 등)와 폰트 정의 |

---

### `src/styles/` (스타일 시스템)

| File | CSS Tech | Description |
|------|----------|-------------|
| `_variables.scss` | SCSS | **SCSS 변수 정의**. SK Hynix 브랜드 색상(`$hynix-red: #ED1C24`, `$navy: #1B1F3B` 등), 사이드바 크기(`$sidebar-width: 260px`), 그림자, 폰트, 보더 라디우스 변수 |
| `_mixins.scss` | SCSS | **SCSS 믹스인 정의**. `@use 'variables'`로 변수를 불러온 뒤, `flex-center`(가운데 정렬), `card-base`(카드 스타일), `hynix-gradient`(그래디언트), `responsive`(반응형 미디어쿼리), `text-ellipsis`(말줄임) 믹스인 제공 |
| `_theme.scss` | SCSS | **SCSS 통합 모듈**. `@forward 'variables'`와 `@forward 'mixins'`를 통해 다른 SCSS 파일에서 `@use 'theme' as *` 한 줄로 변수+믹스인을 동시에 사용할 수 있게 하는 진입점 |
| `_bootstrap-custom.scss` | SCSS | **Bootstrap 테마 오버라이드**. Bootstrap의 `$primary`, `$secondary` 등 색상 변수를 SK Hynix 색상으로 재정의한 뒤 `bootstrap/scss/bootstrap` 임포트. `@use` 충돌 방지를 위해 인라인 값 사용 |
| `global.scss` | SCSS | **전역 스타일**. `@use 'theme'`과 `@use 'bootstrap-custom'`으로 전체 스타일 시스템 로드. `body` 기본 폰트/배경, 스크롤바 커스터마이징, `box-sizing` 리셋 |
| `SharedStyles.js` | Styled Components | **공유 Styled Components**. 재사용 가능한 CSS 애니메이션(`fadeInUp`, `fadeIn`, `slideInLeft`, `pulseRed`, `spin`) keyframes와 공통 스타일 컴포넌트(`PageTitle`, `StyledCard`, `StatusDot`, `FlexRow`, `HynixGradientText`) 정의 |

---

### `src/components/layout/` (레이아웃)

| File | CSS Tech | Description |
|------|----------|-------------|
| `MainLayout.jsx` | Tailwind | **메인 레이아웃**. `Sidebar` + `TopHeader` + `<Outlet>` + `Footer`를 flex 레이아웃으로 구성. `sidebarCollapsed` 상태를 관리하여 사이드바 접기/펼치기 제어 |
| `Sidebar.jsx` | SCSS | **좌측 사이드바 네비게이션**. `NavLink`(react-router-dom)로 5개 메뉴 렌더링. 활성 메뉴에 빨간 좌측 바 표시. `collapsed` prop에 따라 접힌 상태에서 아이콘만 표시 + hover 시 툴팁 표시 |
| `Sidebar.scss` | SCSS | **사이드바 SCSS 스타일**. BEM 네이밍(`sidebar__nav-item`, `sidebar__tooltip` 등). 접힌 상태(`.collapsed`)에서 `overflow: visible`로 툴팁이 잘리지 않게 처리. 툴팁은 `position: absolute`로 사이드바 오른쪽에 삼각형 화살표와 함께 표시 |
| `TopHeader.jsx` | React-Bootstrap | **상단 헤더**. 검색바(`InputGroup`), 알림 벨(`Dropdown` + 뱃지), 설정 아이콘, 유저 프로필 드롭다운 구성. `forwardRef` 기반 커스텀 토글(`IconToggle`, `UserToggle`)로 Bootstrap 기본 캐럿 제거. 유저 드롭다운의 chevron 아이콘은 열림/닫힘 시 `rotate(180deg)` 애니메이션 적용 |
| `Footer.jsx` | Tailwind | **하단 푸터**. 저작권 텍스트 표시. Tailwind 유틸리티 클래스로 스타일링 |

---

### `src/components/common/` (공통 컴포넌트)

| File | CSS Tech | Description |
|------|----------|-------------|
| `KPICard.jsx` | Tailwind | **KPI 통계 카드**. 대시보드에서 사용. 아이콘, 수치, 라벨, 증감률(%) 표시. `color` prop으로 4가지 색상 테마(`tech-blue`, `amber`, `green`, `purple`) 지원 |
| `StatusBadge.jsx` | Styled Components | **상태 뱃지**. `status` prop(`draft`/`review`/`approved`/`rejected`)에 따라 색상이 바뀌는 알약형 뱃지. 좌측에 색상 점(dot) 포함. `constants.js`의 `DESIGN_STATUSES`에서 색상 매핑 |
| `ConfirmModal.jsx` | React-Bootstrap | **확인 모달**. `show`, `onHide`, `onConfirm`, `title`, `message` props로 범용 확인/취소 다이얼로그 제공. 삭제 등 위험 작업 전 사용자 확인용 |
| `AnimatedSelect.jsx` | Styled Components | **애니메이션 셀렉트박스**. React-Bootstrap `Dropdown` 기반 커스텀 셀렉트. 열림/닫힘 시 chevron 아이콘 180도 회전 애니메이션, 테두리 색상 변경. `&::after { display: none }` 으로 Bootstrap 기본 캐럿 제거 |

---

### `src/components/charts/` (차트 컴포넌트)

| File | Library | Description |
|------|---------|-------------|
| `ProgressLineChart.jsx` | Recharts | **월별 진행 라인차트**. `completed`(완료)와 `submitted`(제출) 두 개의 라인으로 설계 진행 현황 시각화. SK Hynix Red와 Tech Blue 색상 사용 |
| `PackageTypePieChart.jsx` | Recharts | **패키지 타입 파이차트**. 도넛형(innerRadius=60) 파이차트로 패키지 타입별 비율 표시. `RECHARTS_COLORS` 상수의 8가지 색상을 순환 사용 |
| `ThermalHeatmap.jsx` | Recharts | **열 분포 바차트**. 측정 포인트별 온도를 바차트로 표시. `threshold` prop 기준으로 초과 시 빨강, 80% 이상 시 노랑, 이하 시 파랑 색상. `ReferenceLine`으로 임계값 표시 |
| `StressBarChart.jsx` | Recharts | **응력 분석 수평 바차트**. `layout="vertical"` 수평 바차트로 위치별 응력(MPa)을 한계값과 비교 표시. 한계의 80% 초과 시 경고(노랑), 이하 시 안전(초록) |

---

### `src/components/design/` (설계 상세 컴포넌트)

| File | CSS Tech | Description |
|------|----------|-------------|
| `DesignSpecTable.jsx` | React-Bootstrap | **설계 스펙 테이블**. `specs` 객체에서 Package Type, Dimensions, Pin Count, Pitch, Material 등을 2열 테이블로 표시. 값이 없는 항목은 자동 필터링 |
| `RevisionHistory.jsx` | Styled Components | **리비전 히스토리 타임라인**. 세로 타임라인 UI. 각 버전의 작성자, 날짜, 변경 내용 표시. 최신 항목은 빨간 점, 과거 항목은 회색 점. `fadeInUp` 애니메이션으로 순차적 등장 |
| `ApprovalFlow.jsx` | Styled Components | **승인 워크플로우**. 5단계(Draft → Design Review → Thermal Check → SI Verification → Final Approval) 수평 플로우 UI. `currentStep` prop으로 현재 단계 표시. 완료=초록 체크, 진행중=빨강 시계, 대기=회색 번호 |
| `FileAttachments.jsx` | React-Bootstrap | **첨부파일 목록**. `ListGroup`으로 파일 목록 표시. 파일 타입별 아이콘 매핑(layout=사진, report=문서, data=표, drawing=도면). 각 항목에 Download 버튼 |
| `CommentThread.jsx` | Tailwind | **댓글 스레드**. 댓글 목록 + 새 댓글 작성 폼. 작성자 이니셜 아바타, 이름, 역할 뱃지(역할별 색상), 날짜, 내용 표시. 역할별로 다른 배경색 뱃지 적용 |

---

### `src/pages/` (페이지)

| File | CSS Tech | Route | Description |
|------|----------|-------|-------------|
| `LoginPage.jsx` | React-Bootstrap | `/login` | **로그인 페이지**. 사번/비밀번호 입력 폼. SK Hynix 로고와 브랜딩. 레이아웃 없이 독립 렌더링 |
| `LoginPage.scss` | SCSS | - | LoginPage 전용 SCSS. 로그인 카드, 배경 그래디언트, 입력 필드 스타일 |
| `DashboardPage.jsx` | Tailwind | `/` | **대시보드**. KPI 카드 4개(총 설계, 진행 중, 승인, 시뮬레이션), 월별 진행 라인차트, 패키지 타입 파이차트, 최근 활동 타임라인, 빠른 실행 버튼 |
| `PackageDesignListPage.jsx` | React-Bootstrap | `/designs` | **설계 목록**. 검색(이름/ID), 패키지 타입 필터, 상태 필터(AnimatedSelect), 데이터 테이블(ID, 이름, 타입, 상태 뱃지, 설계자, 수정일), 페이지네이션(8건/페이지), View/Edit/Submit/Delete 액션, 삭제 확인 모달 |
| `DesignDetailPage.jsx` | Styled Components | `/designs/:id` | **설계 상세**. Bootstrap Tabs로 5개 탭 구성: Specifications(스펙 테이블), Approval(승인 플로우), History(리비전 타임라인), Files(첨부파일), Comments(댓글 스레드) |
| `SimulationResultsPage.jsx` | Tailwind + Recharts | `/simulations` | **시뮬레이션 결과**. 4가지 시뮬레이션 타입(Thermal, Signal Integrity, Stress, Warpage) 선택. 열 분포 바차트, 응력 분석 차트, 결과 요약 카드, Pass/Fail 판정 표시 |
| `ProjectManagementPage.jsx` | SCSS + Styled Components | `/projects` | **프로젝트 관리**. 프로젝트 카드(진행률 바, 멤버 수, 기한), 간트차트(타임라인 바 시각화), 마일스톤 목록 |
| `ProjectManagement.scss` | SCSS | - | ProjectManagementPage 전용 SCSS. 간트차트 바, 프로젝트 카드, 마일스톤 스타일 |
| `TeamCollaborationPage.jsx` | Tailwind + Bootstrap | `/team` | **팀 협업**. 팀원 프로필 카드(역할, 부서, 연락처, 아바타), 최근 활동 로그, 알림 목록, 팀원 통계 |

---

### `src/data/` (데이터)

| File | Description |
|------|-------------|
| `mockData.js` | **전체 목업 데이터**. `packageDesigns`(12건 - HBM3E, DDR5 FBGA, NAND TSV 등 PKG 설계), `projects`(4건 - HBM3E 양산, DDR5 개선 등), `teamMembers`(12명 - 설계자, 리뷰어, PM), `simulationData`(Thermal/Signal/Stress/Warpage), `activityLog`(최근 활동), `notifications`(알림). 모든 페이지에서 import하여 사용 |

---

### `src/utils/` (유틸리티)

| File | Description |
|------|-------------|
| `constants.js` | **상수 정의**. `COLORS`(SK Hynix 브랜드 색상 객체), `PACKAGE_TYPES`(8종: BGA, QFP, SOP, CSP, WLP 등), `DESIGN_STATUSES`(4종: draft/review/approved/rejected + 라벨/색상/배경), `RECHARTS_COLORS`(차트용 8색), `NAV_ITEMS`(네비게이션 메뉴 5개) |
| `helpers.js` | **유틸 함수**. `formatDate`(영문 날짜 포맷: "Jan 15, 2026"), `formatDateKr`(한글 날짜 포맷: "2026년 1월 15일"), `getStatusConfig`(상태별 라벨/색상 반환), `truncateText`(말줄임 처리), `getInitials`(이름에서 이니셜 추출: "Kim J.H." → "KJ") |

---

## CSS Technology Map (CSS 기술 분배표)

```
┌──────────────────────────────────────────────────────────────────┐
│                        이 프로젝트의 CSS 구조                       │
├──────────────┬───────────────────────────────────────────────────┤
│ Tailwind CSS │ DashboardPage, SimulationResultsPage,            │
│              │ TeamCollaborationPage, MainLayout, Footer,       │
│              │ KPICard, CommentThread                           │
├──────────────┼───────────────────────────────────────────────────┤
│ React-       │ LoginPage, PackageDesignListPage, TopHeader,     │
│ Bootstrap    │ ConfirmModal, DesignSpecTable, FileAttachments   │
├──────────────┼───────────────────────────────────────────────────┤
│ Styled       │ DesignDetailPage, StatusBadge, AnimatedSelect,   │
│ Components   │ RevisionHistory, ApprovalFlow, SharedStyles.js   │
├──────────────┼───────────────────────────────────────────────────┤
│ SCSS         │ Sidebar, LoginPage, ProjectManagementPage,       │
│              │ global.scss, _variables, _mixins, _theme         │
└──────────────┴───────────────────────────────────────────────────┘
```

---

## Routing Structure (라우팅 구조)

```
BrowserRouter
├── /login ─────────────── LoginPage (독립)
└── MainLayout (Sidebar + TopHeader + Footer)
    ├── / ──────────────── DashboardPage
    ├── /designs ───────── PackageDesignListPage
    ├── /designs/:id ───── DesignDetailPage
    ├── /simulations ───── SimulationResultsPage
    ├── /simulations/:id ─ SimulationResultsPage
    ├── /projects ──────── ProjectManagementPage
    └── /team ─────────── TeamCollaborationPage
```

---

## SCSS Module System (SCSS 모듈 의존 관계)

```
_variables.scss  ──┐
                   ├──→  _theme.scss  ──→  Sidebar.scss
_mixins.scss  ─────┘         │              LoginPage.scss
   (내부에서 @use               │              ProjectManagement.scss
    'variables' 사용)          └──→  global.scss
                                      (+ @use 'bootstrap-custom')
```

`_theme.scss`가 `@forward`로 변수와 믹스인을 묶어주어,
각 SCSS 파일에서는 `@use 'theme' as *;` 한 줄로 모든 변수/믹스인 접근 가능.
