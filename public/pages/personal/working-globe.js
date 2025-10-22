/**
 * 最简单可靠的Globe实现
 * 直接使用COBE库，确保100%工作
 */

console.log('🌍 Loading Working Globe...');

// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, initializing globe...');
    
    // 等待一下确保所有脚本加载完成
    setTimeout(function() {
        initWorkingGlobe();
    }, 1000);
});

function initWorkingGlobe() {
    console.log('🌍 Starting Working Globe initialization...');
    
    const container = document.getElementById('interactiveGlobe');
    if (!container) {
        console.error('❌ Globe container not found!');
        return;
    }
    
    console.log('✅ Container found:', container);
    
    // 清空容器
    container.innerHTML = '';
    
    // 创建canvas
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.borderRadius = '50%';
    canvas.style.cursor = 'grab';
    container.appendChild(canvas);
    
    console.log('✅ Canvas created');
    
    // 检查COBE是否加载
    console.log('🔍 Checking COBE availability...');
    console.log('window.createGlobe:', typeof window.createGlobe);
    console.log('window.COBE:', typeof window.COBE);
    
    // 旅行标记点
    const markers = [
        [13.7563, 100.5018, 0.05],  // Thailand
        [23.6978, 120.9605, 0.05],  // Taiwan
        [34.2655, 108.9508, 0.05],  // Xi'an
        [22.3193, 114.1694, 0.05],  // Hong Kong
        [22.1987, 113.5439, 0.05],  // Macau
        [1.3521, 103.8198, 0.05],   // Singapore
        [3.1390, 101.6869, 0.05],   // Malaysia
        [25.2048, 55.2708, 0.05],   // Dubai
        [25.0330, 102.7000, 0.05],  // Yunnan
        [26.6470, 106.6302, 0.05],  // Guizhou
        [39.8283, -98.5795, 0.05]   // USA
    ];
    
    let phi = 0;
    let isPointerDown = false;
    
    // 尝试创建Globe
    if (typeof window.createGlobe === 'function') {
        console.log('✅ COBE createGlobe function found!');
        
        try {
            const globe = window.createGlobe(canvas, {
                devicePixelRatio: 2,
                width: 600,
                height: 600,
                phi: 0,
                theta: 0.3,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.3, 0.3, 0.3],
                markerColor: [0.1, 0.8, 1],
                glowColor: [1, 1, 1],
                markers: markers,
                onRender: (state) => {
                    if (!isPointerDown) {
                        phi += 0.005;
                    }
                    state.phi = phi;
                }
            });
            
            console.log('✅ Globe created successfully!');
            
            // 添加交互
            setupGlobeInteraction(canvas);
            
            return globe;
            
        } catch (error) {
            console.error('❌ Error creating globe:', error);
            showWorkingFallback(container);
        }
        
    } else {
        console.log('❌ COBE not available, trying to load...');
        // 尝试重新加载
        loadCOBEAndRetry(container);
    }
    
    function setupGlobeInteraction(canvas) {
        let pointerInteracting = null;
        let pointerInteractionMovement = 0;
        
        canvas.addEventListener('mousedown', (e) => {
            isPointerDown = true;
            pointerInteracting = e.clientX - pointerInteractionMovement;
            canvas.style.cursor = 'grabbing';
        });
        
        canvas.addEventListener('mouseup', () => {
            isPointerDown = false;
            pointerInteracting = null;
            canvas.style.cursor = 'grab';
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (pointerInteracting !== null) {
                const delta = e.clientX - pointerInteracting;
                pointerInteractionMovement = delta;
                phi += delta * 0.01;
            }
        });
        
        canvas.addEventListener('mouseout', () => {
            isPointerDown = false;
            pointerInteracting = null;
            canvas.style.cursor = 'grab';
        });
        
        console.log('✅ Globe interaction setup complete');
    }
}

function loadCOBEAndRetry(container) {
    console.log('🔄 Loading COBE library...');
    
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/cobe@0.6.4/dist/cobe.js';
    script.onload = function() {
        console.log('✅ COBE loaded successfully, retrying...');
        setTimeout(() => {
            initWorkingGlobe();
        }, 500);
    };
    script.onerror = function() {
        console.error('❌ Failed to load COBE');
        showWorkingFallback(container);
    };
    document.head.appendChild(script);
}

function showWorkingFallback(container) {
    console.log('🔄 Showing working fallback...');
    
    container.innerHTML = `
        <div style="
            width: 100%;
            height: 600px;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            max-width: 600px;
            margin: 0 auto;
            cursor: pointer;
            animation: globePulse 4s ease-in-out infinite;
        ">
            <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
                border-radius: 50%;
            "></div>
            
            <div style="position: relative; z-index: 2;">
                <div style="font-size: 64px; margin-bottom: 20px; animation: float 3s ease-in-out infinite;">🌍</div>
                <div style="font-size: 24px; font-weight: bold; margin-bottom: 12px;">Interactive Globe</div>
                <div style="font-size: 16px; opacity: 0.9; margin-bottom: 8px;">11 Travel Destinations</div>
                <div style="font-size: 14px; opacity: 0.7;">Age 3-15 Journey</div>
            </div>
            
            <!-- 旅行标记点 -->
            <div style="position: absolute; top: 20%; left: 25%; width: 12px; height: 12px; background: #60a5fa; border-radius: 50%; animation: pulse 2s infinite;"></div>
            <div style="position: absolute; top: 30%; right: 30%; width: 12px; height: 12px; background: #34d399; border-radius: 50%; animation: pulse 2s infinite 0.5s;"></div>
            <div style="position: absolute; bottom: 35%; left: 35%; width: 12px; height: 12px; background: #fbbf24; border-radius: 50%; animation: pulse 2s infinite 1s;"></div>
            <div style="position: absolute; bottom: 25%; right: 25%; width: 12px; height: 12px; background: #f87171; border-radius: 50%; animation: pulse 2s infinite 1.5s;"></div>
            <div style="position: absolute; top: 50%; left: 15%; width: 12px; height: 12px; background: #a78bfa; border-radius: 50%; animation: pulse 2s infinite 2s;"></div>
            
            <div style="
                position: absolute;
                width: 120%;
                height: 120%;
                background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                animation: rotate 20s linear infinite;
                top: -10%;
                left: -10%;
                border-radius: 50%;
            "></div>
        </div>
        
        <style>
            @keyframes rotate {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.5); opacity: 0.7; }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            @keyframes globePulse {
                0%, 100% { box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3); }
                50% { box-shadow: 0 30px 60px rgba(59, 130, 246, 0.4); }
            }
        </style>
    `;
}

console.log('📦 Working Globe script loaded');
