'use strict';

//メタビューポート
//const adjustViewport = (triggerWindowWidth = 370) => {
//  const metaViewport = document.querySelector('meta[name="viewport"]');
//  const viewportValue =
//    window.outerWidth < triggerWindowWidth
//      ? `width=${triggerWindowWidth}, user-scalable=no, target-densitydpi=device-dpi`
//      : 'width=device-width, initial-scale=1';
//  metaViewport.setAttribute('content', viewportValue);
//};

//window.addEventListener('DOMContentLoaded', () => {
//  adjustViewport(); // 引数に画面幅の数値を与えると、その値が画面幅が縮小される起点になる
//});

// スクロールに応じてtopの文字の透明度を変える
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        heroContent.classList.add('scroll-fade-in');
    }
});

 // メッセージスライド
 document.addEventListener('DOMContentLoaded', () => {
     const messageSlider = document.querySelector('.message-slider');
     let startX;
     let scrollLeft;

     messageSlider.addEventListener('mousedown', (e) => {
         startX = e.pageX - messageSlider.offsetLeft;
         scrollLeft = messageSlider.scrollLeft;
         messageSlider.style.cursor = 'grabbing';
         messageSlider.style.userSelect = 'none';
     });

     messageSlider.addEventListener('mouseleave', () => {
         messageSlider.style.cursor = 'grab';
     });

     messageSlider.addEventListener('mouseup', () => {
         messageSlider.style.cursor = 'grab';
         messageSlider.style.userSelect = 'auto';
     });

     messageSlider.addEventListener('mousemove', (e) => {
         if (!startX) return;
         const x = e.pageX - messageSlider.offsetLeft;
         const walk = (x - startX) * 2; // スクロールの速さを調整
        messageSlider.scrollLeft = scrollLeft - walk;
    });
 });

// メッセージカルーセル
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.message-carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // スライドの横並びを設定
    slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });

    let currentIndex = 0;

    const moveToSlide = (track, currentIndex) => {
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(track, currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(track, currentIndex);
    });
});


// sakura
window.addEventListener('DOMContentLoaded', () => {
    // コンテナを指定
    const section = document.querySelector('.cherry-blossom-container');
  
    // 花びらを生成する関数
    const createPetal = () => {
      const petalEl = document.createElement('span');
      petalEl.className = 'petal';
      const minSize = 10;
      const maxSize = 15;
      const size = Math.random() * (maxSize + 1 - minSize) + minSize;
      petalEl.style.width = `${size}px`;
      petalEl.style.height = `${size}px`;
      petalEl.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(petalEl);
  
      // 一定時間が経てば花びらを消す
      setTimeout(() => {
        petalEl.remove();
      }, 10000);
    }
  
    // 花びらを生成する間隔をミリ秒で指定
    setInterval(createPetal, 300);
  });

  //topボタン
window.addEventListener('scroll',()=>{
    const position = window.scrollY;
    // console.log(position);

    const topBtn = document.querySelector('#page-top');
    if(position>=250){
        topBtn.classList.add('open');
    } else {
        topBtn.classList.remove('open')
    }
});

//コミュニティ　掲示板
document.getElementById('new-thread-btn').addEventListener('click', function() {
    document.getElementById('new-thread-section').style.display = 'block';
});

document.getElementById('new-thread-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('thread-title').value;
    const content = document.getElementById('thread-content').value;
    
    if (title && content) {
        const threadList = document.querySelector('.thread-list');
        
        const threadCard = document.createElement('div');
        threadCard.classList.add('thread-card');
        
        const threadTitle = document.createElement('h3');
        threadTitle.textContent = title;
        
        const threadContent = document.createElement('p');
        threadContent.textContent = content;
        
        const threadMeta = document.createElement('div');
        threadMeta.classList.add('thread-meta');
        threadMeta.textContent = `作成者: 新規ユーザー | 投稿日: ${new Date().toLocaleDateString()} | 最新返信: ${new Date().toLocaleDateString()}`;
        
        threadCard.appendChild(threadTitle);
        threadCard.appendChild(threadContent);
        threadCard.appendChild(threadMeta);
        
        threadList.appendChild(threadCard);
        
        document.getElementById('new-thread-form').reset();
        document.getElementById('new-thread-section').style.display = 'none';
    }
});

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const threads = document.querySelectorAll('.thread-card');
    
    threads.forEach(function(thread) {
        const title = thread.querySelector('h3').textContent.toLowerCase();
        const content = thread.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            thread.style.display = '';
        } else {
            thread.style.display = 'none';
        }
    });
});

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const event = this.getAttribute('data-event');
        document.getElementById('event').value = event;
    });
});





