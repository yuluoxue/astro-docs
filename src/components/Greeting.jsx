import { useState } from 'preact/hooks';

/**
 * Greeting 组件：显示随机问候语的React函数组件
 * @param {Array} messages - 包含问候语消息的数组
 */
export default function Greeting({messages}) {

  // randomMessage 函数：从messages数组中随机选择一条消息
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  // 使用React的useState钩子来管理当前显示的问候语状态
  // 初始值为messages数组中的第一条消息
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      {/* 显示问候语和感谢信息 */}
      <h3>{greeting}！感谢访问！</h3>
      {/* "再来一条"按钮，点击时触发randomMessage函数并更新greeting状态 */}
      <button onClick={() => setGreeting(randomMessage())}>
        再来一条
      </button>
    </div>
  );
}