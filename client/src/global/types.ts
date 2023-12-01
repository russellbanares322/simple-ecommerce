import React from 'react';

export type TCircleClipPathProps = {
    topClassName:  string,
    rightClassName: string,
    bgClassName: string,
    heightClassName:  string,
    widthClassName:  string,

}

export type TProtectedRouteProps = {
    children: React.ReactElement,
    isAuthenticated: boolean
}

export type TDropdownItems = {
    name: string,
    action:string | (() => void) | void
}

export type TDropdownProps = {
    items: TDropdownItems[],
    handleToggleDropdown: () => void,
    open: boolean
}
