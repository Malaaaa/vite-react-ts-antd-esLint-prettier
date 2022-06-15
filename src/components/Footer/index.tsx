import { Col, Layout, Row } from 'antd'
import styles from './index.module.less'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Layout.Footer>
            <Row className={styles.footer}>
                <Col>
                    <a href='mailto:ethan@liangjima.com'>
                        ethan@liangjima.com</a>
                </Col>
                <Col>
                    778-951-6199</Col>
                <Col>
                    <a href='https://www.linkedin.com/in/ethan-liang-jima-a8a8b817b/'>  LinkedIn</a>
                </Col>
            </Row>

        </Layout.Footer>
    )
}

export default Footer