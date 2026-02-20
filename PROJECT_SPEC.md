# SK Hynix PKG Design Platform - Project Specification

## 1. Project Overview

SK하이닉스 반도체 패키지(PKG) 설계 관리 플랫폼입니다.
HBM3E, DDR5 FBGA, NAND TSV 등 반도체 패키지 설계의 생성, 검토, 승인, 시뮬레이션, 프로젝트 관리, 팀 협업을 통합 관리합니다.

- **프로젝트명**: SK Hynix PKG Design Platform
- **프레임워크**: React 19 + Vite 7
- **개발 서버**: `npm run dev` → http://localhost:5173

---

## 2. Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| UI Framework | React | 19.2.0 |
| Build Tool | Vite | 7.3.1 |
| Routing | React Router DOM | 7.13.0 |
| UI Components | React-Bootstrap | 2.10.10 |
| CSS Framework | Bootstrap | 5.3.8 |
| Utility CSS | Tailwind CSS | 4.1.18 |
| CSS-in-JS | Styled Components | 6.3.9 |
| CSS Preprocessor | SCSS (Sass) | 1.97.3 |
| Charts | Recharts | 3.7.0 |
| Icons | React Icons (Heroicons) | 5.5.0 |

---

## 3. SK Hynix Branding

| Color | Hex | Usage |
|-------|-----|-------|
| SK Hynix Red | `#ED1C24` | Primary, 액센트, 활성 상태 |
| Dark Navy | `#1B1F3B` | 사이드바, 헤더 텍스트 |
| Navy Light | `#2A2F4F` | 툴팁, 호버 배경 |
| Tech Blue | `#00A0E9` | 보조 액센트, 링크 |
| Background | `#F5F6FA` | 페이지 배경 |
| Card BG | `#FFFFFF` | 카드, 패널 배경 |

---

## 4. Directory Structure

```
REACT-BOOT/
├── public/
├── src/
│   ├── components/
│   │   ├── charts/                    # Recharts 차트 컴포넌트
│   │   │   ├── ProgressLineChart.jsx
│   │   │   ├── PackageTypePieChart.jsx
│   │   │   ├── ThermalHeatmap.jsx
│   │   │   └── StressBarChart.jsx
│   │   ├── common/                    # 공통 UI 컴포넌트
│   │   │   ├── KPICard.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   ├── ConfirmModal.jsx
│   │   │   └── AnimatedSelect.jsx
│   │   ├── design/                    # 설계 상세 관련 컴포넌트
│   │   │   ├── DesignSpecTable.jsx
│   │   │   ├── RevisionHistory.jsx
│   │   │   ├── ApprovalFlow.jsx
│   │   │   ├── FileAttachments.jsx
│   │   │   └── CommentThread.jsx
│   │   └── layout/                    # 레이아웃 컴포넌트
│   │       ├── MainLayout.jsx
│   │       ├── Sidebar.jsx
│   │       ├── Sidebar.scss
│   │       ├── TopHeader.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   └── mockData.js               # 전체 목업 데이터
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── LoginPage.scss
│   │   ├── DashboardPage.jsx
│   │   ├── PackageDesignListPage.jsx
│   │   ├── DesignDetailPage.jsx
│   │   ├── SimulationResultsPage.jsx
│   │   ├── ProjectManagementPage.jsx
│   │   ├── ProjectManagement.scss
│   │   └── TeamCollaborationPage.jsx
│   ├── styles/
│   │   ├── _variables.scss            # SCSS 테마 변수
│   │   ├── _mixins.scss               # SCSS 믹스인
│   │   ├── _theme.scss                # @forward 통합 모듈
│   │   ├── _bootstrap-custom.scss     # Bootstrap 색상 오버라이드
│   │   ├── global.scss                # 전역 SCSS 스타일
│   │   └── SharedStyles.js            # Styled Components 공유
│   ├── utils/
│   │   ├── constants.js               # 색상, 상태, 타입 상수
│   │   └── helpers.js                 # 날짜 포맷, 유틸 함수
│   ├── App.jsx                        # 라우팅 설정
│   ├── main.jsx                       # 엔트리 포인트
│   └── index.css                      # Tailwind CSS 엔트리
├── vite.config.js
├── package.json
└── PROJECT_SPEC.md
```

