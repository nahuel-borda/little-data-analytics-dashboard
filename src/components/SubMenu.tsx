import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem } from "./SidebarData";

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid lightblue;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 20px;
`;

const LinkWrapper = styled.span`
    display: flex;
`;
const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }
`;

type SubMenuProps = {
    item: SidebarItem; // Make sure to import SidebarItem from SidebarData.ts or the correct path
  };

const SubMenu = ({item}:SubMenuProps, key:any) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
        <SidebarLink to={item.path}
        onClick={item.subNav && showSubnav}>
            <LinkWrapper>
            {item.icon}
            
            <SidebarLabel>{item.title}</SidebarLabel>
            </LinkWrapper>
            <LinkWrapper>
            {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </LinkWrapper>
        </SidebarLink>
        {subnav &&
            item.subNav?.map((subItem:any) => (
                <DropdownLink to={subItem.path} key={subItem.title}>
                    {subItem.icon}
                <SidebarLabel>{subItem.title}</SidebarLabel>
                </DropdownLink>
            
            ))
        }
        </>
    );
};

export default SubMenu;
