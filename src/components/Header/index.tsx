import { Layout, Menu } from 'antd'
import styles from './index.module.less'
import React from 'react'
import logo from '../../static/images/favicon.png'
type Props = {}

const Header = (props: Props) => {
    return (
        <Layout.Header className={styles.header}>
            <Menu mode='horizontal'>
                <Menu.Item disabled >
                    <a href="/">
                        <img src={logo} className={styles.logo} alt="logo" />
                    </a>
                </Menu.Item>
                <Menu.Item defaultChecked={true} key="1">WELCOME TO WEMI ROUND 2</Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Header