# 📝 My Todo App

React + TypeScript로 만든 Todo 리스트 애플리케이션입니다.
기본 CRUD 기능부터 상태 관리 리팩토링(useReducer)까지 단계적으로 발전시킨 학습용 토이프로젝트입니다.

🔗 **[Live Demo](https://260708-my-todo-app.vercel.app/)**

---

## 📌 주요 기능

- ✅ **Todo 추가 / 삭제**
- ✅ **완료 상태 토글** (체크박스)
- ✅ **필터링** (전체 / 완료 / 미완료)
- ✅ **localStorage 연동** — 새로고침해도 데이터 유지
- ✅ **Enter 키로 추가** 지원

---

## 🛠 기술 스택

| 분류             | 기술         |
| ---------------- | ------------ |
| Language         | TypeScript   |
| Library          | React        |
| Build Tool       | Vite         |
| Styling          | Tailwind CSS |
| State Management | useReducer   |
| Deploy           | Vercel       |

---

## 📂 프로젝트 구조

```
src/
├── components/
│   ├── TodoInput.tsx      # 입력창 + 추가 버튼
│   ├── TodoList.tsx       # Todo 목록 렌더링
│   ├── TodoItem.tsx       # 개별 Todo 항목
│   └── FilterButtons.tsx  # 필터 버튼 (전체/완료/미완료)
├── types.ts               # Todo, FilterType, TodoAction 타입 정의
├── App.tsx                # 상태 관리 및 컴포넌트 조립
└── main.tsx
```

---

## 🧠 구현하며 배운 것

- **타입 설계**: `interface`로 데이터 구조를 정의하고, 유니온 타입(`"all" | "done" | "active"`)으로 제한된 값만 허용하도록 처리
- **이벤트 타입 처리**: `React.ChangeEvent`, `React.KeyboardEvent` 등 상황에 맞는 이벤트 타입 지정
- **상태 관리 리팩토링**: 개별 `useState` + 핸들러 함수들을 `useReducer` 기반의 단일 리듀서로 통합하여 상태 변경 로직을 한곳에서 관리
- **컴포넌트 분리**: 하나의 파일에 몰려있던 UI를 역할 단위(입력, 목록, 항목, 필터)로 분리하여 관심사 분리(Separation of Concerns) 적용
- **데이터 영속성**: `useEffect` + `localStorage`로 새로고침 이후에도 데이터가 유지되도록 구현

---

## 🚀 실행 방법

```bash
git clone https://github.com/sangyeop0529/260708_my-todo-app.git
cd 260708_my-todo-app
npm install
npm run dev
```

---

## 🔜 향후 개선 방향

- Zustand 등 외부 상태 관리 라이브러리와 비교 학습
- 애니메이션(항목 추가/삭제 시 전환 효과) 적용
- 접근성(a11y) 개선
