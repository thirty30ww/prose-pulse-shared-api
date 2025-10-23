import authMatrixApi from "@auth-matrix/services";
import { userApi } from './user';
import { authApi } from './auth';

// 合并所有 API 模块（就像 backstage 之前做的那样）
const api = {
    ...authMatrixApi,
    user: userApi,      // 覆盖 auth-matrix 的用户API
    ppAuth: authApi     // 添加 PP 特有的认证API
};

export default api;