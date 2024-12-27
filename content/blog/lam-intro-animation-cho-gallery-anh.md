---
external: false
draft: false
title: Thử làm intro animation cho gallery images 
description: Dựa theo ý tưởng tại tympanus.net/codrops/2024/04/10/image-stack-entrance-animations/
date: 2024-12-23
---

Bài viết dựa theo [Image Stack Entrance Animations](https://tympanus.net/codrops/2024/04/10/image-stack-entrance-animations/)

Phân tích cách triển khai animation cho stack images.

Đầu tiên là html code:

- Container: chứa và căn chỉnh toàn bộ nội dung
- Header: impressive text

```html
<main class='stage grid content-center h-screen'>
  <!-- Intro text -->
  <header class='stage__header text-center'>
    <h1 class='playwrite-vn-guides-regular text-4xl leading-relaxed'>
      What do
    </h1>
    <h2 class='playwrite-vn-guides-regular text-4xl leading-relaxed'>
      you want to ...
    </h2>
  </header>
  <!-- List ảnh -->
</main>
```

Thêm font cho màu mè chút

```html
<link rel='preconnect' href='https://fonts.googleapis.com' />
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
<link
  href='https://fonts.googleapis.com/css2?family=Playwrite+VN+Guides&display=swap'
  rel='stylesheet'
/>
```

Tiếp đến là một wrapper sẽ là element chịu trách nhiệm cho animation của toàn bộ ảnh và một list các card chứa ảnh.

```html
<div class='scene'>
    <ul class='cards'>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/adrianna-geo-1rBg5YSi00c-unsplash.jpg'
          alt='adrianna-geo-1rBg5YSi00c-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/birmingham-museums-trust-5ruS8plfbvM-unsplash.jpg'
          alt='birmingham-museums-trust-5ruS8pIbfvM-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/birmingham-museums-trust-6fv0MEf3FUE-unsplash.jpg'
          alt='birmingham-museums-trust-6fv0MEf3FUE-unsplash'
        />
      </li>
      ...      
    </ul>
  </div>

```

Style ban đầu của các ảnh là xếp chồng lên nhau ở vị trí chính giữa screen

```css
.card {
  width: 6rem;
  aspect-ratio: 2/3;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.4rem;
  overflow: hidden;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

với scene container, style bình thường căn giữa nội dung như bình thường nhưng có setup perspective cho animation lật ảnh:

```css
.scene {
  perspective: 1000px;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
}
```
