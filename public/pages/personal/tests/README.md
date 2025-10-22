# SamuelQ 个人网站

基于Figma设计稿创建的个人网站，展示时间分布图和空间地图等个人信息。

## 🚀 功能特性

### 1. 时间分布图 (Time Chart)
- 使用Chart.js实现的堆叠面积图
- 展示从0岁到25岁的时间分配变化
- 包含学习、游戏、编程、社交家庭、音乐等类别
- 响应式设计，支持移动端查看

### 2. 空间地图 (Space Map)
- 世界地图样式的旅行足迹展示
- 当前位置：苏州，中国（高亮显示）
- 多个旅行地点标记
- 点击统计按钮查看详细旅行数据

### 3. 电影偏好 (Movie Preferences)
- 简单的柱状图展示电影类型偏好
- 包含浪漫、剧情、喜剧等类别

### 4. 音乐专辑 (Music Albums)
- 展示听过的音乐专辑类型
- 包含爵士、摇滚、流行等类别

### 5. 侧边栏导航
- 个人资料区域
- 艺术与创新相关链接
- 实时观看状态显示

## 🛠️ 技术栈

- **前端框架**: 原生HTML5 + CSS3 + JavaScript
- **图表库**: Chart.js (CDN引入)
- **字体**: Google Fonts - Bree Serif
- **响应式设计**: CSS Grid + Flexbox
- **动画效果**: CSS3 Transitions + JavaScript

## 📁 项目结构

```
myself/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 🎨 设计特色

- **现代化UI**: 采用卡片式设计，圆角边框
- **渐变色彩**: 使用柔和的渐变色彩搭配
- **交互动画**: 悬停效果、点击反馈、页面滚动动画
- **响应式布局**: 支持桌面端、平板、手机等不同设备

## 🚀 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器运行项目

### 本地服务器运行（推荐）

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 使用Live Server (VS Code扩展)
# 右键index.html -> Open with Live Server
```

然后在浏览器中访问 `http://localhost:8000`

## 📱 响应式支持

- **桌面端**: 1440px+ 完整布局
- **平板端**: 768px-1200px 自适应布局
- **手机端**: <768px 移动端优化布局

## 🎯 交互功能

### 时间图表
- 鼠标悬停显示详细数据
- 支持触摸操作（移动端）
- 平滑的动画过渡效果

### 空间地图
- 点击标记显示位置信息
- 统计按钮弹出详细数据
- 悬停放大效果

### 小图表
- 进入视口时的生长动画
- 悬停高亮效果

## 🔧 自定义配置

### 修改时间数据
在 `script.js` 中的 `timeData` 对象修改数据：

```javascript
const timeData = {
    labels: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '25'],
    datasets: [
        {
            label: 'Study',
            data: [85, 90, 88, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40],
            // ... 其他配置
        }
        // ... 其他数据集
    ]
};
```

### 修改地图标记
在 `script.js` 中调整地图标记位置：

```javascript
<div class="map-marker" style="top: 35%; left: 70%;"></div>
```

### 修改颜色主题
在 `styles.css` 中修改CSS变量：

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #F5A623;
}
```

## 🌟 浏览器兼容性

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📝 更新日志

### v1.0.0 (2025-01-17)
- 初始版本发布
- 实现时间分布图
- 实现空间地图
- 添加响应式设计
- 完成基础交互功能

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

## 📄 许可证

MIT License - 详见LICENSE文件

## 📞 联系方式

- 项目地址: [GitHub Repository]
- 设计稿: [Figma Design]
- 邮箱: [Your Email]

---

**注意**: 本项目基于Figma设计稿创建，仅供学习和展示使用。
