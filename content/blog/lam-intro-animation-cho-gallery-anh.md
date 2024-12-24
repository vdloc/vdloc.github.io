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
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/birmingham-museums-trust-BPWZ01FtySg-unsplash.jpg'
          alt='birmingham-museums-trust-BPWZ01FtySg-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/birmingham-museums-trust-EdhYnPM_dbI-unsplash.jpg'
          alt='birmingham-museums-trust-EdhYnPM_dbl-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/birmingham-museums-trust-zWE5pOLWkio-unsplash.jpg'
          alt='birmingham-museums-trust-zWE5pOLWkio-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/geordanna-cordero-2Qg4y32pdCc-unsplash.jpg'
          alt='geordanna-cordero-2Qg4y32pdCc-unsplash'
        />
      </li>
      <li class='card'>
        <Image
          class='card__image'
          width={300}
          height={400}
          src='/images/entrance-animations-for-images/museums-victoria-ddKNTAwZu3k-unsplash.jpg'
          alt='museums-victoria-ddKNTAwZu3k-unsplash'
        />
      </li>
    </ul>
  </div>
```