---

## 5. Routing

| Path | Page | Layout |
|------|------|--------|
| `/login` | LoginPage | 독립 (레이아웃 없음) |
| `/` | DashboardPage | MainLayout |
| `/designs` | PackageDesignListPage | MainLayout |
| `/designs/:id` | DesignDetailPage | MainLayout |
| `/simulations` | SimulationResultsPage | MainLayout |
| `/simulations/:id` | SimulationResultsPage | MainLayout |
| `/projects` | ProjectManagementPage | MainLayout |
| `/team` | TeamCollaborationPage | MainLayout |

**MainLayout 구성**: Sidebar (좌측) + TopHeader (상단) + Content (Outlet) + Footer (하단)

---

## 6. Pages & Features

### 6.1 LoginPage
- **CSS**: React-Bootstrap + SCSS
- **기능**: 사번/비밀번호 입력, SK Hynix 브랜딩, 로그인 폼 유효성 검사

### 6.2 DashboardPage
- **CSS**: Tailwind CSS
- **기능**:
  - KPI 카드 4개 (총 설계, 진행 중, 승인, 시뮬레이션)
  - 월별 진행 라인차트 (ProgressLineChart)
  - 패키지 타입 파이차트 (PackageTypePieChart)
  - 최근 활동 타임라인
  - 빠른 실행 버튼

### 6.3 PackageDesignListPage
- **CSS**: React-Bootstrap
- **기능**:
  - 설계 목록 테이블 (ID, 이름, 타입, 상태, 설계자, 수정일)
  - 검색 (이름/ID)
  - 필터 (패키지 타입, 상태) - AnimatedSelect 컴포넌트
  - 페이지네이션 (8건/페이지)
  - 삭제 확인 모달 (ConfirmModal)
  - View, Edit, Submit for Review, Delete 액션

### 6.4 DesignDetailPage
- **CSS**: Styled Components + React-Bootstrap
- **기능**:
  - 탭 구조: Specifications / Approval / History / Files / Comments
  - 설계 스펙 테이블 (DesignSpecTable)
  - 승인 워크플로우 시각화 (ApprovalFlow) - 설계자 → 리뷰어 → 승인자
  - 리비전 히스토리 타임라인 (RevisionHistory)
  - 첨부파일 목록 (FileAttachments)
  - 댓글 스레드 (CommentThread)

### 6.5 SimulationResultsPage
- **CSS**: Tailwind CSS + Recharts
- **기능**:
  - 시뮬레이션 타입 선택 (Thermal, Signal Integrity, Stress, Warpage)
  - 열 분포 히트맵 (ThermalHeatmap)
  - 응력 분석 바차트 (StressBarChart)
  - 결과 요약 카드
  - Pass/Fail 판정 표시

### 6.6 ProjectManagementPage
- **CSS**: SCSS + Styled Components
- **기능**:
  - 프로젝트 카드 (진행률, 멤버, 기한)
  - 간트차트 (타임라인 바 시각화)
  - 마일스톤 목록
  - 프로젝트 상태별 필터

### 6.7 TeamCollaborationPage
- **CSS**: Tailwind CSS + React-Bootstrap
- **기능**:
  - 팀원 프로필 카드 (역할, 부서, 연락처)
  - 최근 활동 로그
  - 알림 목록
  - 팀원 통계

---

## 7. CSS Technology Distribution

각 페이지별로 서로 다른 CSS 기술을 주력으로 사용하여, 4가지 CSS 기술의 실제 활용 사례를 보여줍니다.

| CSS Technology | 사용 위치 |
|---------------|----------|
| **React-Bootstrap** | LoginPage, PackageDesignListPage, TopHeader, ConfirmModal, DesignSpecTable, FileAttachments |
| **Tailwind CSS** | DashboardPage, SimulationResultsPage, TeamCollaborationPage, MainLayout, Footer, KPICard, CommentThread |
| **Styled Components** | DesignDetailPage, StatusBadge, AnimatedSelect, RevisionHistory, ApprovalFlow, SharedStyles.js |
| **SCSS** | Sidebar.scss, LoginPage.scss, ProjectManagement.scss, global.scss, _variables.scss, _mixins.scss |

