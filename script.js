// AOS (Animate On Scroll) の初期化
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Chart.js のデフォルト設定
Chart.defaults.font.family = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
Chart.defaults.color = '#475569';
Chart.defaults.borderColor = '#e2e8f0';

// カラーパレット
const colors = {
    primary: '#2563eb',
    secondary: '#3b82f6',
    accent: '#60a5fa',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    china: '#dc2626',
    usa: '#2563eb',
    europe: '#7c3aed',
    japan: '#059669',
    gradient1: 'rgba(37, 99, 235, 0.8)',
    gradient2: 'rgba(59, 130, 246, 0.8)',
    gradient3: 'rgba(96, 165, 250, 0.8)'
};

// 1. 市場成長チャート
const marketCtx = document.getElementById('marketChart').getContext('2d');
new Chart(marketCtx, {
    type: 'line',
    data: {
        labels: ['2023年', '2024年', '2025年', '2030年', '2033年'],
        datasets: [{
            label: '市場規模（億ドル）',
            data: [196.9, 128.0, 135.4, 150.0, 178.0],
            borderColor: colors.primary,
            backgroundColor: colors.gradient1,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: colors.primary,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: colors.primary,
                borderWidth: 1,
                cornerRadius: 8
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '億ドル';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});

// 2. 地域別市場シェアチャート
const regionCtx = document.getElementById('regionChart').getContext('2d');
new Chart(regionCtx, {
    type: 'doughnut',
    data: {
        labels: ['中国（アジア太平洋）', 'アメリカ（北米）', 'ヨーロッパ', 'その他地域'],
        datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: [
                colors.china,
                colors.usa,
                colors.europe,
                colors.success
            ],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverBorderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// 3. 中国市場成長予測チャート
const chinaCtx = document.getElementById('chinaChart').getContext('2d');
new Chart(chinaCtx, {
    type: 'bar',
    data: {
        labels: ['2023年', '2025年', '2027年', '2030年'],
        datasets: [{
            label: '市場規模（億ドル）',
            data: [40.0, 42.5, 46.0, 50.0],
            backgroundColor: colors.china,
            borderColor: colors.china,
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '億ドル';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '億ドル';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// 4. 技術革新分野別投資比率チャート
const techInvestmentCtx = document.getElementById('techInvestmentChart').getContext('2d');
new Chart(techInvestmentCtx, {
    type: 'polarArea',
    data: {
        labels: ['超高弾性率ガラス繊維', '3D技術活用複合部品', '持続可能性技術', '製造プロセス最適化'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
                colors.primary,
                colors.secondary,
                colors.accent,
                colors.success
            ],
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    usePointStyle: true,
                    font: {
                        size: 11
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    display: false
                }
            }
        }
    }
});

// 5. 特許出願国別比較チャート
const patentCtx = document.getElementById('patentChart').getContext('2d');
new Chart(patentCtx, {
    type: 'bar',
    data: {
        labels: ['中国', 'アメリカ', '日本', 'その他'],
        datasets: [{
            label: '特許出願比率（%）',
            data: [68, 25, 5, 2],
            backgroundColor: [
                colors.china,
                colors.usa,
                colors.japan,
                colors.warning
            ],
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.parsed.x + '%';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 80,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// 6. 特許技術分野別分布チャート
const patentTechCtx = document.getElementById('patentTechChart').getContext('2d');
new Chart(patentTechCtx, {
    type: 'bar',
    data: {
        labels: ['プラチナ合金\nブッシング', '温度制御\nシステム', 'ノズル設計\n最適化', '材料耐久性\n向上', '製造プロセス\n改良'],
        datasets: [{
            label: '特許件数',
            data: [85, 67, 52, 35, 28],
            backgroundColor: colors.gradient1,
            borderColor: colors.primary,
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y + '件';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '件';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
});

// 7. 用途別市場シェアチャート
const applicationCtx = document.getElementById('applicationChart').getContext('2d');
new Chart(applicationCtx, {
    type: 'pie',
    data: {
        labels: ['建築・建設', '自動車', '航空宇宙', '電子・電気', 'その他'],
        datasets: [{
            data: [35, 30, 20, 10, 5],
            backgroundColor: [
                colors.warning,
                colors.primary,
                colors.success,
                colors.secondary,
                colors.accent
            ],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverBorderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// 8. 用途別成長率チャート
const growthCtx = document.getElementById('growthChart').getContext('2d');
new Chart(growthCtx, {
    type: 'bar',
    data: {
        labels: ['航空宇宙', '電子・電気', '自動車', '建築・建設'],
        datasets: [{
            label: 'CAGR (%)',
            data: [8.5, 6.2, 4.8, 3.5],
            backgroundColor: [
                colors.success,
                colors.secondary,
                colors.primary,
                colors.warning
            ],
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.parsed.x + '%';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 10,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// 9. 主要企業市場シェアチャート
const companyCtx = document.getElementById('companyChart').getContext('2d');
new Chart(companyCtx, {
    type: 'doughnut',
    data: {
        labels: ['中国系企業群', '米国系企業', '欧州系企業', '日本系企業', 'その他'],
        datasets: [{
            data: [45, 25, 15, 10, 5],
            backgroundColor: [
                colors.china,
                colors.usa,
                colors.europe,
                colors.japan,
                colors.warning
            ],
            borderWidth: 2,
            borderColor: '#ffffff',
            hoverBorderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.label + ': ' + context.parsed + '%';
                    }
                }
            }
        }
    }
});

// 10. R&D投資額比較チャート
const rdCtx = document.getElementById('rdChart').getContext('2d');
new Chart(rdCtx, {
    type: 'bar',
    data: {
        labels: ['中国企業', '米国企業', '欧州企業', '日本企業'],
        datasets: [{
            label: 'R&D投資額（億ドル）',
            data: [12.0, 10.0, 6.0, 4.0],
            backgroundColor: [
                colors.china,
                colors.usa,
                colors.europe,
                colors.japan
            ],
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + '億ドル';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '億ドル';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// 11. 課題の影響度評価チャート
const challengesCtx = document.getElementById('challengesChart').getContext('2d');
new Chart(challengesCtx, {
    type: 'bar',
    data: {
        labels: ['原材料価格\n上昇', '環境規制\n強化', '技術者\n不足', '貿易\n摩擦', '設備投資\n負担'],
        datasets: [{
            label: '影響度',
            data: [90, 85, 70, 65, 45],
            backgroundColor: [
                colors.danger,
                colors.danger,
                colors.warning,
                colors.warning,
                colors.success
            ],
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        const value = context.parsed.x;
                        let level = '';
                        if (value >= 80) level = '高';
                        else if (value >= 60) level = '中';
                        else level = '低';
                        return '影響度: ' + level;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        }
    }
});

// 12. 地域別成長率予測チャート
const regionGrowthCtx = document.getElementById('regionGrowthChart').getContext('2d');
new Chart(regionGrowthCtx, {
    type: 'bar',
    data: {
        labels: ['中国・アジア', '北米', '欧州', 'その他'],
        datasets: [{
            label: '成長率（%）',
            data: [5.2, 3.8, 2.9, 2.1],
            backgroundColor: [
                colors.china,
                colors.usa,
                colors.europe,
                colors.warning
            ],
            borderRadius: 6,
            borderSkipped: false
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.parsed.x + '%';
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 6,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// 13. 価格動向予測チャート
const priceCtx = document.getElementById('priceChart').getContext('2d');
new Chart(priceCtx, {
    type: 'line',
    data: {
        labels: ['2024年', '2024年Q2', '2024年Q4', '2025年', '2025年Q4'],
        datasets: [{
            label: '価格指数（2024年=100）',
            data: [100, 95, 98, 102, 105],
            borderColor: colors.warning,
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: colors.warning,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.parsed.y;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 90,
                max: 110,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});

// スムーススクロール機能
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ナビゲーションのアクティブ状態管理
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// 数値カウントアップアニメーション
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.innerHTML = currentValue.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// IntersectionObserver を使用してアニメーションをトリガー
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricElements = entry.target.querySelectorAll('.metric-value');
            metricElements.forEach(element => {
                const targetValue = parseFloat(element.textContent.replace(/[^\d.]/g, ''));
                if (targetValue) {
                    animateValue(element, 0, targetValue, 2000);
                }
            });
        }
    });
}, observerOptions);

// サマリーセクションを監視
const summarySection = document.querySelector('#summary');
if (summarySection) {
    observer.observe(summarySection);
}

// レスポンシブチャート設定
function handleResize() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
}

window.addEventListener('resize', handleResize);

// ページ読み込み完了時の処理
window.addEventListener('load', function() {
    // すべてのチャートが読み込まれた後にフェードインアニメーションを適用
    document.querySelectorAll('.chart-container, .chart-card').forEach(element => {
        element.classList.add('fade-in-up');
    });
});