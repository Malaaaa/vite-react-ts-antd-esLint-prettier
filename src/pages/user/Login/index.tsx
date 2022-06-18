import { Button, Card, Form, Input, Layout, Typography } from 'antd'
import React, { useCallback, useState } from 'react'
import { LoginRequest } from '../../../types/user'
import styles from './index.module.less'
import logo from '../../../assets/images/logo_256x256.png'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../feartures/hooks';
import { setCredentials } from '../../../feartures/auth/auth.slice'
import { useLoginMutation } from '../../../services/auth/api'

type Props = {}

const Login = (props: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation();

    const [formState, setFormState] = useState<LoginRequest>({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const handleChange = ({
        target: { name, value }
    }: React.ChangeEvent<HTMLInputElement>) => { setFormState((prev) => ({ ...prev, [name]: value })) };

    const handleLogin = useCallback(
        async () => {
            try {
                const user = await login(formState).unwrap()
                dispatch(setCredentials(user))
                navigate('/')
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Invalid username or password")
                }
            }
        },
        [formState, login, dispatch, navigate],
    )
    return (
        <Layout.Content className={styles.body}>
            <Card className={styles.card}>
                <Form>
                    <Form.Item>
                        <img src={logo} className={styles.logo} alt="logo" />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Email"
                            maxLength={20}
                            onChange={handleChange}
                            value={formState.username}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            onChange={handleChange}
                            placeholder='password' />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleLogin} type="primary" htmlType="submit" loading={isLoading}>
                            Log in
                        </Button>
                    </Form.Item>
                    {error && <Form.Item><Typography.Text type="danger">{error}</Typography.Text></Form.Item>}
                </Form>
            </Card>
        </Layout.Content>

    )
}

export default Login