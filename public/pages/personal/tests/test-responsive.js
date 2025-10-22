// 响应式布局测试脚本
class ResponsiveTester {
    constructor() {
        this.init();
    }

    init() {
        this.createTestUI();
        this.bindEvents();
        this.updateInfo();
        this.testResponsiveFeatures();
    }

    createTestUI() {
        // 创建测试控制面板
        const testPanel = document.createElement('div');
        testPanel.id = 'responsive-test-panel';
        testPanel.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 10px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            min-width: 250px;
            max-height: 80vh;
            overflow-y: auto;
        `;

        testPanel.innerHTML = `
            <h3 style="margin: 0 0 10px 0; color: #00ff00;">响应式测试面板</h3>
            
            <div style="margin-bottom: 10px;">
                <strong>屏幕信息:</strong>
                <div>宽度: <span id="width-info">-</span>px</div>
                <div>高度: <span id="height-info">-</span>px</div>
                <div>设备: <span id="device-info">-</span></div>
                <div>方向: <span id="orientation-info">-</span></div>
            </div>

            <div style="margin-bottom: 10px;">
                <strong>布局状态:</strong>
                <div>居中: <span id="center-status">-</span></div>
                <div>网格: <span id="grid-status">-</span></div>
                <div>响应式: <span id="responsive-status">-</span></div>
            </div>

            <div style="margin-bottom: 10px;">
                <strong>测试功能:</strong>
                <button id="test-center" style="margin: 2px; padding: 5px; font-size: 10px;">测试居中</button>
                <button id="test-grid" style="margin: 2px; padding: 5px; font-size: 10px;">测试网格</button>
                <button id="test-touch" style="margin: 2px; padding: 5px; font-size: 10px;">测试触摸</button>
            </div>

            <div style="margin-bottom: 10px;">
                <strong>模拟设备:</strong>
                <button id="simulate-mobile" style="margin: 2px; padding: 5px; font-size: 10px;">手机</button>
                <button id="simulate-tablet" style="margin: 2px; padding: 5px; font-size: 10px;">平板</button>
                <button id="simulate-desktop" style="margin: 2px; padding: 5px; font-size: 10px;">桌面</button>
            </div>

            <div style="margin-bottom: 10px;">
                <strong>CSS检查:</strong>
                <div id="css-status">检查中...</div>
            </div>

            <button id="close-panel" style="margin-top: 10px; padding: 8px; background: #ff4444; color: white; border: none; border-radius: 5px; cursor: pointer; width: 100%;">关闭面板</button>
        `;

        document.body.appendChild(testPanel);
    }

    bindEvents() {
        // 绑定事件
        document.getElementById('test-center').addEventListener('click', () => this.testCentering());
        document.getElementById('test-grid').addEventListener('click', () => this.testGrid());
        document.getElementById('test-touch').addEventListener('click', () => this.testTouch());
        document.getElementById('simulate-mobile').addEventListener('click', () => this.simulateDevice('mobile'));
        document.getElementById('simulate-tablet').addEventListener('click', () => this.simulateDevice('tablet'));
        document.getElementById('simulate-desktop').addEventListener('click', () => this.simulateDevice('desktop'));
        document.getElementById('close-panel').addEventListener('click', () => this.closePanel());

        // 窗口大小改变事件
        window.addEventListener('resize', () => this.updateInfo());
        window.addEventListener('orientationchange', () => this.updateInfo());
    }

    updateInfo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const orientation = width > height ? '横屏' : '竖屏';

        let device = '桌面';
        if (width < 480) device = '手机';
        else if (width < 768) device = '平板';
        else if (width < 1200) device = '小桌面';

        document.getElementById('width-info').textContent = width;
        document.getElementById('height-info').textContent = height;
        document.getElementById('device-info').textContent = device;
        document.getElementById('orientation-info').textContent = orientation;

        // 更新布局状态
        this.updateLayoutStatus();
    }

    updateLayoutStatus() {
        // 检查居中状态
        const mainContent = document.querySelector('.main-content');
        const isCentered = mainContent && 
            getComputedStyle(mainContent).marginLeft === 'auto' && 
            getComputedStyle(mainContent).marginRight === 'auto';

        document.getElementById('center-status').textContent = isCentered ? '✅ 已居中' : '❌ 未居中';

        // 检查网格状态
        const contentGrid = document.querySelector('.content-grid');
        const isGrid = contentGrid && 
            getComputedStyle(contentGrid).display === 'grid';

        document.getElementById('grid-status').textContent = isGrid ? '✅ 网格布局' : '❌ 非网格';

        // 检查响应式状态
        const isResponsive = this.checkResponsiveCSS();
        document.getElementById('responsive-status').textContent = isResponsive ? '✅ 响应式' : '❌ 非响应式';
    }

    checkResponsiveCSS() {
        // 检查是否加载了响应式CSS
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        let hasResponsive = false;
        
        links.forEach(link => {
            if (link.href.includes('responsive-styles.css')) {
                hasResponsive = true;
            }
        });

        // 检查CSS变量和媒体查询
        const style = getComputedStyle(document.body);
        const hasClamp = style.fontSize.includes('clamp');
        const hasGrid = style.display === 'grid' || style.display === 'flex';

        return hasResponsive && (hasClamp || hasGrid);
    }

    testCentering() {
        const mainContent = document.querySelector('.main-content');
        if (!mainContent) {
            alert('未找到主内容容器');
            return;
        }

        const rect = mainContent.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const centerOffset = Math.abs((rect.left + rect.width / 2) - (windowWidth / 2));

        if (centerOffset < 50) {
            alert(`✅ 居中测试通过！偏移量: ${centerOffset.toFixed(2)}px`);
        } else {
            alert(`❌ 居中测试失败！偏移量: ${centerOffset.toFixed(2)}px`);
        }
    }

    testGrid() {
        const grid = document.querySelector('.content-grid');
        if (!grid) {
            alert('未找到网格容器');
            return;
        }

        const style = getComputedStyle(grid);
        const isGrid = style.display === 'grid';
        const hasAutoFit = style.gridTemplateColumns.includes('auto-fit');

        if (isGrid && hasAutoFit) {
            alert('✅ 网格测试通过！使用响应式网格布局');
        } else {
            alert('❌ 网格测试失败！');
        }
    }

    testTouch() {
        let touchSupported = false;
        let gestureSupported = false;

        // 检查触摸支持
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            touchSupported = true;
        }

        // 检查手势支持
        if ('ongesturestart' in window) {
            gestureSupported = true;
        }

        let message = '';
        if (touchSupported) {
            message += '✅ 触摸支持\n';
        } else {
            message += '❌ 触摸不支持\n';
        }

        if (gestureSupported) {
            message += '✅ 手势支持\n';
        } else {
            message += '❌ 手势不支持\n';
        }

        alert(message);
    }

    simulateDevice(device) {
        let width, height;
        
        switch (device) {
            case 'mobile':
                width = 375;
                height = 667;
                break;
            case 'tablet':
                width = 768;
                height = 1024;
                break;
            case 'desktop':
                width = 1200;
                height = 800;
                break;
        }

        // 模拟设备尺寸（仅用于测试）
        const testDiv = document.createElement('div');
        testDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 255, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 9999;
            text-align: center;
        `;
        testDiv.innerHTML = `
            <h3>设备模拟</h3>
            <p>${device.toUpperCase()}</p>
            <p>${width} × ${height}</p>
            <button onclick="this.parentElement.remove()">关闭</button>
        `;

        document.body.appendChild(testDiv);

        // 3秒后自动关闭
        setTimeout(() => {
            if (testDiv.parentElement) {
                testDiv.remove();
            }
        }, 3000);
    }

    closePanel() {
        const panel = document.getElementById('responsive-test-panel');
        if (panel) {
            panel.remove();
        }
    }

    testResponsiveFeatures() {
        // 检查CSS加载状态
        setTimeout(() => {
            const cssStatus = document.getElementById('css-status');
            if (cssStatus) {
                const isResponsive = this.checkResponsiveCSS();
                cssStatus.innerHTML = isResponsive ? 
                    '✅ 响应式CSS已加载' : 
                    '❌ 响应式CSS未加载';
                cssStatus.style.color = isResponsive ? '#00ff00' : '#ff4444';
            }
        }, 1000);
    }
}

// 自动初始化测试器
document.addEventListener('DOMContentLoaded', () => {
    new ResponsiveTester();
});

// 导出测试器类（可选）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResponsiveTester;
}
