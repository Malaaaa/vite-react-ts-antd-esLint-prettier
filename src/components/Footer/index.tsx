import { Col, Layout, Row } from 'antd'
import { GithubOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import React from 'react'


const Footer = () => {
    const defaultMessage = {
        id: 'app.copyright.produced',
        defaultMessage: 'Produced by Liangji Ma',
    };
    const currentYear = new Date().getFullYear();

    return (
        <Layout.Footer>
            <Row className={styles.footer}>
                <Col>
                    <a href='mailto:ethan@liangjima.com'>
                        ethan@liangjima.com</a>
                </Col>
                <Col>
                    {`${currentYear.toString()} © ${defaultMessage.defaultMessage}`}</Col>
                <Col>
                    <a href='https://github.com/malaaaa'>  <GithubOutlined /></a>
                </Col>
            </Row>
        </Layout.Footer>
    )
}

export default Footer