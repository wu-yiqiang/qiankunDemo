import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

function render(props) {
  const { container } = props;
  // 为避免根id #root 与其他的 DOM 冲突，限制了查找范围
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
}

// 子应用独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('react app bootstraped');
}

// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('props from main framework', props);
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}