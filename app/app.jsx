import { useEffect, useState } from "react";
// import Button from './Button';
import './app.css';
import { ConfigProvider, Button } from 'antd';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('app rendered,hahah.okok');
  }, [])
  return (
    <ConfigProvider>
      <div>
        <p>hello, world,haha,heihei</p>
        <h1>{count}</h1>
        <Button type="primary" onClick={() => setCount(c => c + 1)}>Hello, button</Button>
      </div>
    </ConfigProvider>
  );
}