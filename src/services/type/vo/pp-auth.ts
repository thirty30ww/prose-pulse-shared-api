/**
 * PP项目注册DTO
 */
export interface PPRegisterDTO {
    email: string;
    password: string;
    captcha: string;
}

/**
 * PP项目登录DTO
 */
export interface PPLoginDTO {
    email: string;
    password: string;
}