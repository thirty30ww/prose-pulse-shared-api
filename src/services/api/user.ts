import http from "@auth-matrix/services/http";
import type { PPAddUserDTO, PPUserVO } from "../type/vo/pp-user";
import { userApi as authMatrixUserApi } from "@auth-matrix/services/api/user";

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