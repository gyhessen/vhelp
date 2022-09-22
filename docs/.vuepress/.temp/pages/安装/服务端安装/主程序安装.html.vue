<template><div><h1 id="主程序安装" tabindex="-1"><a class="header-anchor" href="#主程序安装" aria-hidden="true">#</a> 主程序安装</h1>
<p><strong>作者：</strong> 快表客服</p>
<p><strong>摘要：</strong> 岁月仓促，然而青春的理想却不会因此而消褪，我们背负着对青春的承诺，一直都不曾停止脚步。风可以把一切都沉淀不见，却永远不能磨灭青春追梦的心。</p>
<p><strong>目录:</strong></p>
<nav class="table-of-contents"><ul><li><router-link to="#主程序安装1">主程序安装1</router-link><ul><li><router-link to="#主程序安装1a">主程序安装1A</router-link></li><li><router-link to="#主程序安装1b">主程序安装1B</router-link></li></ul></li><li><router-link to="#主程序安装2">主程序安装2</router-link></li><li><router-link to="#主程序安装3">主程序安装3</router-link></li><li><router-link to="#主程序安装4">主程序安装4</router-link></li><li><router-link to="#主程序安装5">主程序安装5</router-link></li><li><router-link to="#主程序安装6">主程序安装6</router-link></li><li><router-link to="#主程序安装7">主程序安装7</router-link></li><li><router-link to="#主程序安装8">主程序安装8</router-link></li></ul></nav>
<h2 id="主程序安装1" tabindex="-1"><a class="header-anchor" href="#主程序安装1" aria-hidden="true">#</a> 主程序安装1</h2>
<h3 id="主程序安装1a" tabindex="-1"><a class="header-anchor" href="#主程序安装1a" aria-hidden="true">#</a> 主程序安装1A</h3>
<p>  花半开最美，情留白最浓，懂得给生命留白，亦是一种生活的智慧。淡泊以明志，宁静以致远，懂得给心灵留白，方能在纷杂繁琐的世界，淡看得失，宠辱不惊，去意无留；懂得给感情留白，方能持久生香，留有余地，相互欣赏，拥有默契；懂得给生活留白，揽一份诗意，留一份淡定，多一份睿智，生命方能如诗如画。人心，远近相安，时光，浓淡相宜。有些风景要远观，才能美好；有些人情要淡然，才会久远，人生平淡更持久，留白方能生远，莲养心中，随遇而安，生命的最美不过是懂得的距离。</p>
<p><img src="/images/20220814145539.png" alt="where is the pic"></p>
<p>  花半开最美，情留白最浓，懂得给生命留白，亦是一种生活的智慧。淡泊以明志，宁静以致远，懂得给心灵留白，方能在纷杂繁琐的世界，淡看得失，宠辱不惊，去意无留；懂得给感情留白，方能持久生香，留有余地，相互欣赏，拥有默契；懂得给生活留白，揽一份诗意，留一份淡定，多一份睿智，生命方能如诗如画。人心，远近相安，时光，浓淡相宜。有些风景要远观，才能美好；有些人情要淡然，才会久远，人生平淡更持久，留白方能生远，莲养心中，随遇而安，生命的最美不过是懂得的距离。</p>
<p><img src="/images/135406rx3t5bx3r5rpotsr.gif" alt="gif test"></p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Sub</span> ButtunClick<span class="token punctuation">(</span>sender <span class="token keyword">As</span> <span class="token keyword">Object</span><span class="token punctuation">,</span>e <span class="token keyword">As</span> SpreadsheetGear<span class="token punctuation">.</span>Windows<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>ShapeActionEventArgs<span class="token punctuation">)</span>
                <span class="token keyword">If</span> <span class="token keyword">String</span><span class="token punctuation">.</span>Equals<span class="token punctuation">(</span>e<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span>Name<span class="token punctuation">,</span><span class="token string">"Button 1"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token keyword">Then</span>
                        e<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
                        Range<span class="token punctuation">(</span><span class="token string">"C2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token number">0</span>

                        <span class="token comment">''计时器(避免造成大频率循环造成资源占用)</span>
                        <span class="token keyword">Dim</span> XHTimer <span class="token keyword">As</span> DispatcherTimer <span class="token operator">=</span> <span class="token keyword">New</span> DispatcherTimer
                        XHTimer<span class="token punctuation">.</span>Interval <span class="token operator">=</span> <span class="token keyword">New</span> TimeSpan<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">'60秒</span>
                        <span class="token keyword">AddHandler</span> XHTimer<span class="token punctuation">.</span>Tick<span class="token punctuation">,</span> <span class="token keyword">Sub</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> e1<span class="token punctuation">)</span>

                                ActiveWorkBook<span class="token punctuation">.</span>WorkbookSet<span class="token punctuation">.</span>getlock<span class="token punctuation">(</span><span class="token punctuation">)</span>
                                <span class="token keyword">If</span> Range<span class="token punctuation">(</span><span class="token string">"C2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">></span><span class="token operator">=</span> <span class="token number">5</span> <span class="token keyword">Then</span>
                                        C1MessageBox<span class="token punctuation">.</span>Show<span class="token punctuation">(</span><span class="token string">"时间到！"</span><span class="token punctuation">,</span> <span class="token string">"快表提示"</span><span class="token punctuation">,</span> OK<span class="token punctuation">,</span> Information<span class="token punctuation">)</span>
                                        XHTimer<span class="token punctuation">.</span><span class="token keyword">Stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">'停止计时器</span>
                                        e<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
                                <span class="token keyword">Else</span>
                                        Range<span class="token punctuation">(</span><span class="token string">"C2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> Range<span class="token punctuation">(</span><span class="token string">"C2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">+</span> <span class="token number">1</span>
                                    <span class="token keyword">End</span> <span class="token keyword">If</span>
                                ActiveWorkBook<span class="token punctuation">.</span>WorkbookSet<span class="token punctuation">.</span>ReleaseLock<span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token keyword">End</span> <span class="token keyword">Sub</span>
               
                        XHTimer<span class="token punctuation">.</span>Start<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">'开始计时器</span>
                <span class="token keyword">End</span> <span class="token keyword">If</span>

       <span class="token keyword">End</span> <span class="token keyword">Sub</span><span class="token comment">'按钮/标签点击事件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主程序安装1b" tabindex="-1"><a class="header-anchor" href="#主程序安装1b" aria-hidden="true">#</a> 主程序安装1B</h3>
<table>
<thead>
<tr>
<th>Tables</th>
<th style="text-align:center">Are</th>
<th style="text-align:right">Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td>col 3 is</td>
<td style="text-align:center">right-aligned</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<p>🎉 💯</p>
<h4 id="主程序安装1b1" tabindex="-1"><a class="header-anchor" href="#主程序安装1b1" aria-hidden="true">#</a> 主程序安装1B1</h4>
<ol>
<li>花半开最美</li>
<li>静静的心里</li>
<li>即使青春</li>
<li>爱，有的时候</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个详情块，在 IE 中不生效</p>
</details>
<div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>危险区域，禁止通行</p>
</div>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，QuickSheet！'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo in todos<span class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.id<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    {{ todo.text }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token comment">// Highlighted</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">motd</span><span class="token operator">:</span> <span class="token string">'VuePress is awesome'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lorem</span><span class="token operator">:</span> <span class="token string">'ipsum'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>{{ 1 + 1 }}</p>
<p><span v-for="i in 9">{{ i }} </span></p>
<p>::: v-pre
<code v-pre>{{ This will be displayed as-is }}</code>
:::</p>
<p>  花半开最美，情留白最浓，懂得给生命留白，亦是一种生活的智慧。淡泊以明志，宁静以致远，懂得给心灵留白，方能在纷杂繁琐的世界，淡看得失，宠辱不惊，去意无留；懂得给感情留白，方能持久生香，留有余地，相互欣赏，拥有默契；懂得给生活留白，揽一份诗意，留一份淡定，多一份睿智，生命方能如诗如画。人心，远近相安，时光，浓淡相宜。有些风景要远观，才能美好；有些人情要淡然，才会久远，人生平淡更持久，留白方能生远，莲养心中，随遇而安，生命的最美不过是懂得的距离。</p>
<h2 id="主程序安装2" tabindex="-1"><a class="header-anchor" href="#主程序安装2" aria-hidden="true">#</a> 主程序安装2</h2>
<p>  静静的心里，都有一道最美丽的风景。尽管世事繁杂，此心依然，情怀依然；尽管颠簸流离，脚步依然，追求依然；尽管岁月沧桑，世界依然，生命依然。守住最美风景，成为一种风度，宁静而致远；守住最美风景，成为一种境界，悠然而豁达；守住最美风景，成为一种睿智，淡定而从容。带着前世的印记，心怀纯净，身披霞带，踏一水清盈，今生，寻美好而来。</p>
<p>  静静的心里，都有一道最美丽的风景。尽管世事繁杂，此心依然，情怀依然；尽管颠簸流离，脚步依然，追求依然；尽管岁月沧桑，世界依然，生命依然。守住最美风景，成为一种风度，宁静而致远；守住最美风景，成为一种境界，悠然而豁达；守住最美风景，成为一种睿智，淡定而从容。带着前世的印记，心怀纯净，身披霞带，踏一水清盈，今生，寻美好而来。</p>
<p>  静静的心里，都有一道最美丽的风景。尽管世事繁杂，此心依然，情怀依然；尽管颠簸流离，脚步依然，追求依然；尽管岁月沧桑，世界依然，生命依然。守住最美风景，成为一种风度，宁静而致远；守住最美风景，成为一种境界，悠然而豁达；守住最美风景，成为一种睿智，淡定而从容。带着前世的印记，心怀纯净，身披霞带，踏一水清盈，今生，寻美好而来。</p>
<p>  静静的心里，都有一道最美丽的风景。尽管世事繁杂，此心依然，情怀依然；尽管颠簸流离，脚步依然，追求依然；尽管岁月沧桑，世界依然，生命依然。守住最美风景，成为一种风度，宁静而致远；守住最美风景，成为一种境界，悠然而豁达；守住最美风景，成为一种睿智，淡定而从容。带着前世的印记，心怀纯净，身披霞带，踏一水清盈，今生，寻美好而来。</p>
<h2 id="主程序安装3" tabindex="-1"><a class="header-anchor" href="#主程序安装3" aria-hidden="true">#</a> 主程序安装3</h2>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<h2 id="主程序安装4" tabindex="-1"><a class="header-anchor" href="#主程序安装4" aria-hidden="true">#</a> 主程序安装4</h2>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<p>  即使青春是一株大地伟岸的树，但我明白，一株独秀永远不是挺拔，成行成排的林木，才是遮风挡沙的绿色长城。即使青春是一叶大海孤高的帆，但我明白，一叶孤帆很难远航，千帆竞发才是大海的壮观。爱心是一片照射在冬日的阳光，使贫病交迫的人感到人间的温暖；爱心是一泓出现在沙漠里的泉水，使濒临绝境的人重新看到生活的希望；爱心是一首飘荡在夜空的歌谣，使孤苦无依的人获得心灵的慰藉。</p>
<h2 id="主程序安装5" tabindex="-1"><a class="header-anchor" href="#主程序安装5" aria-hidden="true">#</a> 主程序安装5</h2>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<h2 id="主程序安装6" tabindex="-1"><a class="header-anchor" href="#主程序安装6" aria-hidden="true">#</a> 主程序安装6</h2>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<h2 id="主程序安装7" tabindex="-1"><a class="header-anchor" href="#主程序安装7" aria-hidden="true">#</a> 主程序安装7</h2>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<h2 id="主程序安装8" tabindex="-1"><a class="header-anchor" href="#主程序安装8" aria-hidden="true">#</a> 主程序安装8</h2>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
<p>  爱，有的时候不需要山盟海誓的承诺，但她一定需要细致入微的关怀与问候；爱，有的时候不需要梁祝化蝶的悲壮，但她一定需要心有灵犀的默契与投合；爱，有的时候不需要雄飞雌从的追随，但她一定需要相濡以沫的支持与理解。快乐=物质/欲望。这是美国经济学家萨缪尔森提出的快乐方程式。从经济学的观点看，物质消费越大，欲望越小，快乐就越大，正应了中国人的一句古话“知足常乐”。反之，如果一个人的物质消费有限，而欲望无穷大，将会怎样呢？路瓦栽夫人有那么多“梦想”，又有那么多“陶醉”，她怎么能不痛苦、伤心呢？</p>
</div></template>


