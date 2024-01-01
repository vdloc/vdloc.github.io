---
external: false
draft: false
title: Xây dựng layout cho article với CSS Grid
description: Xây dựng layout cho article với CSS Grid
date: 2023-11-05
---

Bài viết dựa theo [Article Layout with CSS Grid](https://mastery.games/post/article-grid-layout/)

Với xu hướng thiết kế hiện đại, bố cục nội dung trong các bài viết của các trang content như blog, news, các reading platform như medium, ny times đều có điểm chung là nội dung được thu gọn trong một cột được căn giữa trang để tối ưu hóa trải nghiệm đọc của người dùng thay vì trải dàn toàn bộ viewport như xu hướng thiết kế cũ lấy cảm hứng từ báo giấy.

Có nhiều cách để có thể thiết kế bố cục như vậy với CSS, trong bài viết này, chúng ta sẽ thử một approach với CSS Grid.

Đầu tiên, đây là code:

```css
.post {
    display: grid;
    grid-template-columns:
        minmax(1.2rem, 1fr)
        minmax(auto, 57ch)
        minmax(1.2rem, 1fr);    
}
```

Với setting này, hai cột bên cạnh nội dung chính có `minimum value` là `1.2rem` và `maximum value` là `1fr` . Giá trị `1.2rem` sẽ là đóng vai trò là giá trị gutter spacing khi trang ở màn hình nhỏ nhất (mobile) và sẽ tự động chiếm một khoảng bằng nhau hai bên khi trang ở kích cỡ lớn hơn. Cột giữa chính sẽ có giá trị lớn nhất là `57ch` để đảm bảo rằng độ rộng của văn bản không vượt quá 57 kí tự (characters).

OK vậy là đã xong với nội dung. Nhưng ngoài nội dung là chữ thì trong một bài viết sẽ thường có các media objects như ảnh, video, iframe. Và một trong những khó khăn thường gặp nhất khi thiết kế các media object này là khi chúng ta muốn để các object này có độ rộng là full viewport width thay vì được bao gọn trong cột content. Nhưng với việc sử dụng grid layout cho toàn bộ trang, ta có thể dễ dàng setup width cho các media object này thay vì sử dụng các css hack.

Talk is cheap, here is the code:

```css
/* Với nội dung text, setup cho content nằm trong cột giữa */
p {
  grid-column: 2;
}

/* Với ảnh, ta cho grid start từ 1 và end ở 4 để  width full viewport */
img {
  grid-column: 1 / 4;
  width: 100%;
  max-width: 100ch;
  justify-self: center;
}
```

![Demo](/images/article-layout-with-css-grid/demo.gif)
