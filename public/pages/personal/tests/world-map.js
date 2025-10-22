/**
 * World Map Component - Following Inspira UI Official Specification
 * Features: Animated arcs, pulsing markers, dotted background using dotted-map
 * Based on: https://inspira-ui.com/docs/components/visualization/world-map
 */

class WorldMap {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            dots: options.dots || [],
            lineColor: options.lineColor || "#0EA5E9",
            mapColor: options.mapColor || "#1e293b",
            mapBgColor: options.mapBgColor || "#0f172a",
            width: options.width || 800,
            height: options.height || 400
        };
        
        this.init();
    }

    async init() {
        try {
            // Dynamically import dotted-map
            const { DottedMap } = await import('dotted-map');
            this.DottedMap = DottedMap;
            
            this.createMap();
            this.createMarkers();
            this.createArcs();
            this.animateMarkers();
        } catch (error) {
            console.warn('dotted-map not available, using fallback pattern:', error);
            this.createMapFallback();
            this.createMarkers();
            this.createArcs();
            this.animateMarkers();
        }
    }

    createMap() {
        // Create SVG container
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", this.options.width);
        this.svg.setAttribute("height", this.options.height);
        this.svg.setAttribute("viewBox", `0 0 ${this.options.width} ${this.options.height}`);
        this.svg.style.background = this.options.mapBgColor;
        this.svg.style.borderRadius = "12px";
        this.svg.style.overflow = "hidden";

        // Create dotted background using dotted-map
        this.createDottedBackground();

        this.container.appendChild(this.svg);
    }

    createMapFallback() {
        // Fallback when dotted-map is not available
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", this.options.width);
        this.svg.setAttribute("height", this.options.height);
        this.svg.setAttribute("viewBox", `0 0 ${this.options.width} ${this.options.height}`);
        this.svg.style.background = this.options.mapBgColor;
        this.svg.style.borderRadius = "12px";
        this.svg.style.overflow = "hidden";

        // Create fallback dotted pattern
        this.createFallbackPattern();

        this.container.appendChild(this.svg);
    }

    createDottedBackground() {
        if (!this.DottedMap) return;

        try {
            // Create dotted map using the library
            const map = new this.DottedMap({ height: this.options.height, width: this.options.width });
            
            // Add world continents
            this.addWorldContinents(map);
            
            // Get SVG path
            const svgPath = map.getImageUrl({
                radius: 0.5,
                backgroundColor: this.options.mapBgColor,
                color: this.options.mapColor
            });

            // Create image element
            const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
            image.setAttribute("href", svgPath);
            image.setAttribute("width", "100%");
            image.setAttribute("height", "100%");
            image.setAttribute("opacity", "0.3");
            
            this.svg.appendChild(image);
        } catch (error) {
            console.warn('Error creating dotted map:', error);
            this.createFallbackPattern();
        }
    }

    addWorldContinents(map) {
        // Simplified world continents data
        const continents = [
            // North America
            { lat: 45, lng: -100, radius: 20 },
            // South America
            { lat: -15, lng: -60, radius: 18 },
            // Europe
            { lat: 50, lng: 10, radius: 15 },
            // Africa
            { lat: 0, lng: 20, radius: 22 },
            // Asia
            { lat: 35, lng: 100, radius: 25 },
            // Australia
            { lat: -25, lng: 135, radius: 12 }
        ];

        continents.forEach(continent => {
            map.addDot(continent.lat, continent.lng, continent.radius);
        });
    }

    createFallbackPattern() {
        // Create fallback dotted pattern
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        const pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
        pattern.setAttribute("id", "dots-fallback");
        pattern.setAttribute("width", "20");
        pattern.setAttribute("height", "20");
        pattern.setAttribute("patternUnits", "userSpaceOnUse");

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "10");
        circle.setAttribute("cy", "10");
        circle.setAttribute("r", "1");
        circle.setAttribute("fill", this.options.mapColor);
        circle.setAttribute("opacity", "0.3");

        pattern.appendChild(circle);
        defs.appendChild(pattern);
        this.svg.appendChild(defs);

        // Apply pattern to background
        const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        background.setAttribute("width", "100%");
        background.setAttribute("height", "100%");
        background.setAttribute("fill", "url(#dots-fallback)");
        this.svg.appendChild(background);
    }

    createMarkers() {
        this.markers = [];
        
        this.options.dots.forEach((dot, index) => {
            const marker = this.createMarker(dot.start, dot.label || `Location ${index + 1}`);
            this.markers.push(marker);
            this.svg.appendChild(marker);
        });
    }

    createMarker(coords, label) {
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        
        // Convert lat/lng to SVG coordinates
        const x = this.lngToX(coords.lng);
        const y = this.latToY(coords.lat);
        
        // Create pulsing circles (3 layers for depth effect)
        for (let i = 0; i < 3; i++) {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", x);
            circle.setAttribute("cy", y);
            circle.setAttribute("r", "4");
            circle.setAttribute("fill", "none");
            circle.setAttribute("stroke", this.options.lineColor);
            circle.setAttribute("stroke-width", "2");
            circle.setAttribute("opacity", "0.6");
            circle.classList.add("pulse-circle");
            circle.style.animationDelay = `${i * 0.5}s`;
            group.appendChild(circle);
        }
        
        // Create center dot
        const centerDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        centerDot.setAttribute("cx", x);
        centerDot.setAttribute("cy", y);
        centerDot.setAttribute("r", "3");
        centerDot.setAttribute("fill", this.options.lineColor);
        centerDot.setAttribute("filter", "drop-shadow(0 0 4px rgba(14, 165, 233, 0.6))");
        group.appendChild(centerDot);
        
        // Create label with better positioning
        if (label) {
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", x + 15);
            text.setAttribute("y", y - 15);
            text.setAttribute("fill", "white");
            text.setAttribute("font-size", "12");
            text.setAttribute("font-family", "Arial, sans-serif");
            text.setAttribute("font-weight", "600");
            text.setAttribute("filter", "drop-shadow(0 0 2px rgba(0, 0, 0, 0.8))");
            text.textContent = label;
            group.appendChild(text);
        }
        
        return group;
    }

    createArcs() {
        this.options.dots.forEach((dot, index) => {
            if (dot.end) {
                const arc = this.createArc(dot.start, dot.end);
                this.svg.appendChild(arc);
            }
        });
    }

    createArc(start, end) {
        const startX = this.lngToX(start.lng);
        const startY = this.latToY(start.lat);
        const endX = this.lngToX(end.lng);
        const endY = this.latToY(end.lat);
        
        // Create curved path with better arc calculation
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2 - Math.abs(endX - startX) * 0.1;
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", this.options.lineColor);
        path.setAttribute("stroke-width", "2");
        path.setAttribute("opacity", "0.6");
        path.classList.add("arc-line");
        path.setAttribute("filter", "drop-shadow(0 0 2px rgba(14, 165, 233, 0.3))");
        
        return path;
    }

    lngToX(lng) {
        // Convert longitude (-180 to 180) to X coordinate (0 to width)
        return ((lng + 180) / 360) * this.options.width;
    }

    latToY(lat) {
        // Convert latitude (-90 to 90) to Y coordinate (0 to height)
        return ((90 - lat) / 180) * this.options.height;
    }

    animateMarkers() {
        // Add enhanced CSS animations
        const style = document.createElement("style");
        style.textContent = `
            .pulse-circle {
                animation: pulse 2s infinite;
                transform-origin: center;
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1);
                    opacity: 0.6;
                }
                50% {
                    transform: scale(2.5);
                    opacity: 0.2;
                }
                100% {
                    transform: scale(1);
                    opacity: 0.6;
                }
            }
            
            .arc-line {
                animation: drawArc 1.5s ease-out forwards;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
            }
            
            @keyframes drawArc {
                to {
                    stroke-dashoffset: 0;
                }
            }
            
            .world-map-container svg {
                transition: all 0.3s ease;
            }
            
            .world-map-container:hover svg {
                transform: scale(1.02);
            }
        `;
        document.head.appendChild(style);
    }

    // Public method to add new dots
    addDot(dot) {
        this.options.dots.push(dot);
        const marker = this.createMarker(dot.start, dot.label);
        this.markers.push(marker);
        this.svg.appendChild(marker);
        
        if (dot.end) {
            const arc = this.createArc(dot.start, dot.end);
            this.svg.appendChild(arc);
        }
    }

    // Public method to update colors
    updateColors(lineColor, mapColor, mapBgColor) {
        this.options.lineColor = lineColor || this.options.lineColor;
        this.options.mapColor = mapColor || this.options.mapColor;
        this.options.mapBgColor = mapBgColor || this.options.mapBgColor;
        
        // Update existing elements
        this.svg.style.background = this.options.mapBgColor;
        
        // Update markers and arcs colors
        this.markers.forEach(marker => {
            const circles = marker.querySelectorAll('circle');
            circles.forEach(circle => {
                if (circle.getAttribute('fill') === 'none') {
                    circle.setAttribute('stroke', this.options.lineColor);
                } else {
                    circle.setAttribute('fill', this.options.lineColor);
                }
            });
        });
        
        const arcs = this.svg.querySelectorAll('.arc-line');
        arcs.forEach(arc => {
            arc.setAttribute('stroke', this.options.lineColor);
        });
    }

    // Method to resize map
    resize(width, height) {
        this.options.width = width;
        this.options.height = height;
        this.svg.setAttribute("width", width);
        this.svg.setAttribute("height", height);
        this.svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorldMap;
} else {
    window.WorldMap = WorldMap;
}
