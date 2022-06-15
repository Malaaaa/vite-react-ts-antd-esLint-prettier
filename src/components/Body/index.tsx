import { Card, Layout, Form, Input, Button, DatePicker } from 'antd'
import moment from 'moment';
import type { DatePickerProps } from 'antd'
import React, { useCallback, useState } from 'react'
import styles from './index.module.less'
import logo from '../../static/images/favicon.png'
import { fetchUser } from '../../store/slice/user.slice';
import { useAppSelector } from '../../store/hooks';
export type Params = {

    displayName?: string;
    displayDate?: string;
}

const Body = () => {
    const user = useAppSelector((state) => { return state.user })
    const [userName, setUserName] = useState("");
    const [userDate, setUserDate] = useState("");

    const disabledDate = (current: any) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setUserDate(dateString);
    };
    const getToken = useCallback(
        () => {
            const params: Params = {
                displayName: userName,
                displayDate: userDate
            }
            fetchUser({ user: params });
        },
        [],
    )

    return (
        <Layout.Content className={styles.body}>
            {user?.token ? <Card className={styles.card}>
                <Form>
                    <Form.Item>
                        <img src={logo} className={styles.logo} alt="logo" />
                    </Form.Item>
                    {user?.error ? <Form.Item>{user?.error}</Form.Item> : ""}

                    <Form.Item>
                        <DatePicker className={styles.datepicker} disabledDate={disabledDate} onChange={onChange} placement='bottomLeft' format={"yyyy-MM-DD"} />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            status={(userName.length > 2 && userName.length < 20) ? "" : "warning"}
                            onChange={e => setUserName(e.target.value)}
                            value={userName}
                            placeholder="Username should be 2-20 characters" />
                    </Form.Item>
                    <Form.Item>
                        <Input value={userDate} placeholder="Date" />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={getToken} type="primary" htmlType="submit">
                            Get Token
                        </Button>
                    </Form.Item>
                </Form>
            </Card> : <div>Loading...</div>}
        </Layout.Content>
    )
}

export default Body
