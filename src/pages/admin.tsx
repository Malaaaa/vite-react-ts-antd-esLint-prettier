import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Alert, Card, Divider, Layout, Typography } from 'antd';
import React from 'react';
import { useAppSelector } from '../feartures/hooks';
import { RootState } from '../feartures/store';
const Admin: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    return (
        <>
            <Alert
                message={'Login sucess.'}
                type="success"
                banner
            />
            <Layout.Content >

                <Card >
                    <Typography.Title level={2} style={{ textAlign: 'center' }}>
                        <SmileTwoTone /> Happy to see <HeartTwoTone twoToneColor="#eb2f96" /> You
                        <Divider />
                        <Typography.Text >{user.first_name} {user.last_name} </Typography.Text>
                    </Typography.Title>
                </Card>
            </Layout.Content>
        </>

    );
};

export default Admin;
