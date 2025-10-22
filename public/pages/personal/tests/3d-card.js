// 3D Card Effect Implementation
class Card3DEffect {
    constructor() {
        this.cards = document.querySelectorAll('.activity-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            this.setupCard(card);
        });
    }

    setupCard(card) {
        // 创建3D容器
        const container = document.createElement('div');
        container.className = 'card-3d-container';
        container.style.cssText = `
            perspective: 1000px;
            transform-style: preserve-3d;
        `;

        // 创建3D主体
        const body = document.createElement('div');
        body.className = 'card-3d-body';
        body.style.cssText = `
            transform-style: preserve-3d;
            transition: transform 0.3s ease;
            position: relative;
            width: 100%;
            height: 100%;
        `;

        // 将卡片内容移动到3D主体中
        const cardContent = card.innerHTML;
        body.innerHTML = cardContent;
        
        // 清空原卡片并添加3D结构
        card.innerHTML = '';
        card.appendChild(container);
        container.appendChild(body);

        // 添加鼠标事件监听器
        this.addMouseListeners(card, body);
    }

    addMouseListeners(card, body) {
        let isMouseEntered = false;

        card.addEventListener('mouseenter', () => {
            isMouseEntered = true;
        });

        card.addEventListener('mouseleave', () => {
            isMouseEntered = false;
            body.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });

        card.addEventListener('mousemove', (e) => {
            if (!isMouseEntered) return;

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 计算鼠标在卡片上的相对位置 (0-1)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -15; // 最大旋转15度
            const rotateY = ((x - centerX) / centerX) * 15;  // 最大旋转15度
            const translateZ = 20; // Z轴移动20px

            // 应用3D变换
            body.style.transform = `
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(${translateZ}px)
            `;

            // 为卡片内的不同元素添加不同的Z轴移动
            this.animateCardElements(body, x, y, rect);
        });
    }

    animateCardElements(body, mouseX, mouseY, rect) {
        const elements = body.querySelectorAll('.activity-icon, .activity-title, .activity-subtitle, .activity-tag, .timeline-bar, .stat-value');
        
        elements.forEach((element, index) => {
            const depth = (index + 1) * 5; // 不同元素有不同的深度
            const elementRect = element.getBoundingClientRect();
            const elementCenterX = elementRect.left + elementRect.width / 2 - rect.left;
            const elementCenterY = elementRect.top + elementRect.height / 2 - rect.top;
            
            // 计算元素相对于鼠标位置的影响
            const distanceX = (mouseX - elementCenterX) / rect.width;
            const distanceY = (mouseY - elementCenterY) / rect.height;
            
            // 应用微妙的3D效果
            element.style.transform = `
                translateZ(${depth}px) 
                translateX(${distanceX * 5}px) 
                translateY(${distanceY * 5}px)
            `;
        });
    }
}

// 初始化3D卡片效果
document.addEventListener('DOMContentLoaded', () => {
    new Card3DEffect();
});
