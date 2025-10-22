# 3D Card Effect - 3D卡片效果

基于 [Inspira UI](https://inspira-ui.com/docs/components/cards/3d-card) 的3D卡片效果实现，为活动卡片添加了震撼的3D交互体验。

## 🚀 功能特性

### **3D变换效果**
- **鼠标跟踪**：卡片根据鼠标位置产生3D旋转效果
- **深度感知**：卡片元素在Z轴上有不同的深度层次
- **平滑过渡**：所有3D变换都有平滑的动画过渡

### **视觉增强**
- **透视效果**：1000px的透视距离营造真实3D感
- **元素分层**：图标、标题、标签等元素有不同的Z轴深度
- **光效边框**：悬停时显示渐变边框光效
- **内容高亮**：悬停时增强阴影和文字效果

## 🛠️ 技术实现

### **核心文件**
- `3d-card.js` - 3D效果的核心实现
- `styles.css` - 3D效果的样式定义
- `script.js` - 与现有交互功能的集成

### **实现原理**
1. **3D容器**：使用 `perspective: 1000px` 创建3D空间
2. **变换样式**：`transform-style: preserve-3d` 保持3D变换
3. **鼠标跟踪**：监听 `mousemove` 事件计算3D变换参数
4. **元素动画**：为不同元素应用不同的Z轴深度

## 🎯 使用方法

### **HTML结构**
```html
<div class="activity-card" data-category="study">
    <div class="activity-icon">🚀</div>
    <div class="activity-title">Learning Journey</div>
    <div class="activity-subtitle">My lifelong passion</div>
    <!-- 其他内容 -->
</div>
```

### **JavaScript集成**
```javascript
// 自动初始化，无需手动调用
// 3D效果会在页面加载后自动应用到所有 .activity-card 元素
```

## 🎨 自定义配置

### **3D效果参数**
```javascript
// 在 3d-card.js 中可以调整以下参数：
const rotateX = ((y - centerY) / centerY) * -15; // 最大X轴旋转角度
const rotateY = ((x - centerX) / centerX) * 15;  // 最大Y轴旋转角度
const translateZ = 20; // Z轴移动距离
```

### **CSS样式调整**
```css
/* 调整透视距离 */
.card-3d-container {
    perspective: 1000px; /* 可以调整为 800px 或 1200px */
}

/* 调整3D变换速度 */
.card-3d-body {
    transition: transform 0.3s ease; /* 可以调整时间 */
}
```

## 📱 响应式支持

### **移动端优化**
- 小屏幕减少透视距离（600px）
- 中等屏幕适度透视距离（800px）
- 桌面端完整透视距离（1000px）

### **触摸设备**
- 支持触摸设备的3D效果
- 触摸移动时产生相应的3D变换

## 🔧 兼容性

### **浏览器支持**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### **CSS特性要求**
- `transform-style: preserve-3d`
- `perspective` 属性
- `will-change: transform`

## 🎭 效果展示

### **悬停效果**
1. **3D旋转**：卡片根据鼠标位置产生自然的3D旋转
2. **深度变化**：卡片在Z轴上移动，产生浮起效果
3. **元素分层**：不同元素有不同的深度层次
4. **光效边框**：显示渐变边框光效
5. **内容高亮**：增强阴影和文字效果

### **交互体验**
- **鼠标移动**：实时跟踪鼠标位置
- **平滑动画**：所有变换都有平滑过渡
- **性能优化**：使用 `will-change` 优化渲染性能

## 🚀 性能优化

### **渲染优化**
- 使用 `will-change: transform` 提示浏览器优化
- 限制3D变换的计算频率
- 响应式透视距离减少计算负担

### **内存管理**
- 事件监听器的合理管理
- 避免内存泄漏
- 清理不需要的DOM引用

## 🔮 未来扩展

### **可能的增强功能**
- **触摸手势**：支持触摸设备的3D手势
- **动画预设**：提供多种3D动画预设
- **性能监控**：实时监控3D效果的性能表现
- **无障碍支持**：为辅助技术提供更好的支持

---

**注意**：此3D效果基于Inspira UI的设计理念，经过优化以适应我们的活动卡片设计。如需更多3D效果组件，请参考 [Inspira UI官方文档](https://inspira-ui.com/docs/components/cards/3d-card)。
