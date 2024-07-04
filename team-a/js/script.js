'use strict';

//イントロの設定
document.addEventListener('DOMContentLoaded', function() {
    const introVideo = document.getElementById('intro-video');
    const aboutSection = document.getElementById('about');
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero');
    const urlParams = new URLSearchParams(window.location.search);
    const skipIntro = urlParams.has('skipIntro');
    const introElement = document.getElementById('intro');

    function startAboutAnimation() {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = 'translateY(0)';
    }

    if (!skipIntro && introElement) {
        // skipIntroがない場合のみイントロを再生
        introElement.style.display = 'block';
        header.classList.add('intro-active');
        setTimeout(function() {
            const heroHeight = heroSection ? heroSection.clientHeight : 0;
            introElement.style.setProperty('--hero-height', `${heroHeight}px`);
            introElement.classList.add('drop');
            introElement.addEventListener('animationend', function() {
                introElement.style.display = 'none';
                header.classList.remove('intro-active');
                header.classList.add('fade-in');
                header.querySelector('nav').style.display = 'block';
                header.querySelector('.logo').style.display = 'block';
                window.scrollTo(0, header.offsetTop);
                startAboutAnimation(); // アニメーションを開始
            });
        }, 6000);
    } else {
        // skipIntroがある場合はイントロをスキップ
        if (introElement) {
            introElement.style.display = 'none';
        }
        header.querySelector('nav').style.display = 'block';
        header.querySelector('.logo').style.display = 'block';
        header.classList.add('fade-in'); // ヘッダーにフェードインアニメーションを追加
        window.scrollTo(0, 0); // ページトップにスクロール
        startAboutAnimation(); // アニメーションを開始
    }

    // 動画の終了を検出
    if (introVideo) {
        introVideo.addEventListener('ended', startAboutAnimation);
    }
});



// トップへ戻るボタンの設定
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const introElement = document.getElementById('intro');

    function checkScroll() {
        // イントロが表示されている間はトップへ戻るボタンを非表示にする
        if (introElement.style.display !== 'none') {
            scrollToTopButton.classList.remove('show');
            return;
        }

        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ハンバーガーメニューの設定
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    function checkHeaderScroll() {
        const heroSectionHeight = heroSection.clientHeight;
        if (window.innerWidth <= 768) {
            if (window.scrollY > heroSectionHeight) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', checkHeaderScroll);
    window.addEventListener('resize', checkHeaderScroll);

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
});

// お客様の声スライダー（スマートフォン用Effect cards）
document.addEventListener('DOMContentLoaded', function() {
    let reviewSwiper = new Swiper('.review-swiper-container', {
        loop: true,
        effect: 'cards',
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.review-swiper-pagination',
            clickable: true,
        },
        cardsEffect:{
            slideShadows:false,
        },
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});

// 商品スライダー
document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper('.swiper-container', {
        loop: true, //スライダーが最後のスライドから最初のスライドにループ
        slidesPerView: 3, //3つのスライドを同時に表示
        spaceBetween: 30, //スライド間のスペース30px
        autoplay: {
            delay: 2500, //2.5秒ごとにスライドが切り替わる
            disableOnInteraction: false, //自動再生を続ける
        },
        pagination: {
            el: '.swiper-pagination', //ページネーション要素のセレクターを指定
            clickable: true, //ページネーションのドットをクリックするとそのスライドに移動
        },
        // navigation: {
        //     nextEl: '.swiper-button-next', //次のスライドに移動するためのボタンセレクター
        //     prevEl: '.swiper-button-prev', //前のスライドに移動するためのボタンセレクター
        // },
    });
});

// 商品詳細ページを新しいタブで開く処理
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.jump-button').forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });
});

// ページ内リンクのスムーズスクロール
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




