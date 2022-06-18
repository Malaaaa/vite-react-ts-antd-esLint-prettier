import { Col, Layout, Row } from 'antd'
import styles from './index.module.less'
import React from 'react'
import logo from '../../assets/images/logo_32x32.png'
import { Link } from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
    return (
        <Layout.Header className={styles.header}>
            <Link to="/">
                <img src={logo} className={styles.logo} alt="logo" />
            </Link>
            <Row >
                <Col key="1" >
                    <Link to="/login">Log in
                    </Link>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default Header