import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import {useAppDispatch, useAppSelector} from "@/hooks/redux-hooks"
import {setLoggedinUser} from "@/redux/features/login/login-slice"
import type {AuthResponseType} from "@/services/authentication/auth-response-type"
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const loginState = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}

        <Button type='dashed' onClick={() => {
          const authResponse: AuthResponseType = {
            name: "John Doe",
            email: "jon@example.com",
            token: "slakjfalsnlasjkfasdf", 
            expiration: 2392489234, 
            roles: ["admin", "user"]
          }

          dispatch(setLoggedinUser(authResponse))

        }}>Test</Button>
      </Form.Item>
    </Form>
  );
};

export default App;