import type {AddUserDTO, RegisterDTO} from "@auth-matrix/services";

/**
 * PP前台权限DTO
 */
export interface PPPermissionDTO {
    id?: number;
    name: string;
    path?: string;
    component?: string;
    permissionCode?: string;
    parentId: number;
    needVerify: boolean;
    isValid: boolean;
}

/**
 * 拓展添加用户接口
 */
export interface PPAddUserDTO extends AddUserDTO {
    email?: string;
}

/**
 * PP项目注册DTO
 */
export interface PPRegisterDTO extends RegisterDTO {
    email: string;
    captcha: string;
}