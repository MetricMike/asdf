import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"Docs & Site","description":"","frontmatter":{},"headers":[],"relativePath":"contribute/documentation.md","filePath":"contribute/documentation.md","lastUpdated":1687069487000}'),l={name:"contribute/documentation.md"},o=e(`<h1 id="docs-site" tabindex="-1">Docs &amp; Site <a class="header-anchor" href="#docs-site" aria-label="Permalink to &quot;Docs &amp; Site&quot;">​</a></h1><p>Documentation &amp; site contribution guide.</p><h2 id="initial-setup" tabindex="-1">Initial Setup <a class="header-anchor" href="#initial-setup" aria-label="Permalink to &quot;Initial Setup&quot;">​</a></h2><p>Fork <code>asdf</code> on GitHub and/or Git clone the default branch:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">GITHUB_USE</span><span style="color:#E1E4E8;">R</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="color:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/asdf-vm/asdf.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># clone your fork</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">GITHUB_USE</span><span style="color:#24292E;">R</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/asdf.git</span></span>
<span class="line"><span style="color:#6A737D;"># or clone asdf</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>The tools for Docs site development are managed with <code>asdf</code> in the <code>docs/.tool-versions</code>. Add the plugins with:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodejs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/asdf-vm/asdf-nodejs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodejs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/asdf-vm/asdf-nodejs</span></span></code></pre></div><p>Install the tool version(s) with:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><ul><li><a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a>: JavaScript runtime built on Chrome&#39;s V8 JavaScript engine.</li></ul><p>Install Node.js dependencies from <code>docs/package.json</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to &quot;Development&quot;">​</a></h2><p><a href="https://vitepress.dev/" target="_blank" rel="noreferrer">VitePress (v2)</a> is the Static Site Generator (SSG) we use to build the asdf documentation site. It was chosen to replace <a href="https://docsify.js.org/" target="_blank" rel="noreferrer">Docsify.js</a> and subsequently VuePress as we would like to support an HTML only fallback when users do not have JavaScript available or enabled. This was not possible with Docsify &amp; VitePress quicly supplanted VuePress. Other than this, the feature-set is largely the same, with the focus on writing Markdown files with minimal configuration.</p><p><code>package.json</code> contains the scripts required for development:</p><p>@<a href="../package.json">code json{3-5}</a></p><p>To start the local development server:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>Format the code before committing:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">format</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">format</span></span></code></pre></div><h2 id="pull-requests-releases-conventional-commits" tabindex="-1">Pull Requests, Releases &amp; Conventional Commits <a class="header-anchor" href="#pull-requests-releases-conventional-commits" aria-label="Permalink to &quot;Pull Requests, Releases &amp; Conventional Commits&quot;">​</a></h2><p><code>asdf</code> is using an automated release pipeline which relies on Conventional Commits in PR titles. Detailed documentation found in the <a href="./core.html">core contribution guide</a>.</p><p>When creating a PR for documentation changes please make the PR title with the Conventional Commit type <code>docs</code> in the format <code>docs: &lt;description&gt;</code>.</p><h2 id="vitepress" tabindex="-1">Vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;Vitepress&quot;">​</a></h2><p>Configuration of the site is contained within a few TypeScript files with JS Objects used to represent the config. They are:</p><ul><li><code>docs/.vitepress/config.js</code>: the root config file for the site. Read the <a href="https://vitepress.dev/reference/site-config" target="_blank" rel="noreferrer">VitePress documentation</a> for it&#39;s spec.</li></ul><p>To simplify the root config, the larger JS Objects representing the <em>navbar</em> and <em>sidebar</em> configuration have been extracted and separated by their locale. See both in:</p><ul><li><code>docs/.vitepress/navbars.js</code></li><li><code>docs/.vitepress/sidebars.js</code></li></ul><p>With the official documentation for these configs living in the <a href="https://vitepress.dev/reference/default-theme-config" target="_blank" rel="noreferrer">Default Theme Reference</a>.</p><h2 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h2><p>VitePress has first-class support for internationalization. The root config <code>docs/.vitepress/config.js</code> defines the supported locales with their URL, title in the selection dropdown menu and navbar/sidebar configs references.</p><p>The navbar/sidebar configs are captured in the aforementioned config files, separated by locale and exported individually.</p><p>The markdown content for each locale must fall under a folder with the same name as the keys for <code>locales</code> in the root config. That is:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// docs/.vitepress/config.js</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;English&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lang: </span><span style="color:#9ECBFF;">&quot;en-US&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: navbars.en,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sidebar: sidebars.en,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;pt-br&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Brazilian Portuguese&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lang: </span><span style="color:#9ECBFF;">&quot;pr-br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: navbars.pt_br,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sidebar: sidebars.pt_br,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;zh-hans&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;简体中文&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lang: </span><span style="color:#9ECBFF;">&quot;zh-hans&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: navbars.zh_hans,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sidebar: sidebars.zh_hans,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// docs/.vitepress/config.js</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  locales: {</span></span>
<span class="line"><span style="color:#24292E;">    root: {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;English&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lang: </span><span style="color:#032F62;">&quot;en-US&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        nav: navbars.en,</span></span>
<span class="line"><span style="color:#24292E;">          sidebar: sidebars.en,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;pt-br&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Brazilian Portuguese&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lang: </span><span style="color:#032F62;">&quot;pr-br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        nav: navbars.pt_br,</span></span>
<span class="line"><span style="color:#24292E;">          sidebar: sidebars.pt_br,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;zh-hans&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;简体中文&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lang: </span><span style="color:#032F62;">&quot;zh-hans&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        nav: navbars.zh_hans,</span></span>
<span class="line"><span style="color:#24292E;">          sidebar: sidebars.zh_hans,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p><code>/pt-BR/</code> will require the same set of markdown files located under <code>docs/pt-BR/</code>, like so:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docs</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo.md</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nested</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pt-BR</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">foo.md</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nested</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docs</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo.md</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nested</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pt-BR</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">foo.md</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nested</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span></code></pre></div><p>The <a href="https://vitepress.dev/guide/i18n" target="_blank" rel="noreferrer">official VitePress i18n documentation</a> goes into more detail.</p>`,37),p=[o];function t(c,r,i,E,d,y){return a(),n("div",null,p)}const F=s(l,[["render",t]]);export{u as __pageData,F as default};
