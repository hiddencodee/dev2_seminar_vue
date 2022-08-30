import {Validator} from 'vee-validate';
import {required, email} from 'vee-validate/dist/rules.esm' // 기본적으로 제공되는 규칙을 모아둔 파일

// 존재하는 rule의 메세지를 바꾸기위해
Validator.extend('required', {
    ...required,
    getMessage: '필수 입력 사항입니다.',
})
Validator.extend('email', {
    ...email,
    getMessage: '이메일 형식이 아닙니다.',
})
// 새로운 rule 추가
// 이름
const NAME_MIN = 2
const NAME_MAX = 16
const NAME_REGEX = new RegExp("^[가-힣a-zA-Z]{"+ NAME_MIN + "," + NAME_MAX +"}$")

Validator.extend('name', {
    validate(value){
        return NAME_REGEX.test(value)
    },
    getMessage: `이름은 한글과 영문 대 소문자를 사용하게요. (특수기호, 공백 사용 불가, ${NAME_MIN} ~${NAME_MAX}자)`,
})

// 비밀번호
const PW_MIN = 8
const PW_MAX = 16
const PW_REGEX = new RegExp("^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{" + PW_MIN + "," + PW_MAX + "}$")
Validator.extend('pw', {
    validate(value){
        return PW_REGEX.test(value);
    },
    getMessage: `비밀번호는 ${PW_MIN}~${PW_MAX}자 영문 대 소문자, 숫자, 특수문자 조합을 사용하세요.`
})