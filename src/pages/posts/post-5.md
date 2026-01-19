---
layout: ../../layouts/MarkdownPostLayout.astro
title: '我的第五篇博客文章' # 这里就是标题  
author: 'Astro 学习者' # 这里就是作者
description: "这篇文章会自己出现在列表中！" # 这里就是外看导语
image:
  url: "https://docs.astro.build/default-og-image.png"
  alt: "The word astro against an illustration of planets and stars."
pubDate: 2022-08-09 # 这里就是时间
tags: ["astro", "successes"] # 这里就是标签
thumbnail: "https://docs.astro.build/default-og-image.png" # 这里就是缩略图
---
这篇文章应该会与其他的博客文章一起显示，因为 `import.meta.glob()` 会返回一个包含所有文章的列表，以创建这个文章列表。# 这里就是正文