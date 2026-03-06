# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev        # 개발 서버 실행 (Turbopack)
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 검사
```

테스트 명령어는 현재 설정되어 있지 않습니다.

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

### 라우팅 구조

App Router 기반이며, `(dashboard)` 라우트 그룹을 사용합니다.
**라우트 그룹은 URL에 영향을 주지 않습니다.**

```
app/
  layout.tsx              # RootLayout — Providers, Geist 폰트
  page.tsx                # / — 홈 소개 페이지
  globals.css             # Tailwind v4 CSS 변수 및 테마
  (dashboard)/
    layout.tsx            # 사이드바 + 헤더 2단 레이아웃
    dashboard/page.tsx    # /dashboard
    analytics/page.tsx    # /analytics  (URL: /analytics, NOT /dashboard/analytics)
    settings/page.tsx     # /settings   (URL: /settings,  NOT /dashboard/settings)
```

### 레이아웃 계층

- **RootLayout** (`app/layout.tsx`): `<Providers>`로 감싸 ThemeProvider + Toaster 제공
- **DashboardLayout** (`app/(dashboard)/layout.tsx`): 데스크탑은 `Sidebar` + `Header` + `main`, 모바일은 `Header` 안의 `MobileNav`로 사이드바 접근

### 컴포넌트

- `components/providers.tsx` — ThemeProvider(`attribute="class"`, `defaultTheme="system"`) + Toaster
- `components/layout/header.tsx` — sticky 헤더, ThemeToggle, MobileNav 포함
- `components/layout/sidebar.tsx` — `usePathname`으로 활성 링크 감지, `onNavClick` prop으로 모바일 Sheet 닫기
- `components/layout/mobile-nav.tsx` — Sheet 기반 드로어, `<Sidebar>`를 재사용
- `components/ui/` — shadcn/ui 자동 생성 컴포넌트 (직접 수정 주의)

### 하이드레이션 패턴

테마 등 클라이언트 전용 값을 렌더링할 때 `useEffect` + `setState` 대신 `useSyncExternalStore`를 사용합니다.
(`react-hooks/exhaustive-deps` 관련 lint 에러 방지)

```ts
function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
```

### 스타일링

- Tailwind CSS v4 (`@import "tailwindcss"`) — CSS 변수 기반 테마, `oklch` 색상
- 다크모드: `.dark` 클래스 전환 방식 (`@custom-variant dark (&:is(.dark *))`)
- shadcn/ui 토큰: `--sidebar-*`, `--chart-*` 등 CSS 변수로 정의 (`globals.css`)
- 유틸리티: `cn()` = `clsx` + `tailwind-merge` (`lib/utils.ts`)

### 주요 라이브러리

| 용도 | 라이브러리 |
|------|-----------|
| 폼 | react-hook-form + zod + @hookform/resolvers |
| 날짜 | date-fns |
| 토스트 | sonner |
| 다크모드 | next-themes |
| 아이콘 | lucide-react |
