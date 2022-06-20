# vuedash

## 개발 환경
 - 패키지 관리 : yarn
 - 컴파일러 : babel
 - Vue 버전 : vue3
 - 상태 관리 라이브러리 : vuex
 - 라우터 관리 라이브러리 : vue-router
 - UI 프레임워크 : quasar (https://quasar.dev/)

## 디렉토리 구조
 - src
   * assets : 리소스 디렉토리
   * components : 컴포넌트 디렉토리
   * pages : `router-view`에 보여질 페이지 디렉토리
   * router : `router-view`에 바인딩 될 path 디렉토리
   * store : 상태 관련 디렉토리 (vuex)
   * styles : sass style 관련 디렉토리

## 실행 방법
 - Install yarn (https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
 - Install vue-cli (https://cli.vuejs.org/guide/installation.html)
```
$] cd vuedash
$] yarn install
$] yarn run serve
```

## vuex 적용
 - src/store : vuex 메인 디렉토리
 - src/store/modules : 상태 모듈 디렉토리, 해당 디렉토리에 상태 모듈 별 코드 추가
 - global로 적용해서 어떤 컴포넌트든 쉽게 접근 가능 하도록 적용
 - getter 사용법
```
this.$store.getters['name'];
```
 - dispatch 사용법
```
await this.$store.dispatch('type', payload);
```
