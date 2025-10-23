import http from "@auth-matrix/services/http";
import type { PPRegisterDTO, PPLoginDTO } from "../type/vo/pp-auth";
import type { JwtVO } from "@auth-matrix/services";

export const authApi = {
    /**
     * 发送注册验证码
     * @param email 接收验证码的邮箱
     */
    sendRegisterCaptcha(email: string) {
        return http.get<void>('/pp/auth/captcha/register', { params: { email } });
    },

    /**
     * 用户注册
     * @param dto 注册用户DTO
     */
    register(dto: PPRegisterDTO) {
        return http.post<JwtVO>('/pp/auth/register', { data: dto, showSuccess: true });
    },

    /**
     * 用户登录
     * @param dto 登录用户DTO
     */
    login(dto: PPLoginDTO) {
        return http.post<JwtVO>('/pp/auth/login', { data: dto, showSuccess: true });
    }
};