---

## 8. Component Details

### Layout Components

| Component | CSS Tech | Description |
|-----------|---------|-------------|
| MainLayout | Tailwind | flex 레이아웃, Sidebar + Content 영역 분리 |
| Sidebar | SCSS | 접이식 네비게이션, 접힌 상태 툴팁, BEM 네이밍 |
| TopHeader | React-Bootstrap | 검색바, 알림 드롭다운, 유저 프로필 드롭다운 |
| Footer | Tailwind | 저작권 표시 |

### Common Components

| Component | CSS Tech | Description |
|-----------|---------|-------------|
| KPICard | Tailwind | 대시보드 통계 카드 (아이콘, 수치, 변화율) |
| StatusBadge | Styled Components | 상태별 색상 뱃지 (draft/review/approved/rejected) |
| ConfirmModal | React-Bootstrap | 확인/취소 모달 다이얼로그 |
| AnimatedSelect | Styled Components | 드롭다운 열림/닫힘 시 chevron 회전 애니메이션 |

### Chart Components

| Component | Library | Description |
|-----------|---------|-------------|
| ProgressLineChart | Recharts | 월별 설계 진행 현황 라인차트 |
| PackageTypePieChart | Recharts | 패키지 타입별 비율 파이차트 |
| ThermalHeatmap | Recharts | 열 분포 히트맵 (AreaChart) |
| StressBarChart | Recharts | 응력 분석 바차트 |

### Design Components

| Component | CSS Tech | Description |
|-----------|---------|-------------|
| DesignSpecTable | React-Bootstrap | 설계 스펙 정보 테이블 |
| RevisionHistory | Styled Components | 버전 이력 타임라인 |
| ApprovalFlow | Styled Components | 승인 워크플로우 단계 시각화 |
| FileAttachments | React-Bootstrap | 첨부파일 목록 및 다운로드 |
| CommentThread | Tailwind | 댓글/리뷰 스레드 |

---

## 9. Mock Data

`src/data/mockData.js`에 정의된 목업 데이터:

| Data | Count | Description |
|------|-------|-------------|
| packageDesigns | 12건 | HBM3E, DDR5 FBGA, NAND TSV 등 PKG 설계 |
| projects | 4건 | HBM3E Mass Production, DDR5 개선 등 프로젝트 |
| teamMembers | 12명 | 설계자, 리뷰어, PM 등 팀원 |
| simulationData | 다수 | Thermal, Signal, Stress, Warpage 시뮬레이션 |
| activityLog | 다수 | 최근 활동 기록 |
| notifications | 다수 | 알림 데이터 |

---

## 10. SCSS Architecture

SCSS는 모듈 시스템(`@use` / `@forward`)을 사용합니다.

```
_variables.scss    →  색상, 사이즈, 전환 등 변수 정의
_mixins.scss       →  @use 'variables' 후 믹스인 정의
_theme.scss        →  @forward 'variables' + @forward 'mixins' (통합 모듈)
global.scss        →  @use 'theme' as * 후 전역 스타일 정의
_bootstrap-custom.scss → Bootstrap 색상 오버라이드 (인라인 값 사용)
```

각 SCSS 파일에서는 `@use 'theme' as *;`로 변수와 믹스인을 한번에 임포트합니다.

---

## 11. Key UI/UX Features

- **접이식 사이드바**: 토글 버튼으로 확장/축소, 축소 시 아이콘 hover 툴팁
- **커스텀 드롭다운**: forwardRef 기반 토글, Bootstrap 기본 캐럿 제거
- **Chevron 애니메이션**: `cubic-bezier(0.4, 0, 0.2, 1)` 트랜지션으로 부드러운 회전
- **AnimatedSelect**: 드롭다운 열림/닫힘 시 아이콘 회전 + 테두리 색상 변경
- **상태 뱃지**: draft(회색), review(파랑), approved(초록), rejected(빨강)
- **반응형 레이아웃**: 사이드바 + 콘텐츠 flex 구조
