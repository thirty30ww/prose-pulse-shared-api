import http from "@auth-matrix/services/http";
import type {JwtVO, PPAddUserDTO, PPPermissionVO, PPRegisterDTO, PPPermissionDTO, PPUserVO} from "../type";
import { userApi as authMatrixUserApi, authApi as authMatrixAuthApi } from "@auth-matrix/services/api/user";

/**
 * 用户API
 */
export const userApi = {

    // 继承用户接口
    ...authMatrixUserApi,

    /**
     * 覆盖获取当前用户信息
     */
    getUser() {
        return http.get<PPUserVO>('/pp/user/get');
    },

    /**
     * 添加用户
     * @param dto 用户添加请求参数
     */
    addUser(dto: PPAddUserDTO) {
        return http.post<void>('/pp/user/add', { data: dto, showSuccess: true });
    },
}

/**
 * 认证API
 */
export const authApi = {
    // 继承认证接口
    ...authMatrixAuthApi,

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
    }
}

/**
 * 权限API
 */
export const fPermissionApi = {
    /**
     * 添加前台权限
     * @param dto 前台权限添加请求参数
     */
    addPermission(dto: PPPermissionDTO) {
        return http.post<number>('/pp/permission/add', { data: dto, showSuccess: true });
    },

    /**
     * 修改前台权限
     * @param dto 前台权限修改请求参数
     */
    modifyPermission(dto: PPPermissionDTO) {
        return http.post<number>('/pp/permission/modify', { data: dto, showSuccess: true });
    },

    /**
    * 获取前台权限树
    */
    getTree() {
        return http.get<PPPermissionVO[]>('/pp/permission/get');
    }
}