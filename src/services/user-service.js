// 사용자 데이터 처리 모듈
// 발급받은 로그인 토큰의 인증을 통해 데이터를 가져오는 함수가 선언

import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user";

class UserService {
  getUserContent() {
    return axios.get(API_URL + "userContent", { headers: authHeader() });
  }
}

export default new UserService();
