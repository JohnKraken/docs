import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.51d6c45b.js";const m=JSON.parse('{"title":"Blobstream bootstrapper","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Blobstream bootstrapper | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"nodes/blobstream-bootstrapper.md","filePath":"nodes/blobstream-bootstrapper.md","lastUpdated":1702318874000}'),s={name:"nodes/blobstream-bootstrapper.md"},r=o('<h1 id="blobstream-bootstrapper" tabindex="-1">Blobstream bootstrapper <a class="header-anchor" href="#blobstream-bootstrapper" aria-label="Permalink to &quot;Blobstream bootstrapper&quot;">​</a></h1><p>To bootstrap the Blobstream P2P network, we use the bootstrapper Blobstream node type to accept connections from freshly created orchestrators/relayers and share its peer table with them.</p><h2 id="how-to-run" tabindex="-1">How to run <a class="header-anchor" href="#how-to-run" aria-label="Permalink to &quot;How to run&quot;">​</a></h2><h3 id="install-the-blobstream-binary" tabindex="-1">Install the Blobstream binary <a class="header-anchor" href="#install-the-blobstream-binary" aria-label="Permalink to &quot;Install the Blobstream binary&quot;">​</a></h3><p>Make sure to have the Blobstream binary installed. Check <a href="https://docs.celestia.org/nodes/blobstream-binary" target="_blank" rel="noreferrer">the Blobstream binary page</a> for more details.</p><h3 id="init-the-store" tabindex="-1">Init the store <a class="header-anchor" href="#init-the-store" aria-label="Permalink to &quot;Init the store&quot;">​</a></h3><p>Before starting the bootstrapper, we will need to init the store:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bootstrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bootstrapper</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>By default, the store will be created in <code>~/.bootstrapper</code>. However, if you want to specify a custom location, you can use the <code>--home</code> flag. Or, you can use the following environment variable:</p><table><thead><tr><th>Variable</th><th>Explanation</th><th>Default value</th><th>Required</th></tr></thead><tbody><tr><td><code>BOOTSTRAPPER_HOME</code></td><td>Home directory for the bootstrapper</td><td><code>~/.bootstrapper</code></td><td>Optional</td></tr></tbody></table><h3 id="add-keys" tabindex="-1">Add keys <a class="header-anchor" href="#add-keys" aria-label="Permalink to &quot;Add keys&quot;">​</a></h3><p>The P2P private key is optional, and a new one will be generated automatically on the start if none is provided.</p><p>The <code>p2p</code> sub-command will help you set up this key if you want to use a specific one:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bootstrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">p2p</span><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bootstrapper</span><span style="color:#24292E;"> </span><span style="color:#032F62;">p2p</span><span style="color:#24292E;">  </span><span style="color:#005CC5;">--help</span></span></code></pre></div><h3 id="open-the-p2p-port" tabindex="-1">Open the P2P port <a class="header-anchor" href="#open-the-p2p-port" aria-label="Permalink to &quot;Open the P2P port&quot;">​</a></h3><p>In order for the bootstrapper node to work, you will need to expose the P2P port, which is by default <code>30000</code>.</p><h3 id="start-the-bootstrapper" tabindex="-1">Start the bootstrapper <a class="header-anchor" href="#start-the-bootstrapper" aria-label="Permalink to &quot;Start the bootstrapper&quot;">​</a></h3><p>Now that we have the store initialized, we can start the bootstrapper:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">blobstream</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bootstrapper</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">blobstream</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bootstrapper</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><h4 id="systemd-service" tabindex="-1">Systemd service <a class="header-anchor" href="#systemd-service" aria-label="Permalink to &quot;Systemd service&quot;">​</a></h4><p>An example of a systemd service that can be used for bootstrappers can be found in the <a href="https://docs.celestia.org/nodes/blobstream-orchestrator" target="_blank" rel="noreferrer">orchestrator documentation</a>.</p>',21),p=[r];function l(n,c,i,d,h,b){return t(),a("div",null,p)}const u=e(s,[["render",l]]);export{m as __pageData,u as default};
