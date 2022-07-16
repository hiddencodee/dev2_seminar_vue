// 로그인을 통해 발급받은 토큰을 auth api 요청시 헤더에 설정하는 모듈
// 서버로부터 jwt 방식의 토큰을 발급받는 방식을 사용

export default function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return { Authorization: "Bearer" + user.accessToken };
  } else {
    return {};
  }
}
