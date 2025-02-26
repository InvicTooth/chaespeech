# 스피치 강사 개인 포트폴리오 홈페이지 PRD

## 목차

- [상세 제품 설명](#상세-제품-설명)
- [참고 서비스 및 상세 근거](#참고-서비스-및-상세-근거)
- [핵심 기능 및 사양](#핵심-기능-및-사양)
- [추천 추가 기능](#추천-추가-기능)
- [사용자 페르소나 및 시나리오](#사용자-페르소나-및-시나리오)
- [기술 스택 권장 사항](#기술-스택-권장-사항)

---

## 상세 제품 설명

스피치 강사 개인 포트폴리오 홈페이지는 스피치 강사의 전문성을 알리고, 잠재 고객(특히 취업 준비생)에게 강사의 경력, 강의 분야, 행사 진행 경험, 그리고 컨설팅 서비스를 효과적으로 전달하기 위한 웹 기반 플랫폼입니다. 이 홈페이지는 강사의 개인 브랜드를 강화하고, 취업 준비생들이 스피치 역량을 향상시킬 수 있는 신뢰할 만한 전문가를 찾도록 돕는 것을 목표로 합니다.

- **목적**: 강사의 전문성을 시각적으로 보여주고, 고객과의 접점을 늘림.
- **타겟 플랫폼**: 웹(데스크톱 및 모바일 반응형 디자인).
- **주요 가치 제안**: 직관적인 UI로 경력과 서비스를 한눈에 파악 가능.

---

## 참고 서비스 및 상세 근거

### 1. Queen Bee Speech (https://queenbeespeech1.imweb.me/)

- **특징**:
  - 깔끔한 레이아웃과 직관적인 메뉴 구성(경력, 강의, 문의).
  - 강사의 사진과 함께 시각적 신뢰감을 제공.
  - 모바일 친화적 디자인.
- **적용 근거**:
  - 20-30대 취업 준비생은 단순하고 빠르게 정보를 얻고자 하므로, 직관적인 내비게이션과 깔끔한 디자인이 필요함.
  - 시각적 요소(사진, 아이콘)는 신뢰와 친근함을 전달하며, 이는 타겟 사용자층이 전문가를 선택할 때 중요한 요소로 작용.

### 2. 추가 참고 서비스: Wix 포트폴리오 템플릿 (예: Speaker Portfolio)

- **특징**:
  - 경력과 서비스를 섹션별로 구분.
  - 고객 후기 및 연락처 강조.
- **적용 근거**:
  - 취업 준비생은 강사의 실적과 신뢰도를 확인하고 싶어 하므로, 고객 후기와 연락 수단이 중요.
  - 섹션별 구분은 정보 탐색을 용이하게 함.

### 3. 추가 참고 서비스: Squarespace 개인 포트폴리오 (예: Public Speaker)

- **특징**:
  - 비디오 콘텐츠 삽입 가능.
  - 예약 시스템 연동.
- **적용 근거**:
  - 강의 샘플 비디오 제공은 강사의 실력을 직접 확인할 수 있어 신뢰도를 높임.
  - 예약 시스템은 상담 문의를 간소화하여 사용자 경험을 개선.

---

## 핵심 기능 및 사양

| **기능**      | **설명**                                                                 | **입력**             | **출력**             |
|---------------|--------------------------------------------------------------------------|----------------------|----------------------|
| 경력 탭       | 강사의 주요 경력(연도, 활동 내용, 성과 등)을 시간순으로 나열            | 연도, 활동명, 설명   | 경력 리스트         |
| 강의분야 탭   | 제공하는 강의 주제와 설명(예: 면접 스피치, 발표 기술 등)을 표시          | 주제, 설명          | 강의 분야 리스트    |
| 행사진행 탭   | 진행한 행사 목록(행사명, 날짜, 사진 등)을 보여줌                        | 행사명, 날짜, 사진   | 행사 기록 리스트    |
| 컨설팅 탭     | 컨설팅 서비스 내용(예: 1:1 코칭, 기업 강의)과 신청 방법 안내            | 서비스명, 설명, 방법 | 컨설팅 정보 페이지  |

- **언어**: 모든 사용자 인터페이스는 한국어로 제공.
- **디자인 요구사항**: 모바일 및 데스크톱에서 반응형으로 동작.

---

## 추천 추가 기능

1. **문의/예약 폼**
   - 사용자가 강의나 컨설팅을 신청할 수 있는 간단한 폼(이름, 연락처, 요청사항 입력).
   - **이점**: 사용자와 강사 간 소통을 간소화.
2. **샘플 강의 비디오**
   - 강의 스타일을 보여주는 짧은 영상 업로드 기능.
   - **이점**: 강사의 역량을 직관적으로 전달.
3. **고객 후기 섹션**
   - 기존 수강생의 후기를 텍스트 또는 별점 형태로 표시.
   - **이점**: 신뢰도와 전문성 강화.
4. **SNS 연동**
   - 강사의 소셜 미디어 계정 링크(예: 인스타그램, 유튜브).
   - **이점**: 추가 콘텐츠로 사용자 유입 확대.

---

## 사용자 페르소나 및 시나리오

### 사용자 페르소나

- **이름**: 김하은
- **나이**: 28세
- **직업**: 취업 준비생 (공기업 면접 준비 중)
- **목표**: 면접에서 자신감 있는 스피치 능력 향상
- **특징**:
  - 모바일로 정보 검색을 선호.
  - 강사의 실적과 신뢰도를 중요하게 생각.

### 시나리오

1. 김지영은 구글에서 "면접 스피치 강사"를 검색하고 홈페이지에 방문.
2. "경력 탭"에서 강사의 경험을 확인하며 신뢰를 느낌.
3. "강의분야 탭"에서 면접 스피치 강의가 있는지 확인.
4. "행사진행 탭"과 샘플 비디오로 강사의 스타일을 파악.
5. "컨설팅 탭"에서 1:1 코칭 신청 방법을 보고 문의 폼 작성.

---

## 기술 스택 권장 사항

- **프레임워크**: Next.js
  - 이유: 반응형 UI 구현이 용이하고, 컴포넌트 재사용으로 개발 효율성 증대. 간단한 API 서버 구축에 적합하며, 빠른 개발 가능.
- **데이터베이스**: Supabase
  - 이유: 경력, 강의, 행사 등의 구조화된 데이터를 효율적으로 관리.
- **호스팅**: Vercel
  - 이유: 확장성과 배포 용이성 제공.
- **CMS (선택)**: Sanity
  - 이유: 강사가 콘텐츠를 직접 업데이트할 수 있도록 지원.

---
