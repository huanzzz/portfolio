let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY) {
        navbar.style.top = '-80px'; // 隐藏导航栏
    } else {
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});

// JavaScript to handle hamburger menu toggle
document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.getElementById('slider-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pagination = document.getElementById('pagination');
    const paginationBtns = pagination.querySelectorAll('button');

    let currentIndex = 0;
    const slideCount = sliderContainer.children.length;

    // 更新轮播位置
    function updateSlider() {
        // 移动轮播到当前索引
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 更新页码指示器
        paginationBtns.forEach((btn, index) => {
            if (index === currentIndex) {
                btn.classList.remove('bg-gray-300');
                btn.classList.add('bg-gray-900');
            } else {
                btn.classList.remove('bg-gray-900');
                btn.classList.add('bg-gray-300');
            }
        });
    }

    // 上一张
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    });

    // 下一张
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    });

    // 页码点击事件
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentIndex = parseInt(btn.dataset.index);
            updateSlider();
        });
    });

    // 自动轮播（可选）
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 5000);

    // 鼠标悬停时暂停自动轮播
    sliderContainer.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    // 鼠标离开时恢复自动轮播
    sliderContainer.parentElement.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }, 5000);
    });
});