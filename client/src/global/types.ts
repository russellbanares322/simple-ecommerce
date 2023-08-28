import React from 'react';

export type TCircleClipPathProps = {
    topClassName:  string,
    rightClassName: string,
    bgClassName: string,
    heightClassName:  string,
    widthClassName:  string,

}

export type TProtectedRoutesProps = {
    children: React.JSX,
    isAuthenticated: boolean
}

export type TDropdownItems = {
    name: string,
    action:string | void 
}

export type TDropdownProps = {
    items: TDropdownItems[],
    handleToggleDropdown: () => void,
    open: boolean
}
