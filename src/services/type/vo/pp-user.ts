import type { AddUserDTO, UserVO, RegisterDTO } from "@auth-matrix/services";

/**
 * 拓展用户接口
 */
export interface PPUserVO extends UserVO {
    email?: string;
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