import authMatrixApi from "@auth-matrix/services";
import { userApi, authApi } from './user';

// 合并所有 API 模块（就像 backstage 之前做的那样）
const api = {
    ...authMatrixApi,
    user: userApi,      // 覆盖 auth-matrix 的用户API
    auth: authApi     // 添加 PP 特有的认证API
};

export default api;