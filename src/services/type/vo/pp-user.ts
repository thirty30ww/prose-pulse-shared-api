import type {UserVO} from "@auth-matrix/services";
import {PPPermissionType} from "../enum/pp-user.ts";

/**
 * 拓展用户接口
 */
export interface PPUserVO extends UserVO {
    email?: string;
}

/**
 * PP前台权限实体
 */
export interface PPUsrPermission {
    id: number;
    name: string;
    path?: string;
    component?: string;
    permissionCode?: string;
    type: PPPermissionType;
    parentId: number;
    order: number;
    needVerify: boolean;
    createTime: string;
    updateTime: string;
    isValid: boolean;
    isDelete: boolean;
}

/**
 * PP前台权限VO
 */
export interface PPPermissionVO {
    node: PPUsrPermission;
    hasPermission: boolean;
    children: PPPermissionVO[];
}