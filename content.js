// ============================================
// CryptoClass – Complete Course Content Data
// ============================================

const COURSE_DATA = [
  // =========================================
  // WEEK 1 – BEGINNER LEVEL (Foundations)
  // =========================================
  {
    week: 1,
    weekTitle: "Beginner Level – Foundations",
    weekColor: "#3fb950",
    classes: [
      // ---- CLASS 1 ----
      {
        id: 1,
        title: "Introduction to Crypto",
        icon: "🪙",
        description: "Understand what cryptocurrency is, its history, blockchain technology, and Bitcoin – the one that started it all.",
        topics: [
          {
            title: "What is Cryptocurrency?",
            content: `
<p>A <strong>cryptocurrency</strong> is a digital or virtual form of money that uses <strong>cryptography</strong> (advanced math) for security. Unlike traditional money (USD, EUR, PKR), crypto is not issued or controlled by any central bank or government — it runs on a <strong>decentralized network</strong> of computers.</p>
<p>Think of it like digital gold: scarce, secure, and transferable anywhere in the world within minutes — without needing a bank. The first and most famous cryptocurrency is <strong>Bitcoin (BTC)</strong>, created in 2009.</p>
<p>Cryptocurrencies operate on technology called <strong>blockchain</strong> — a transparent, tamper-proof digital ledger. Transactions are verified by a network of computers (nodes), not by any single authority.</p>

<div class="example-box">
  <div class="example-label">💡 Real-World Example</div>
  <p>Imagine you want to send $100 to a friend in another country. With a bank, this takes 3-5 days and costs $25+ in fees. With <strong>Bitcoin</strong>, you can send it in <strong>10 minutes</strong> with a fee of less than <strong>$1</strong> — no bank, no middleman.</p>
</div>

<div class="diagram-container">
  <div class="diagram-title">Traditional Money vs Cryptocurrency</div>
  <pre>
┌────────────────────────┐    ┌────────────────────────┐
│    TRADITIONAL MONEY   │    │    CRYPTOCURRENCY      │
├────────────────────────┤    ├────────────────────────┤
│  ✦ Controlled by banks │    │  ✦ Decentralized       │
│  ✦ Physical + Digital  │    │  ✦ Fully digital       │
│  ✦ Can be printed ∞    │    │  ✦ Limited supply      │
│  ✦ Slow transfers      │    │  ✦ Fast transfers      │
│  ✦ High fees abroad    │    │  ✦ Low fees globally   │
│  ✦ Needs ID/bank acct  │    │  ✦ Permissionless      │
│  ✦ Gov can freeze it   │    │  ✦ You control it      │
└────────────────────────┘    └────────────────────────┘
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Crypto is digital money secured by cryptography</li>
    <li>It's decentralized — no single authority controls it</li>
    <li>Transactions are fast, cheap, and borderless</li>
    <li>Bitcoin was the first cryptocurrency (2009)</li>
    <li>There are now 20,000+ different cryptocurrencies</li>
  </ul>
</div>
            `
          },
          {
            title: "History of Crypto",
            content: `
<p>The idea of digital money existed before Bitcoin. In the 1990s, projects like <strong>DigiCash</strong> and <strong>e-Gold</strong> tried to create digital currencies, but they all failed because they were centralized — a single company controlled them.</p>
<p>Everything changed on <strong>October 31, 2008</strong>, when a mysterious person (or group) using the name <strong>Satoshi Nakamoto</strong> published a whitepaper titled <em>"Bitcoin: A Peer-to-Peer Electronic Cash System."</em> On <strong>January 3, 2009</strong>, the first Bitcoin block (the Genesis Block) was mined.</p>
<p>The first real-world Bitcoin transaction happened on <strong>May 22, 2010</strong>, when programmer Laszlo Hanyecz paid <strong>10,000 BTC for two pizzas</strong> — worth about $40 at the time. Today, those 10,000 BTC would be worth over <strong>$600 million</strong>. This day is now celebrated as <strong>"Bitcoin Pizza Day."</strong></p>

<div class="diagram-container">
  <div class="diagram-title">Crypto Timeline</div>
  <pre>
  2008          2009          2010          2013         2015         2017         2021         2024
   │             │             │             │            │            │            │            │
   ▼             ▼             ▼             ▼            ▼            ▼            ▼            ▼
 BTC          Genesis       Pizza        BTC hits    Ethereum    BTC hits     BTC hits    BTC ETF
 Whitepaper   Block         Day          $1,000      launches    $20,000      $69,000     Approved
 Published    Mined         10K BTC                  (ETH)       (Bull Run)   (ATH)       (BlackRock)
              ↑             = 2 pizzas
           Jan 3, 2009
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Key Historical Events</div>
  <ul>
    <li><strong>2008:</strong> Satoshi Nakamoto publishes the Bitcoin whitepaper</li>
    <li><strong>2009:</strong> Bitcoin network goes live — first block mined</li>
    <li><strong>2010:</strong> First real purchase with BTC (two pizzas for 10,000 BTC)</li>
    <li><strong>2013:</strong> Bitcoin crosses $1,000 for the first time</li>
    <li><strong>2015:</strong> Ethereum launches — introduces Smart Contracts</li>
    <li><strong>2017:</strong> ICO boom — Bitcoin reaches $20,000</li>
    <li><strong>2020-2021:</strong> DeFi & NFT explosion — Bitcoin hits $69,000 ATH</li>
    <li><strong>2024:</strong> Bitcoin Spot ETFs approved — institutional adoption</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Satoshi Nakamoto's identity remains unknown to this day</li>
    <li>Bitcoin solved the "double spending" problem without a central authority</li>
    <li>The crypto market has grown from $0 to over $2 Trillion</li>
    <li>Each "halving" event (~every 4 years) has historically led to a bull market</li>
  </ul>
</div>
            `
          },
          {
            title: "What is Blockchain?",
            content: `
<p><strong>Blockchain</strong> is the underlying technology behind all cryptocurrencies. Think of it as a <strong>digital notebook</strong> that records every transaction ever made — and this notebook is shared across thousands of computers worldwide.</p>
<p>Each "page" in this notebook is called a <strong>block</strong>. Each block contains a list of transactions, a timestamp, and a unique code called a <strong>hash</strong>. Every new block also contains the hash of the previous block — this creates a <strong>chain</strong>. Hence, <em>blockchain</em>.</p>
<p>This design makes blockchain <strong>tamper-proof</strong>: if someone tries to change data in one block, its hash changes, breaking the chain. Every computer in the network would instantly detect the fraud.</p>

<div class="diagram-container">
  <div class="diagram-title">How Blockchain Works</div>
  <pre>
  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   Block #1   │────▶│   Block #2   │────▶│   Block #3   │────▶│   Block #4   │
  │  (Genesis)   │     │              │     │              │     │   (Latest)   │
  ├──────────────┤     ├──────────────┤     ├──────────────┤     ├──────────────┤
  │ Hash: 0a3f.. │     │ Hash: 7c2d.. │     │ Hash: 4e8a.. │     │ Hash: 9b1f.. │
  │ Prev: 0000.. │     │ Prev: 0a3f.. │     │ Prev: 7c2d.. │     │ Prev: 4e8a.. │
  │              │     │              │     │              │     │              │
  │ Tx: Alice →  │     │ Tx: Bob →    │     │ Tx: Carol →  │     │ Tx: Dave →   │
  │     Bob 1BTC │     │   Carol 0.5  │     │   Dave 2BTC  │     │   Eve 0.3BTC │
  │              │     │              │     │              │     │              │
  │ Time: 12:00  │     │ Time: 12:10  │     │ Time: 12:20  │     │ Time: 12:30  │
  └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
         ▲                                                              │
         │              Each block references the previous              │
         └──────────────── Creating an unbreakable chain ◄──────────────┘
  </pre>
</div>

<h4>3 Core Properties of Blockchain</h4>
<ul>
  <li><strong>Decentralized:</strong> No single computer controls it — thousands of nodes worldwide maintain copies</li>
  <li><strong>Immutable:</strong> Once data is written, it cannot be changed or deleted</li>
  <li><strong>Transparent:</strong> Anyone can view all transactions on the blockchain (e.g., via blockchain explorers)</li>
</ul>

<div class="example-box">
  <div class="example-label">💡 Real-World Analogy</div>
  <p>Imagine a Google Doc shared with 10,000 people. Everyone can see every edit in real-time. No one person can secretly change past entries because everyone has a copy. That's essentially how blockchain works — but with military-grade encryption.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Blockchain = chain of blocks, each containing transaction data</li>
    <li>Each block has a unique hash and references the previous block's hash</li>
    <li>This makes it virtually impossible to tamper with past records</li>
    <li>Used beyond crypto: supply chain, healthcare, voting, etc.</li>
  </ul>
</div>
            `
          },
          {
            title: "What is Bitcoin?",
            content: `
<p><strong>Bitcoin (BTC)</strong> is the first and most valuable cryptocurrency, created by <strong>Satoshi Nakamoto</strong> in 2009. It's often called <strong>"digital gold"</strong> because, like gold, it has a limited supply — only <strong>21 million BTC</strong> will ever exist.</p>
<p>Bitcoin operates on a <strong>Proof of Work (PoW)</strong> consensus mechanism, where powerful computers (miners) solve complex math puzzles to validate transactions and secure the network. In return, they earn newly created BTC as a reward.</p>
<p>Bitcoin is the <strong>largest cryptocurrency by market cap</strong> and is considered the "leader" of the crypto market — when Bitcoin goes up, most other coins tend to follow. It's the most widely accepted and recognized crypto worldwide.</p>

<div class="diagram-container">
  <div class="diagram-title">Bitcoin Key Properties</div>
  <pre>
                          ┌─────────────────┐
                          │     BITCOIN     │
                          │      (BTC)      │
                          └────────┬────────┘
                                   │
          ┌────────────────────────┼────────────────────────┐
          │                        │                        │
  ┌───────┴───────┐       ┌───────┴───────┐       ┌───────┴───────┐
  │   SCARCITY    │       │   SECURITY    │       │ DECENTRALIZED │
  │               │       │               │       │               │
  │ Max: 21M BTC  │       │ Proof of Work │       │ No central    │
  │ Halving every │       │ SHA-256 hash  │       │ authority     │
  │ ~4 years      │       │ 10 min blocks │       │ 15,000+ nodes │
  └───────────────┘       └───────────────┘       └───────────────┘
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Bitcoin Supply Schedule</div>
  <ul>
    <li><strong>2009:</strong> Block reward = 50 BTC per block</li>
    <li><strong>2012:</strong> First halving → 25 BTC per block</li>
    <li><strong>2016:</strong> Second halving → 12.5 BTC per block</li>
    <li><strong>2020:</strong> Third halving → 6.25 BTC per block</li>
    <li><strong>2024:</strong> Fourth halving → 3.125 BTC per block</li>
    <li><strong>~2140:</strong> Last BTC mined — supply reaches exactly 21 million</li>
  </ul>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Pro Tip</div>
  <p>You don't need to buy a whole Bitcoin! 1 BTC = 100,000,000 <strong>satoshis</strong> (sats). You can buy as little as $1 worth of Bitcoin. Most people start with small amounts.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Bitcoin is the first and largest cryptocurrency (created 2009)</li>
    <li>Only 21 million BTC will ever exist — making it deflationary</li>
    <li>It uses Proof of Work (mining) for security</li>
    <li>1 BTC = 100,000,000 satoshis — you can buy fractions</li>
    <li>Bitcoin dominates ~50% of the total crypto market cap</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 2 ----
      {
        id: 2,
        title: "Crypto Basics",
        icon: "📦",
        description: "Learn about wallets, exchanges, trading types, and essential market terminology.",
        topics: [
          {
            title: "What is a Wallet?",
            content: `
<p>A <strong>crypto wallet</strong> is a tool that lets you store, send, and receive cryptocurrency. It doesn't actually "hold" your coins — your crypto lives on the blockchain. A wallet holds your <strong>private keys</strong>, which prove you own your crypto and let you authorize transactions.</p>
<p>Think of it like an email account: your <strong>public key</strong> (wallet address) is like your email address — you share it to receive crypto. Your <strong>private key</strong> is like your password — <strong>never share it</strong>. Whoever has your private key owns your crypto.</p>

<h4>Types of Wallets</h4>
<table class="comparison-table">
  <tr>
    <th>Type</th>
    <th>Examples</th>
    <th>Security</th>
    <th>Best For</th>
  </tr>
  <tr>
    <td><strong>Hot Wallet</strong> (Online)</td>
    <td>MetaMask, Trust Wallet, Exchange wallets</td>
    <td>Medium ⚠️</td>
    <td>Daily trading & small amounts</td>
  </tr>
  <tr>
    <td><strong>Cold Wallet</strong> (Offline)</td>
    <td>Ledger, Trezor (hardware devices)</td>
    <td>Very High 🔒</td>
    <td>Long-term storage of large amounts</td>
  </tr>
  <tr>
    <td><strong>Paper Wallet</strong></td>
    <td>Printed keys on paper</td>
    <td>High (if stored safely)</td>
    <td>Backup / cold storage</td>
  </tr>
</table>

<div class="diagram-container">
  <div class="diagram-title">Wallet Architecture</div>
  <pre>
  ┌─────────────────────────────────────────────────┐
  │                 YOUR WALLET                      │
  │                                                  │
  │   ┌─────────────────┐   ┌────────────────────┐  │
  │   │   PUBLIC KEY     │   │   PRIVATE KEY      │  │
  │   │   (Address)      │   │   (Secret)         │  │
  │   │                  │   │                    │  │
  │   │  Like your email │   │  Like your         │  │
  │   │  address — share │   │  password — NEVER  │  │
  │   │  freely          │   │  share with anyone │  │
  │   └─────────────────┘   └────────────────────┘  │
  │                                                  │
  │   ┌──────────────────────────────────────────┐   │
  │   │          SEED PHRASE (12-24 words)       │   │
  │   │                                          │   │
  │   │  "apple orange banana grape lemon kiwi   │   │
  │   │   mango peach cherry plum melon berry"   │   │
  │   │                                          │   │
  │   │  ⚠️ This recovers your ENTIRE wallet    │   │
  │   │  Write it down. Store offline. NEVER     │   │
  │   │  type it on any website.                 │   │
  │   └──────────────────────────────────────────┘   │
  └─────────────────────────────────────────────────┘
  </pre>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ Critical Warning</div>
  <p><strong>Never share your private key or seed phrase with anyone.</strong> No legitimate support team will ever ask for them. If someone gets your seed phrase, they can steal ALL your crypto instantly.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>A wallet stores your private keys, not your actual crypto</li>
    <li>Public key = address to receive crypto</li>
    <li>Private key = authorization to send crypto — keep it SECRET</li>
    <li>Hot wallets for convenience, cold wallets for security</li>
    <li>Always backup your seed phrase offline</li>
  </ul>
</div>
            `
          },
          {
            title: "What is an Exchange?",
            content: `
<p>A <strong>cryptocurrency exchange</strong> is a platform where you can buy, sell, and trade cryptocurrencies. Think of it like a stock exchange, but for crypto. Exchanges connect buyers with sellers and earn revenue through trading fees.</p>
<p>Most beginners start by creating an account on a centralized exchange (CEX), depositing fiat money (like USD or PKR), and buying their first crypto.</p>

<h4>Types of Exchanges</h4>
<table class="comparison-table">
  <tr>
    <th>Feature</th>
    <th>Centralized (CEX)</th>
    <th>Decentralized (DEX)</th>
  </tr>
  <tr>
    <td><strong>Examples</strong></td>
    <td>Binance, Coinbase, Bybit</td>
    <td>Uniswap, PancakeSwap, dYdX</td>
  </tr>
  <tr>
    <td><strong>Control</strong></td>
    <td>Company holds your funds</td>
    <td>You control your own wallet</td>
  </tr>
  <tr>
    <td><strong>KYC Required?</strong></td>
    <td>Yes (ID verification)</td>
    <td>No — connect wallet directly</td>
  </tr>
  <tr>
    <td><strong>Speed</strong></td>
    <td>Very fast</td>
    <td>Depends on blockchain</td>
  </tr>
  <tr>
    <td><strong>Fees</strong></td>
    <td>Low (0.1% typical)</td>
    <td>Variable (gas fees)</td>
  </tr>
  <tr>
    <td><strong>Beginner Friendly?</strong></td>
    <td>✅ Very</td>
    <td>⚠️ Moderate</td>
  </tr>
</table>

<div class="example-box">
  <div class="example-label">💡 Example</div>
  <p>You sign up on <strong>Binance</strong>, verify your ID (KYC), deposit $100 via bank transfer, and use it to buy 0.001 BTC. Binance acts as the middleman — holding your funds and executing your trade. On a DEX like <strong>Uniswap</strong>, you'd connect your MetaMask wallet directly and trade with no middleman.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Exchanges are where you buy, sell, and trade crypto</li>
    <li>CEX (Binance, Coinbase) = easy to use, but they hold your keys</li>
    <li>DEX (Uniswap) = you keep control, but more complex</li>
    <li>"Not your keys, not your crypto" — a famous saying in crypto</li>
  </ul>
</div>
            `
          },
          {
            title: "Spot vs Futures",
            content: `
<p><strong>Spot trading</strong> means buying or selling crypto <strong>at the current market price</strong> for immediate delivery. When you buy 1 ETH on spot, you actually own 1 ETH — it's in your wallet.</p>
<p><strong>Futures trading</strong> means you're trading <strong>contracts</strong> based on the future price of crypto. You don't own the actual coin — you're essentially betting on whether the price will go up or down. Futures allow you to use <strong>leverage</strong> (borrowed money) to multiply your gains — or your losses.</p>

<div class="diagram-container">
  <div class="diagram-title">Spot vs Futures Comparison</div>
  <pre>
  ┌───────────────────────┐           ┌───────────────────────┐
  │     SPOT TRADING      │           │   FUTURES TRADING     │
  ├───────────────────────┤           ├───────────────────────┤
  │                       │           │                       │
  │  Buy BTC at $60,000   │           │  Open LONG at $60,000 │
  │  ↓                    │           │  with 10x leverage    │
  │  You OWN 1 BTC        │           │  ↓                    │
  │  ↓                    │           │  You DON'T own BTC    │
  │  Price → $65,000      │           │  ↓                    │
  │  ↓                    │           │  Price → $65,000      │
  │  Profit: $5,000       │           │  ↓                    │
  │  (8.3% gain)          │           │  Profit: $50,000      │
  │                       │           │  (83% gain!) 🚀       │
  │  ✅ Can't get         │           │                       │
  │     liquidated        │           │  ⚠️ CAN get           │
  │                       │           │     liquidated = $0   │
  └───────────────────────┘           └───────────────────────┘
  </pre>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ Important Warning</div>
  <p><strong>Futures trading is EXTREMELY risky for beginners.</strong> With 10x leverage, a 10% price drop can wipe out your entire position (liquidation). Over 90% of futures traders lose money. Start with spot trading until you're experienced.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Spot = buy actual crypto at current price (safest for beginners)</li>
    <li>Futures = trade contracts with leverage (high risk / high reward)</li>
    <li>Spot: no liquidation risk. Futures: you can lose everything</li>
    <li>Master spot trading before ever touching futures</li>
  </ul>
</div>
            `
          },
          {
            title: "Market Cap, Supply, Volume",
            content: `
<p>To evaluate any cryptocurrency, you need to understand three critical metrics:</p>

<h4>1. Market Cap (Market Capitalization)</h4>
<p><strong>Market Cap = Current Price × Circulating Supply</strong></p>
<p>Market cap tells you the total value of a cryptocurrency. It's the primary way to rank cryptocurrencies by size.</p>

<div class="example-box">
  <div class="example-label">💡 Example</div>
  <p>If Bitcoin is priced at $60,000 and there are 19.5 million BTC in circulation:<br>
  <strong>Market Cap = $60,000 × 19,500,000 = $1.17 Trillion</strong></p>
</div>

<h4>2. Supply Types</h4>
<table class="comparison-table">
  <tr><th>Supply Type</th><th>Definition</th><th>Example</th></tr>
  <tr><td><strong>Circulating Supply</strong></td><td>Coins currently available in the market</td><td>BTC: ~19.5M</td></tr>
  <tr><td><strong>Total Supply</strong></td><td>All coins that have been created (including locked/burned)</td><td>BTC: ~19.5M</td></tr>
  <tr><td><strong>Max Supply</strong></td><td>Maximum coins that will EVER exist</td><td>BTC: 21M</td></tr>
</table>

<h4>3. Volume</h4>
<p><strong>Trading volume</strong> is the total amount of a cryptocurrency that has been traded in the last 24 hours. High volume = lots of buying/selling activity = <strong>high liquidity</strong> (easy to trade). Low volume = less activity = can be harder to buy/sell at your desired price.</p>

<div class="diagram-container">
  <div class="diagram-title">Market Cap Categories</div>
  <pre>
  ┌───────────────────────────────────────────────────┐
  │              CRYPTO MARKET CAPS                    │
  ├───────────────────────────────────────────────────┤
  │                                                    │
  │  🔵 Large Cap (> $10B)                             │
  │     Bitcoin, Ethereum, BNB, Solana                 │
  │     → Lower risk, stable, institutional adoption   │
  │                                                    │
  │  🟡 Mid Cap ($1B - $10B)                           │
  │     Polygon, Avalanche, Chainlink                  │
  │     → Moderate risk, growth potential               │
  │                                                    │
  │  🔴 Small Cap (< $1B)                              │
  │     Newer or niche projects                        │
  │     → High risk, high potential reward              │
  │                                                    │
  │  ⚫ Micro Cap (< $100M)                            │
  │     Very early or small projects                   │
  │     → Extremely high risk (many are scams)         │
  └───────────────────────────────────────────────────┘
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Market Cap = Price × Supply — tells you total value / project size</li>
    <li>Look at market cap, not just price! A $0.01 coin with huge supply can have a larger market cap than a $100 coin</li>
    <li>High volume = healthy liquidity = easier to trade</li>
    <li>Always check max supply — unlimited supply coins are inflationary</li>
  </ul>
</div>
            `
          },
          {
            title: "Centralized vs Decentralized",
            content: `
<p>This is one of the most important concepts in crypto. The entire philosophy of cryptocurrency is about shifting from <strong>centralized</strong> (controlled by one entity) to <strong>decentralized</strong> (controlled by the community/network).</p>

<h4>Centralized Systems</h4>
<p>A centralized system has one controlling authority that makes decisions, stores data, and manages everything. Your bank, Instagram, and traditional stock exchange are all centralized.</p>

<h4>Decentralized Systems</h4>
<p>A decentralized system distributes control across many participants. No single entity can change the rules, censor transactions, or shut it down. Bitcoin and Ethereum are decentralized.</p>

<div class="diagram-container">
  <div class="diagram-title">Centralized vs Decentralized Network</div>
  <pre>
      CENTRALIZED                      DECENTRALIZED

          ●                          ●───●───●
         /|\\                         |\\   /|  \\
        / | \\                        | \\ / |   \\
       ●  ●  ●                      ●──●──●──●
       |  |  |                      |  / \\ |  /
       ●  ●  ●                      ● /   \\● /
                                    ●───●───●

    Single point                  No single point
    of failure                    of failure
    One authority                 Distributed control
    Can be censored               Censorship resistant
  </pre>
</div>

<table class="comparison-table">
  <tr><th>Feature</th><th>Centralized (CeFi)</th><th>Decentralized (DeFi)</th></tr>
  <tr><td><strong>Control</strong></td><td>Single company/authority</td><td>Community / smart contracts</td></tr>
  <tr><td><strong>Examples</strong></td><td>Banks, Binance, Coinbase</td><td>Uniswap, Aave, Bitcoin</td></tr>
  <tr><td><strong>Trust</strong></td><td>Trust the company</td><td>Trust the code/protocol</td></tr>
  <tr><td><strong>Privacy</strong></td><td>KYC required (ID verification)</td><td>Pseudonymous</td></tr>
  <tr><td><strong>Risk</strong></td><td>Company can fail (e.g., FTX collapse)</td><td>Smart contract bugs/hacks</td></tr>
  <tr><td><strong>Speed</strong></td><td>Very fast</td><td>Varies by blockchain</td></tr>
</table>

<div class="example-box">
  <div class="example-label">💡 Real-World Example</div>
  <p>In <strong>2022, FTX</strong> (a centralized exchange) collapsed overnight, and users lost $8+ billion. The CEO had secretly misused customer funds. This couldn't happen with a decentralized protocol like <strong>Uniswap</strong>, because your funds stay in YOUR wallet — not in someone else's hands.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Centralized = one authority controls everything (faster, easier, but risky)</li>
    <li>Decentralized = distributed control (trustless, censorship-resistant, but more complex)</li>
    <li>Use centralized exchanges for convenience, but don't store large amounts there</li>
    <li>"Not your keys, not your crypto" — move large holdings to your own wallet</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 3 ----
      {
        id: 3,
        title: "Getting Started",
        icon: "🚀",
        description: "Learn the practical steps: depositing funds, withdrawing, and making your first buy/sell trades.",
        topics: [
          {
            title: "How to Deposit & Withdraw",
            content: `
<p><strong>Depositing</strong> means adding funds (fiat or crypto) to your exchange account. <strong>Withdrawing</strong> means sending funds from your exchange to your bank or personal wallet.</p>

<h4>Methods to Deposit</h4>
<ul>
  <li><strong>Bank Transfer:</strong> Link your bank account and transfer fiat (USD, PKR, EUR)</li>
  <li><strong>P2P Trading:</strong> Buy crypto directly from other users (popular in Pakistan, India)</li>
  <li><strong>Card Payment:</strong> Use credit/debit card (higher fees, ~2-5%)</li>
  <li><strong>Crypto Transfer:</strong> Send crypto from another wallet/exchange</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Deposit & Withdrawal Flow</div>
  <pre>
  DEPOSIT (Adding Funds):

  Your Bank Account          Exchange Account          Trading Wallet
  ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
  │   $500 USD   │──────▶  │   $500 USDT   │──────▶  │  Ready to    │
  │              │  P2P /   │   (stablecoin)│  Move   │  Trade!      │
  │   or PKR     │  Bank    │              │  to Spot │              │
  └──────────────┘          └──────────────┘          └──────────────┘

  WITHDRAWAL (Taking Funds Out):

  Trading Wallet             Exchange Account          Your Bank / Wallet
  ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
  │  Sell crypto  │──────▶  │   $500 USDT   │──────▶  │   $500 in    │
  │  for USDT    │          │              │  P2P /   │   your bank  │
  │              │          │              │  Bank    │   account    │
  └──────────────┘          └──────────────┘          └──────────────┘
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Step-by-Step: P2P Deposit on Binance</div>
  <ol>
    <li>Open Binance App → Click <strong>P2P Trading</strong></li>
    <li>Select <strong>"Buy"</strong> → Choose <strong>USDT</strong></li>
    <li>Select your currency (PKR/USD) and payment method (bank, JazzCash, etc.)</li>
    <li>Choose a seller with good reviews and a green checkmark</li>
    <li>Enter the amount you want to buy (e.g., $100 USDT)</li>
    <li>Send payment to the seller via the chosen method</li>
    <li>Click <strong>"I've Paid"</strong> — seller releases USDT to your account</li>
    <li>Done! USDT is now in your <strong>Funding Wallet</strong></li>
  </ol>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ Network Selection Warning</div>
  <p>When depositing/withdrawing crypto, you MUST select the <strong>correct network</strong>. Sending BTC on the Ethereum network (or vice versa) will result in <strong>permanent loss of funds</strong>. Common networks: ERC-20 (Ethereum), BEP-20 (BSC), TRC-20 (Tron). Always double-check the network before confirming.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>P2P is the most popular deposit method in many countries</li>
    <li>Always use USDT (stablecoin) as your base for trading</li>
    <li>Double-check the wallet address and network before any transfer</li>
    <li>Start with small amounts until you're comfortable with the process</li>
  </ul>
</div>
            `
          },
          {
            title: "How to Buy & Sell on Spot and Futures",
            content: `
<h4>Spot Trading (Buying Actual Crypto)</h4>
<p>When you buy on <strong>spot</strong>, you own the actual cryptocurrency. The simplest way is a <strong>Market Order</strong> — buy at whatever the current price is. A <strong>Limit Order</strong> lets you set a specific price you're willing to pay.</p>

<div class="diagram-container">
  <div class="diagram-title">Order Types</div>
  <pre>
  ┌──────────────────────────────────────────────────────┐
  │                    ORDER TYPES                        │
  ├──────────────────────┬───────────────────────────────┤
  │                      │                               │
  │   MARKET ORDER       │   LIMIT ORDER                 │
  │                      │                               │
  │   "Buy NOW at        │   "Buy only IF price          │
  │    current price"    │    drops to $58,000"          │
  │                      │                               │
  │   ✅ Instant fill    │   ⏳ Waits for price          │
  │   ⚠️ Might get       │   ✅ You choose exact price   │
  │     slightly worse   │   ⚠️ May never fill          │
  │     price (slippage) │                               │
  └──────────────────────┴───────────────────────────────┘
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Spot Trading Example</div>
  <ol>
    <li>You have <strong>$100 USDT</strong> in your Spot Wallet</li>
    <li>Go to <strong>Spot Trading</strong> → search for <strong>BTC/USDT</strong> pair</li>
    <li>Current BTC price: <strong>$60,000</strong></li>
    <li>Place a <strong>Market Buy</strong> order for $100</li>
    <li>You receive: <strong>0.00166 BTC</strong> ($100 ÷ $60,000)</li>
    <li>If BTC rises to $65,000, your 0.00166 BTC is now worth <strong>$108.33</strong></li>
    <li>Sell → Profit: <strong>$8.33</strong> (8.3% gain)</li>
  </ol>
</div>

<h4>Futures Trading (Contracts + Leverage)</h4>
<p>In futures, you're not buying actual crypto — you're trading <strong>contracts</strong> on price movement. You can go <strong>Long</strong> (betting price goes UP) or <strong>Short</strong> (betting price goes DOWN). Futures use <strong>leverage</strong> to amplify your position.</p>

<div class="example-box">
  <div class="example-label">💡 Futures Trading Example (10x Leverage)</div>
  <ol>
    <li>You have <strong>$100 USDT</strong> as margin (collateral)</li>
    <li>Open a <strong>LONG</strong> on BTC/USDT at <strong>$60,000</strong> with <strong>10x leverage</strong></li>
    <li>Your position size: <strong>$1,000</strong> (10 × $100)</li>
    <li>BTC rises 5% to <strong>$63,000</strong></li>
    <li>Profit = 5% × 10x = <strong>50% = $50 profit</strong> 🚀</li>
    <li>BUT if BTC drops 10% → <strong>Liquidation = $0</strong> 💀</li>
  </ol>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ Futures Risk</div>
  <p>With 10x leverage, just a <strong>10% move against you = 100% loss (liquidation)</strong>. With 50x leverage, only a <strong>2% move = liquidation</strong>. Most beginners lose everything in futures. Always use <strong>stop losses</strong> and start with low leverage (2-5x max).</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Spot: Market Order (instant) vs Limit Order (set your price)</li>
    <li>Futures: Long (price up) vs Short (price down) with leverage</li>
    <li>Beginners should ONLY use Spot trading</li>
    <li>Always set stop losses in futures to limit potential losses</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 4 ----
      {
        id: 4,
        title: "Introduction to Charts",
        icon: "📊",
        description: "Learn to read price charts: candlesticks, timeframes, support & resistance, and trends.",
        topics: [
          {
            title: "What is a Candlestick?",
            content: `
<p>A <strong>candlestick</strong> is a visual representation of price movement over a specific time period. Each candle tells you 4 things: the <strong>Open</strong> price, <strong>Close</strong> price, <strong>High</strong> price, and <strong>Low</strong> price.</p>
<p>There are two types: a <strong>green/bullish</strong> candle (price went UP — close is higher than open) and a <strong>red/bearish</strong> candle (price went DOWN — close is lower than open).</p>

<div class="diagram-container">
  <div class="diagram-title">Anatomy of a Candlestick</div>
  <div class="chart-image-wrapper">
    <img src="images/candlestick_anatomy.png" alt="Candlestick Anatomy - Bullish and Bearish candles with Open, Close, High, Low, Wick and Body labeled">
    <div class="image-caption">📊 Click to zoom — Bullish (green) vs Bearish (red) candlestick anatomy</div>
  </div>
  <pre>
    BULLISH (Green) 🟢               BEARISH (Red) 🔴

         │                                │
         │ ← Upper Wick (High)            │ ← Upper Wick (High)
         │                                │
    ┌────┴────┐                      ┌────┴────┐
    │         │                      │░░░░░░░░░│
    │  CLOSE  │ ← Body              │  OPEN   │ ← Body
    │    ↑    │    (Hollow/Green)    │    ↓    │    (Filled/Red)
    │  OPEN   │                      │  CLOSE  │
    │         │                      │░░░░░░░░░│
    └────┬────┘                      └────┬────┘
         │                                │
         │ ← Lower Wick (Low)             │ ← Lower Wick (Low)
         │                                │

    Price went UP ↑                  Price went DOWN ↓
    Close > Open                     Close < Open
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Reading a Candle – Example</div>
  <p>A 1-hour green candle for BTC:</p>
  <ul>
    <li><strong>Open:</strong> $60,000 (price at start of the hour)</li>
    <li><strong>High:</strong> $60,800 (highest point during the hour)</li>
    <li><strong>Low:</strong> $59,700 (lowest point during the hour)</li>
    <li><strong>Close:</strong> $60,500 (price at end of the hour)</li>
  </ul>
  <p>Since Close ($60,500) > Open ($60,000), this is a <strong>green/bullish</strong> candle. The upper wick shows sellers pushed price back from $60,800. The lower wick shows buyers defended $59,700.</p>
</div>

<h4>Common Candlestick Patterns</h4>
<div class="diagram-container">
  <div class="diagram-title">Key Candlestick Patterns</div>
  <div class="chart-image-wrapper">
    <img src="images/candlestick_patterns.png" alt="Common Candlestick Patterns - Doji, Hammer, Engulfing, Shooting Star, Morning Star">
    <div class="image-caption">📊 Click to zoom — Doji, Hammer, Engulfing, Shooting Star, Morning Star patterns</div>
  </div>
  <pre>
   Doji          Hammer        Engulfing      Shooting Star   Morning Star

    │               │             ┌──┐            │
    │            ┌──┐             │░░│         ┌──┴──┐
  ──┼──          │  │          ┌──┤  │         │░░░░░│
    │            │  │          │  │░░│         └──┬──┘
    │            └──┘          │  └──┘            │
                 │             │  │               │
                 │             └──┘
                 │

  Indecision   Reversal UP    Strong         Reversal DOWN  Reversal UP
  (neutral)    after downtrend Reversal       after uptrend  (3 candle)
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Each candle shows Open, High, Low, Close (OHLC) for a time period</li>
    <li>Green = bullish (price rose), Red = bearish (price fell)</li>
    <li>Long wicks show rejection — someone pushed price but it reversed</li>
    <li>Candlestick patterns help predict short-term price direction</li>
  </ul>
</div>
            `
          },
          {
            title: "Timeframes (1m, 5m, 1H, 4H, Daily)",
            content: `
<p>A <strong>timeframe</strong> determines how much time each candlestick represents. A 1-minute (1m) chart creates a new candle every minute. A daily chart creates one candle per day. The same asset can look completely different depending on the timeframe you're viewing.</p>

<h4>Common Timeframes</h4>
<table class="comparison-table">
  <tr><th>Timeframe</th><th>Each Candle =</th><th>Best For</th><th>Trading Style</th></tr>
  <tr><td><strong>1m, 5m</strong></td><td>1-5 minutes</td><td>Scalping</td><td>Very short-term (minutes)</td></tr>
  <tr><td><strong>15m, 30m</strong></td><td>15-30 minutes</td><td>Day Trading</td><td>Short-term (hours)</td></tr>
  <tr><td><strong>1H, 4H</strong></td><td>1-4 hours</td><td>Swing Trading</td><td>Days to weeks</td></tr>
  <tr><td><strong>Daily, Weekly</strong></td><td>1 day / 1 week</td><td>Position Trading</td><td>Weeks to months</td></tr>
  <tr><td><strong>Monthly</strong></td><td>1 month</td><td>Investing</td><td>Months to years</td></tr>
</table>

<div class="diagram-container">
  <div class="diagram-title">Same Price Action on Different Timeframes</div>
  <pre>
  5-MINUTE CHART (Noisy, choppy)     vs     DAILY CHART (Clear trend)
  ┌───────────────────────────┐             ┌───────────────────────────┐
  │     ╱╲                    │             │                     ╱    │
  │    ╱  ╲   ╱╲              │             │                   ╱     │
  │   ╱    ╲ ╱  ╲  ╱╲  ╱╲    │             │                ╱╱       │
  │  ╱      ╲    ╲╱  ╲╱  ╲   │             │             ╱╱          │
  │ ╱              ╱╲     ╲  │             │          ╱╱             │
  │╱      lots of  ╱ noise ╲ │             │       ╱╱    Clean       │
  │         noise            ╲│             │    ╱╱       uptrend     │
  └───────────────────────────┘             └───────────────────────────┘
  
  Multiple signals, many                    One clear direction,
  false breakouts, stressful                easier to trade
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Pro Tip</div>
  <p>Always analyze from <strong>higher to lower timeframes</strong> (Top-Down Analysis). Start with the Daily chart to see the big picture, then zoom into 4H and 1H for entry timing. Trading only on low timeframes (1m, 5m) without checking higher timeframes is a common beginner mistake.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Low timeframes = more noise but faster trades</li>
    <li>High timeframes = clearer trends but slower trades</li>
    <li>Use Top-Down Analysis: Daily → 4H → 1H for best results</li>
    <li>Beginners should start with 4H and Daily charts</li>
  </ul>
</div>
            `
          },
          {
            title: "Support & Resistance Basics",
            content: `
<p><strong>Support</strong> is a price level where buying pressure is strong enough to prevent the price from falling further. Think of it as a "floor." <strong>Resistance</strong> is a price level where selling pressure is strong enough to prevent the price from rising further. Think of it as a "ceiling."</p>
<p>These levels form because traders remember past prices where the market reversed, and they place orders at those levels again.</p>

<div class="diagram-container">
  <div class="diagram-title">Support & Resistance Levels</div>
  <div class="chart-image-wrapper">
    <img src="images/support_resistance.png" alt="Support and Resistance levels on a candlestick chart showing price bouncing between horizontal levels">
    <div class="image-caption">📊 Click to zoom — Price bouncing between Support (floor) and Resistance (ceiling)</div>
  </div>
  <pre>
  Price ($)
    │
  70│─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ RESISTANCE ─ ─ ─ ─ ─ ─ ─ ─
    │              ╱╲        ╱╲
  65│            ╱    ╲    ╱    ╲        ╱╲
    │          ╱       ╲ ╱      ╲     ╱    ╲
  60│        ╱          ╳        ╲  ╱       ╲
    │      ╱           ╱ ╲        ╲╱          ╲
  55│    ╱           ╱     ╲                    ╲
    │  ╱           ╱         ╲
  50│─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ SUPPORT ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
    │
    └──────────────────────────────────────────────────────── Time

    Price bounces between Support ($50) and Resistance ($70)
    The more times a level is tested, the stronger it becomes
  </pre>
</div>

<h4>Key Rules of Support & Resistance</h4>
<ul>
  <li><strong>When support breaks, it becomes resistance</strong> (and vice versa)</li>
  <li>The more times a level is tested, the <strong>stronger</strong> it is</li>
  <li>Round numbers (like $50,000 or $100,000) often act as psychological S/R levels</li>
  <li>Major S/R levels on higher timeframes are more significant</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Support Becomes Resistance (Role Reversal)</div>
  <pre>
  Price ($)
    │
  60│                                          ╱
    │                                        ╱
  55│         ╱╲          ╱╲ Retest         ╱
    │       ╱    ╲      ╱    ╲   (Now     ╱
  50│─ ─ ─╱─ ─ ─ ╲─ ╱─ ─ ─ ─ ╲─resistance)─ ─ ─ ─ ─ ─
    │   ╱          ╳            ╲       ╱ ↑
  45│              ╱╲             ╲    ╱  Rejected!
    │                ╲             ╲╱
  40│                  BREAK DOWN! 
    │
    └────────────────────────────────────────── Time

    $50 was support → Price broke below → Now $50 is resistance
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Trading Example</div>
  <p>Bitcoin has bounced off <strong>$58,000</strong> three times in the past month — this is <strong>strong support</strong>. You place a buy order at $58,200 with a stop loss at $57,000. Each time it touches this level, there's a high probability it bounces back up. But if it breaks below $58,000 with high volume, that support is broken, and you exit your trade.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Support = price floor (buyers defend it), Resistance = price ceiling (sellers defend it)</li>
    <li>When S/R breaks, roles reverse — support becomes resistance and vice versa</li>
    <li>More touches = stronger level</li>
    <li>Trade bounces off S/R, exit when level breaks</li>
  </ul>
</div>
            `
          },
          {
            title: "Trends (Uptrend / Downtrend / Sideways)",
            content: `
<p>A <strong>trend</strong> is the overall direction that price is moving. understanding the trend is essential because you want to trade <strong>with</strong> the trend, not against it.</p>

<div class="diagram-container">
  <div class="diagram-title">Three Types of Market Trends</div>
  <div class="chart-image-wrapper">
    <img src="images/market_trends.png" alt="Three market trends - Uptrend, Downtrend, and Sideways shown on candlestick charts">
    <div class="image-caption">📊 Click to zoom — Uptrend (HH/HL), Downtrend (LH/LL), and Sideways (Range)</div>
  </div>
  <pre>
  UPTREND (Bullish 🟢)           DOWNTREND (Bearish 🔴)         SIDEWAYS (Range 🟡)

          ╱╲                 ╲                         ╱╲     ╱╲     ╱╲
        ╱    ╲╱╲           ╲  ╲╱╲                   ╱    ╲ ╱    ╲ ╱    ╲
      ╱          ╲╱╲         ╲    ╲╱╲             ╲╱      ╲      ╲      ╲╱
    ╱                ╲         ╲      ╲╱╲
  ╱                    ╲         ╲        ╲

  Higher Highs &         Lower Highs &       Price moves in a
  Higher Lows            Lower Lows          range (no clear trend)
  
  Strategy: BUY dips    Strategy: SELL       Strategy: Buy at support,
                        rallies              sell at resistance
  </pre>
</div>

<h4>How to Identify Trends</h4>
<ul>
  <li><strong>Uptrend:</strong> Price makes <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>. Each swing up goes higher than the last, and each dip is higher than the previous dip.</li>
  <li><strong>Downtrend:</strong> Price makes <strong>Lower Highs (LH)</strong> and <strong>Lower Lows (LL)</strong>. Each rally fails lower, and each dip goes deeper.</li>
  <li><strong>Sideways/Ranging:</strong> Price bounces between support and resistance with no clear direction.</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Uptrend Structure in Detail</div>
  <pre>
  Price
    │
    │                                    HH3
    │                                   ╱╲
    │                    HH2          ╱    ╲
    │                   ╱╲          ╱
    │      HH1        ╱    ╲     ╱
    │     ╱╲        ╱       ╲  ╱
    │   ╱    ╲    ╱          HL3
    │  ╱       ╲╱
    │ ╱         HL2
    │╱
    │HL1
    └─────────────────────────────────────── Time

    Notice: Each High is HIGHER than the last (HH)
            Each Low is HIGHER than the last (HL)
    This is a valid UPTREND ✅
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Practical Rule</div>
  <p><strong>"The trend is your friend — until it ends."</strong> If BTC is in an uptrend, your best strategy is to buy at each Higher Low (dip). Don't try to short (sell) in an uptrend — you'd be fighting the trend. Wait for the trend structure to break before changing your bias.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Uptrend = Higher Highs + Higher Lows → Look to BUY dips</li>
    <li>Downtrend = Lower Highs + Lower Lows → Look to SELL rallies</li>
    <li>Sideways = No clear direction → Trade the range or wait</li>
    <li>Always trade WITH the trend, not against it</li>
    <li>A trend ends when its structure (HH/HL or LH/LL) is broken</li>
  </ul>
</div>
            `
          }
        ]
      }
    ]
  },

  // =========================================
  // WEEK 2 – INTERMEDIATE LEVEL (Technical Analysis)
  // =========================================
  {
    week: 2,
    weekTitle: "Intermediate Level – Technical Analysis",
    weekColor: "#d29922",
    classes: [
      // ---- CLASS 5 ----
      {
        id: 5,
        title: "Market Structure",
        icon: "📐",
        description: "Learn to read the language of price: Higher Highs, Higher Lows, Break of Structure, and how smart money moves the market.",
        topics: [
          {
            title: "Higher High, Higher Low (HH / HL)",
            content: `
<p>In an <strong>uptrend</strong>, price creates a pattern of <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>. Each peak surpasses the previous peak, and each dip stays above the previous dip. This shows that <strong>buyers are in control</strong> — they're willing to buy at increasingly higher prices.</p>

<div class="diagram-container">
  <div class="diagram-title">Higher Highs & Higher Lows (Bullish Structure)</div>
  <div class="chart-image-wrapper">
    <img src="images/higher_highs_lows.png" alt="Bullish Market Structure showing Higher Highs and Higher Lows on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — Bullish market structure with HH1, HL1, HH2, HL2, HH3 labeled</div>
  </div>
  <pre>
  Price
    │
    │                                          HH ← New highest point
    │                                         ╱  ╲
    │                          HH            ╱    ╲
    │                         ╱  ╲         ╱
    │            HH          ╱    ╲      ╱
    │           ╱  ╲       ╱       ╲   ╱
    │         ╱     ╲    ╱         HL ← Higher than previous low
    │       ╱        ╲ ╱
    │     ╱           HL ← Higher than first low
    │   ╱
    │  HL ← First low (starting point)
    │
    └──────────────────────────────────────────────── Time

    Pattern: HL → HH → HL → HH → HL → HH
    As long as this pattern holds, the UPTREND is valid ✅
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Real Example – BTC Uptrend</div>
  <ul>
    <li>BTC dip to <strong>$25,000</strong> (HL1) → Rally to <strong>$31,000</strong> (HH1)</li>
    <li>Dip to <strong>$27,000</strong> (HL2 — higher than HL1 ✅) → Rally to <strong>$35,000</strong> (HH2 — higher than HH1 ✅)</li>
    <li>Dip to <strong>$30,000</strong> (HL3 — higher than HL2 ✅) → Rally to <strong>$40,000</strong> (HH3 ✅)</li>
    <li>This is a clear uptrend! The best strategy is to BUY at each higher low.</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>HH + HL = Bullish Market Structure (uptrend)</li>
    <li>Buy at Higher Lows, sell at Higher Highs</li>
    <li>The trend is bullish UNTIL a Higher Low is broken</li>
  </ul>
</div>
            `
          },
          {
            title: "Lower High, Lower Low (LH / LL)",
            content: `
<p>In a <strong>downtrend</strong>, price creates <strong>Lower Highs (LH)</strong> and <strong>Lower Lows (LL)</strong>. Each bounce fails to reach the previous peak, and each dip goes deeper than the last. This shows that <strong>sellers are in control</strong>.</p>

<div class="diagram-container">
  <div class="diagram-title">Lower Highs & Lower Lows (Bearish Structure)</div>
  <div class="chart-image-wrapper">
    <img src="images/lower_highs_lows.png" alt="Bearish Market Structure showing Lower Highs and Lower Lows on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — Bearish market structure with LH1, LL1, LH2, LL2, LH3 labeled</div>
  </div>
  <pre>
  Price
    │
    │  First High
    │  ╱╲
    │ ╱   ╲
    │       ╲ LH ← Lower than first high        SELLERS IN CONTROL
    │        ╱╲
    │      ╱    ╲
    │    ╱       ╲
    │  LL          ╲ LH ← Even lower
    │  ↑            ╱╲
    │  Lower       ╱    ╲
    │  than      ╱       ╲
    │  start   LL          ╲
    │          ↑             ╲
    │          Even           ╲
    │          lower          LL ← Deepest point (trend continues)
    │
    └──────────────────────────────────────────────── Time

    Pattern: LH → LL → LH → LL → LH → LL
    As long as this pattern holds, the DOWNTREND is valid ✅
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Real Example – ETH Downtrend</div>
  <ul>
    <li>ETH peak at <strong>$4,800</strong> → drops to <strong>$3,500</strong> (LL1)</li>
    <li>Bounces to <strong>$4,200</strong> (LH1 — lower than $4,800 ✅) → drops to <strong>$2,800</strong> (LL2 ✅)</li>
    <li>Bounces to <strong>$3,400</strong> (LH2 — lower than LH1 ✅) → drops to <strong>$1,800</strong> (LL3 ✅)</li>
    <li>This is a downtrend. You should be SELLING rallies or staying out entirely.</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>LH + LL = Bearish Market Structure (downtrend)</li>
    <li>Sell/short at Lower Highs — don't try to buy in a downtrend</li>
    <li>The downtrend is valid UNTIL a Lower High is broken to the upside</li>
  </ul>
</div>
            `
          },
          {
            title: "Break of Structure (BOS)",
            content: `
<p>A <strong>Break of Structure (BOS)</strong> is the moment when the current trend continues or a new trend begins. It's one of the most important concepts in Smart Money trading.</p>
<ul>
  <li><strong>Bullish BOS:</strong> Price breaks above a previous <strong>Higher High</strong> → confirms the uptrend continues</li>
  <li><strong>Bearish BOS:</strong> Price breaks below a previous <strong>Higher Low</strong> → signals a potential shift to downtrend (also called <strong>Change of Character / CHoCH</strong>)</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Break of Structure (BOS) – Bullish Continuation</div>
  <div class="chart-image-wrapper">
    <img src="images/break_of_structure.png" alt="Break of Structure and Change of Character shown on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — BOS (trend continuation) and CHoCH (trend reversal) on candlestick chart</div>
  </div>
  <pre>
  Price
    │
    │                           ╱╲  ← New HH (BOS confirmed ✅)
    │                 HH      ╱    ╲
    │                ╱╲     ╱       ╲
    │              ╱    ╲ ╱
    │    HH      ╱      HL
    │   ╱╲     ╱ 
    │ ╱    ╲ ╱
    │╱      HL
    │HL
    │
    │  ──BOS──────BOS──────BOS──  (Each HH break = BOS)
    └──────────────────────────────────────── Time

    Bullish BOS: Price breaks above previous HH
    This CONFIRMS the uptrend continues
  </pre>
</div>

<div class="diagram-container">
  <div class="diagram-title">Change of Character (CHoCH) – Trend Reversal</div>
  <pre>
  Price
    │
    │            HH (Final high)
    │           ╱╲         
    │   HH    ╱    ╲       ← Uptrend was here
    │  ╱╲   ╱       ╲      
    │ ╱   ╲╱          ╲ LH  ← FAILED to make new HH!
    │╱     HL           ╱╲
    │HL                ╱    ╲
    │             HL ╱       ╲
    │ ─ ─ ─ ─ ─ ─ ╳ ─ ─ ─ ─ ╲─ ← HL broken = CHoCH!
    │              ↑            ╲
    │       Previous HL           ╲ LL
    │       is BROKEN              ↑
    │                        Trend changed from
    │                        BULLISH → BEARISH
    └──────────────────────────────────────── Time
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Trading BOS</div>
  <p>If BTC was making HH/HL and then <strong>breaks below a previous HL</strong>, this is a <strong>CHoCH</strong> (Change of Character). Smart traders immediately shift their bias from bullish to bearish and start looking for short (sell) setups. This break is often followed by a <strong>retest</strong> of the broken level before price continues lower.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Bullish BOS = price breaks above a previous HH (trend continues)</li>
    <li>Bearish BOS = price breaks below a previous HL (trend reversal)</li>
    <li>CHoCH (Change of Character) = first sign of trend reversal</li>
    <li>Wait for the break, then look for entry on the retest</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 6 ----
      {
        id: 6,
        title: "Supply & Demand / SMC Basics",
        icon: "⚡",
        description: "Discover Smart Money Concepts: Order Blocks, Equal Highs/Lows, and where institutional players position their orders.",
        topics: [
          {
            title: "Order Block (OB)",
            content: `
<p>An <strong>Order Block (OB)</strong> is the last candle before a strong impulsive move in the opposite direction. It represents the zone where institutional traders (Smart Money) placed their large orders. When price returns to an Order Block, it often <strong>reacts</strong> (bounces) because those unfilled orders get activated.</p>

<h4>Types of Order Blocks</h4>
<ul>
  <li><strong>Bullish OB:</strong> The last <strong>red (bearish) candle</strong> before a big move UP. This is where institutions were buying — smart money placed buy orders.</li>
  <li><strong>Bearish OB:</strong> The last <strong>green (bullish) candle</strong> before a big move DOWN. This is where institutions were selling.</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Order Block Identification</div>
  <div class="chart-image-wrapper">
    <img src="images/order_block.png" alt="Bullish and Bearish Order Blocks identified on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — Bullish OB (buy zone) and Bearish OB (sell zone) with price reaction</div>
  </div>
  <pre>
  BULLISH ORDER BLOCK                    BEARISH ORDER BLOCK

  Price                                  Price
    │                    ╱╱              │
    │                  ╱╱  Strong        │  ╲╲
    │                ╱╱    Bullish       │    ╲╲  Strong
    │              ╱╱      Move UP      │      ╲╲  Bearish
    │         ┌──┐╱╱                    │        ╲╲  Move DOWN
    │         │░░│ ← Last RED candle    │    ┌──┐  ╲╲
    │         │░░│    before move UP    │    │  │ ← Last GREEN candle
    │     ╲╲  └──┘    = BULLISH OB     │    │  │    before move DOWN
    │       ╲╲        (BUY ZONE)       │    └──┘    = BEARISH OB
    │         ╲╲                       │              (SELL ZONE)
    │                                  │
    └───────────────────── Time        └───────────────────── Time

  When price RETURNS to this zone,      When price RETURNS to this zone,
  expect it to BOUNCE UP ↑              expect it to DROP DOWN ↓
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Trading an Order Block</div>
  <ol>
    <li>BTC is at <strong>$62,000</strong> and drops to <strong>$59,500</strong></li>
    <li>At $59,500, there's one last red candle before a massive green move up to $65,000</li>
    <li>That red candle zone ($59,300-$59,500) is a <strong>Bullish Order Block</strong></li>
    <li>Next time BTC pulls back to <strong>$59,300-$59,500</strong>, you place a BUY order</li>
    <li>Set stop loss below the OB ($58,800), target the previous high ($65,000)</li>
    <li>Risk:Reward = approximately 1:8 — excellent trade!</li>
  </ol>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Order Block = zone where smart money placed large orders</li>
    <li>Bullish OB = last red candle before a big move up (BUY zone)</li>
    <li>Bearish OB = last green candle before a big move down (SELL zone)</li>
    <li>Trade the retest of the OB with a tight stop loss for great R:R</li>
  </ul>
</div>
            `
          },
          {
            title: "Equal Highs & Equal Lows",
            content: `
<p><strong>Equal Highs (EQH)</strong> and <strong>Equal Lows (EQL)</strong> are price levels where the market has topped or bottomed at nearly the same price <strong>multiple times</strong>. They look like "double tops" or "double bottoms" — but in Smart Money Concepts, these are actually <strong>liquidity traps</strong>.</p>
<p>When retail traders see equal highs, they place sell orders and stop losses just above. When price eventually breaks through those equal highs, it's <strong>sweeping liquidity</strong> — stopping out retail traders and fueling smart money's positions.</p>

<div class="diagram-container">
  <div class="diagram-title">Equal Highs & Equal Lows – Liquidity Pools</div>
  <div class="chart-image-wrapper">
    <img src="images/equal_highs_lows.png" alt="Equal Highs and Equal Lows as liquidity pools on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — EQH/EQL liquidity pools with stop losses and sweeps</div>
  </div>
  <pre>
  Price
    │
    │     ╱╲          ╱╲          ╱╲
    │   ╱    ╲      ╱    ╲      ╱    ╲     $ $ $ $ ← STOP LOSSES here
    │────────────────────────────────────── EQH (Equal Highs)
    │ ╱        ╲  ╱        ╲  ╱        ╲
    │            ╲            ╲          ╲  
    │                                     ╲   ╱╲╱╲╱── Price breaks 
    │                                      ╲╱      above to SWEEP
    │                                              stops, then reverses
    │
    └──────────────────────────────────────────────── Time

    Retail sees "resistance" → Smart Money sees LIQUIDITY to hunt 🎯
  </pre>
</div>

<div class="diagram-container">
  <div class="diagram-title">Equal Lows – Liquidity Pool Below</div>
  <pre>
  Price
    │
    │  Smart Money BUYS here after sweep ← ╱╲╱╲╱╲
    │                                    ╱
    │            ╱            ╱         ╱
    │ ╲        ╱  ╲        ╱  ╲      ╱
    │────────────────────────────────────── EQL (Equal Lows)
    │   ╲    ╱      ╲    ╱      ╲  ╱
    │     ╲╱          ╲╱         ╲╱ ← Price dips below to
    │                                   grab liquidity, then
    │     $ $ $ $ ← STOP LOSSES here   reverses UP 🚀
    │
    └──────────────────────────────────────────────── Time
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 How to Trade It</div>
  <p>You spot <strong>equal lows</strong> at $57,000 on BTC. Retail traders have their stop losses just below ($56,800). Smart money will push price below $57,000 to <strong>trigger those stops</strong>, then reverse. Your strategy: <strong>DON'T buy at equal lows.</strong> Wait for the sweep (price dips below), then buy the reversal with confirmation.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Equal Highs/Lows = liquidity pools (clusters of stop loss orders)</li>
    <li>Smart Money hunts these levels to fill their orders</li>
    <li>Don't trade blindly at EQH/EQL — wait for the sweep</li>
    <li>After a liquidity sweep, price often reverses sharply</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 7 ----
      {
        id: 7,
        title: "Indicators",
        icon: "📈",
        description: "Learn the most useful technical indicators: RSI and Volume Analysis to confirm your trades.",
        topics: [
          {
            title: "RSI (Relative Strength Index)",
            content: `
<p>The <strong>RSI (Relative Strength Index)</strong> is a momentum indicator that measures the speed and magnitude of recent price changes on a scale of <strong>0 to 100</strong>. It helps you determine whether an asset is <strong>overbought</strong> (too expensive, likely to drop) or <strong>oversold</strong> (too cheap, likely to rise).</p>

<h4>RSI Levels</h4>
<ul>
  <li><strong>RSI > 70 = Overbought</strong> — Price has risen too fast, a pullback may come</li>
  <li><strong>RSI < 30 = Oversold</strong> — Price has dropped too fast, a bounce may come</li>
  <li><strong>RSI = 50 = Neutral</strong> — No clear direction</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">RSI Indicator Visualization</div>
  <div class="chart-image-wrapper">
    <img src="images/rsi_indicator.png" alt="RSI Relative Strength Index indicator showing overbought and oversold zones with divergence">
    <div class="image-caption">📊 Click to zoom — RSI oscillating between 0-100 with overbought (70) and oversold (30) zones</div>
  </div>
  <pre>
  RSI
  100│
     │───────────────────────────────────── Overbought Zone
   70│═══════════════════════════════════════════════════
     │              ╱╲                  ╱╲
     │            ╱    ╲              ╱    ╲
   50│──────────╱────────╲──────────╱────────╲────── Neutral
     │        ╱            ╲      ╱            ╲
     │      ╱                ╲  ╱                ╲
   30│═══════════════════════════════════════════════
     │───────────────────────────────────── Oversold Zone
    0│
     └────────────────────────────────────────────── Time

     When RSI enters OVERBOUGHT → Caution, may drop
     When RSI enters OVERSOLD  → Opportunity, may bounce
  </pre>
</div>

<h4>RSI Divergence (Advanced Signal)</h4>
<p>A <strong>divergence</strong> occurs when price and RSI move in opposite directions — this often signals a trend reversal.</p>

<div class="diagram-container">
  <div class="diagram-title">Bullish RSI Divergence</div>
  <pre>
  Price:    ╲╱          ╲╱              Price makes LOWER lows
                ↘               ↘
  
  RSI:      ╲╱          ╲╱              RSI makes HIGHER lows
                ↗               ↗

  Price goes DOWN but RSI goes UP = BULLISH DIVERGENCE
  → Price is likely to reverse UPWARD 🚀
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Example</div>
  <p>BTC drops from $65,000 to $58,000 and RSI falls to <strong>25 (oversold)</strong>. This signals that selling pressure is exhausted and a bounce is likely. You buy at $58,000. RSI rises back above 30, confirming the bounce, and BTC recovers to $62,000. Profit: <strong>6.9%</strong>.</p>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ RSI Limitation</div>
  <p>RSI can stay overbought/oversold for <strong>extended periods</strong> during strong trends. In a powerful bull run, RSI can stay above 70 for weeks. Don't blindly sell just because RSI is overbought — always use RSI with other confluence factors.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>RSI > 70 = overbought (possible sell signal)</li>
    <li>RSI < 30 = oversold (possible buy signal)</li>
    <li>RSI Divergence = powerful reversal signal</li>
    <li>Never use RSI alone — combine with S/R, trend, and volume</li>
  </ul>
</div>
            `
          },
          {
            title: "Volume Analysis",
            content: `
<p><strong>Volume</strong> is the total amount of an asset traded during a specific period. It's one of the most powerful confirmations for any trading signal. Volume tells you the <strong>strength</strong> behind a price move.</p>

<h4>Volume Rules</h4>
<ul>
  <li><strong>High volume + price move = STRONG</strong> (real breakout, likely to continue)</li>
  <li><strong>Low volume + price move = WEAK</strong> (fake breakout, likely to reverse)</li>
  <li><strong>Increasing volume in trend = Trend is healthy</strong></li>
  <li><strong>Decreasing volume in trend = Trend is weakening</strong></li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Volume Confirms Price Action</div>
  <pre>
  Price                                          ╱╲
    │                                          ╱    ╲
    │                              ╱╲        ╱
    │                            ╱    ╲    ╱
    │  ─────────────RESISTANCE──╱──────╲╱──────────────────
    │              ╱╲          ╱
    │            ╱    ╲      ╱
    │          ╱        ╲  ╱
    │        ╱            ╲
    └──────────────────────────────────────────── Time

  Volume
    │
    │                                     ███
    │                          ███       █████
    │              ███        █████     ███████
    │  ██  ██    ██████      ███████   █████████
    │  ████████  ████████    █████████ ███████████
    └──────────────────────────────────────────── Time
            Low Volume          HIGH VOLUME
           (Weak attempts)    (Real Breakout! ✅)
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Example</div>
  <p>BTC has been stuck below <strong>$70,000 resistance</strong> for 2 weeks. It attempts to break above twice with low volume — both times it fails and comes back down (fake breakout). On the third attempt, volume <strong>surges 300%</strong> and price breaks to $72,000. This is a <strong>valid breakout</strong> confirmed by volume. You buy the breakout and ride the trend.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Volume = the fuel behind price movement</li>
    <li>High volume confirms breakouts and trend strength</li>
    <li>Low volume breakouts are often "fakeouts"</li>
    <li>Always check volume when making a trading decision</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 8 ----
      {
        id: 8,
        title: "Risk Management",
        icon: "🛡️",
        description: "The most important class: protect your capital. Learn risk-reward, position sizing, stop losses, and trading psychology.",
        topics: [
          {
            title: "What is Risk-Reward Ratio?",
            content: `
<p>The <strong>Risk-Reward Ratio (R:R)</strong> compares how much you risk to how much you could gain on a trade. It's the foundation of profitable trading. A good R:R means that even if you lose more trades than you win, you can still be profitable overall.</p>
<p><strong>Formula: R:R = Potential Loss : Potential Gain</strong></p>

<div class="diagram-container">
  <div class="diagram-title">Risk-Reward Ratio Visualization</div>
  <div class="chart-image-wrapper">
    <img src="images/risk_reward_ratio.png" alt="Risk-Reward Ratio visualization showing entry, stop loss, and take profit levels on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — 1:3 R:R setup with Entry, Stop Loss ($58K), and TP1/TP2/TP3 levels</div>
  </div>
  <pre>
  Price
    │
    │  ── Take Profit (TP) ─── $66,000 ──── Reward: $6,000 (3 parts)
    │        │                                        │
    │        │  Reward = $6,000                       │  3R
    │        │  (3 parts)                             │
    │        │                                        │
    │  ── Entry ──────────── $60,000                  │
    │        │                                        │
    │        │  Risk = $2,000                          │  1R
    │        │  (1 part)                              │
    │        │                                        │
    │  ── Stop Loss (SL) ─── $58,000 ──── Risk: $2,000 (1 part)
    │
    └──────────────────────────────────────────── Time

    Risk:Reward = 1:3   
    You risk $2,000 to potentially make $6,000
    Even winning only 33% of trades = PROFITABLE ✅
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Why R:R Matters – Example</div>
  <p>Trader A takes 10 trades with a <strong>1:3 R:R</strong>, risking $100 per trade:</p>
  <ul>
    <li>Wins: 4 out of 10 (40% win rate)</li>
    <li>Losses: 6 × $100 = <strong>-$600</strong></li>
    <li>Wins: 4 × $300 = <strong>+$1,200</strong></li>
    <li>Net Profit: <strong>+$600</strong> (profitable even with 40% win rate!)</li>
  </ul>
  <p>Trader B takes 10 trades with a <strong>1:1 R:R</strong>, risking $100 per trade:</p>
  <ul>
    <li>Wins: 6 out of 10 (60% win rate — much better!)</li>
    <li>Losses: 4 × $100 = <strong>-$400</strong></li>
    <li>Wins: 6 × $100 = <strong>+$600</strong></li>
    <li>Net Profit: <strong>+$200</strong> (lower profit despite higher win rate)</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Always aim for minimum 1:2 R:R (ideally 1:3 or better)</li>
    <li>A high R:R means you can be profitable even with a low win rate</li>
    <li>Never take a trade where the risk is greater than the reward</li>
    <li>Calculate R:R BEFORE entering every trade</li>
  </ul>
</div>
            `
          },
          {
            title: "Position Sizing",
            content: `
<p><strong>Position sizing</strong> determines how much money you allocate to each trade. The golden rule: <strong>never risk more than 1-2% of your total account on any single trade</strong>. This ensures that even a losing streak won't wipe out your account.</p>

<h4>Position Size Formula</h4>
<p><strong>Position Size = (Account Balance × Risk %) ÷ (Entry Price - Stop Loss Price)</strong></p>

<div class="example-box">
  <div class="example-label">💡 Position Sizing Calculation</div>
  <ul>
    <li><strong>Account Balance:</strong> $10,000</li>
    <li><strong>Risk per trade:</strong> 2% = $200 (max you can lose)</li>
    <li><strong>Entry Price:</strong> $60,000 (BTC)</li>
    <li><strong>Stop Loss:</strong> $59,000 (risk of $1,000 per BTC)</li>
    <li><strong>Position Size:</strong> $200 ÷ $1,000 = <strong>0.2 BTC</strong></li>
    <li><strong>Position Value:</strong> 0.2 × $60,000 = <strong>$12,000</strong></li>
  </ul>
  <p>If BTC hits your stop loss at $59,000, you lose exactly <strong>$200</strong> (2% of account). Your account drops to $9,800 — you can easily recover.</p>
</div>

<div class="diagram-container">
  <div class="diagram-title">Impact of Risk % on Account Survival</div>
  <pre>
  Account Balance After 10 Consecutive Losses:

  Risk 1% per trade:  $10,000 → $9,044  (Lost only 9.6%)  ✅ Recoverable
  Risk 2% per trade:  $10,000 → $8,171  (Lost 18.3%)      ✅ Recoverable
  Risk 5% per trade:  $10,000 → $5,987  (Lost 40.1%)      ⚠️ Difficult
  Risk 10% per trade: $10,000 → $3,487  (Lost 65.1%)      ❌ Very hard
  Risk 25% per trade: $10,000 → $563    (Lost 94.4%)      💀 Game over
  
  The difference between risking 2% vs 10% is the difference 
  between surviving and blowing your account.
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Risk 1-2% of your account per trade (MAXIMUM)</li>
    <li>Calculate position size based on where your stop loss will be</li>
    <li>This protects you from losing streaks (which WILL happen)</li>
    <li>Consistency in position sizing is more important than being right</li>
  </ul>
</div>
            `
          },
          {
            title: "Stop Loss & Take Profit",
            content: `
<p>A <strong>Stop Loss (SL)</strong> is an automatic order that closes your trade at a predetermined loss level. A <strong>Take Profit (TP)</strong> is an order that automatically closes your trade at your target profit level. Together, they automate your exit strategy and remove emotion from trading.</p>

<h4>Where to Place Stop Loss</h4>
<ul>
  <li>Below the recent <strong>swing low</strong> (for long/buy positions)</li>
  <li>Below the <strong>Order Block</strong> zone</li>
  <li>Below key <strong>support</strong> levels</li>
  <li>Never place it at an obvious round number (market makers hunt these)</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Stop Loss & Take Profit Placement</div>
  <pre>
  Price
    │
    │  ═══ TP3 (1:3 R:R) ══════════$66,000 ═══  Partial profit (close 25%)
    │        │
    │        │ +$4,000
    │        │
    │  ═══ TP2 (1:2 R:R) ══════════$64,000 ═══  Partial profit (close 25%)
    │        │
    │        │ +$2,000
    │        │
    │  ═══ TP1 (1:1 R:R) ══════════$62,000 ═══  Partial profit (close 25%)
    │        │
    │  ──── ENTRY ──────────────────$60,000 ────
    │        │
    │        │ -$2,000 (risk)
    │        │
    │  ═══ STOP LOSS ═══════════════$58,000 ═══  Max loss if wrong
    │
    └──────────────────────────────────────── Time

    Strategy: Scale out at multiple TPs
    Move stop loss to breakeven after TP1 hits (FREE TRADE!)
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Pro Tip: Trailing Stop Loss</div>
  <p>As price moves in your favor, <strong>move your stop loss up</strong> to lock in profits. After reaching TP1, move your SL to your entry price (breakeven). Now it's a "free trade" — you literally cannot lose money. After TP2, move SL to TP1 level, and so on.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>ALWAYS use a stop loss — no exceptions</li>
    <li>Place SL below recent structure, not at obvious levels</li>
    <li>Use multiple TPs to secure profits gradually</li>
    <li>Move SL to breakeven after first TP = risk-free trade</li>
  </ul>
</div>
            `
          },
          {
            title: "Psychology of Trading",
            content: `
<p>Trading is <strong>80% psychology and 20% strategy</strong>. You can have the best trading system in the world, but if you can't control your emotions, you'll still lose money. The two biggest enemies of every trader are <strong>Fear</strong> and <strong>Greed</strong>.</p>

<h4>Common Psychological Traps</h4>
<table class="comparison-table">
  <tr><th>Trap</th><th>What Happens</th><th>Solution</th></tr>
  <tr><td><strong>FOMO</strong> (Fear of Missing Out)</td><td>Buying after a big pump because you're afraid of missing gains</td><td>Stick to your plan. If you missed it, wait for the next setup.</td></tr>
  <tr><td><strong>Revenge Trading</strong></td><td>Taking random trades after a loss to "win it back"</td><td>Take a break after 2-3 consecutive losses. Come back fresh.</td></tr>
  <tr><td><strong>Overtrading</strong></td><td>Taking too many trades, often from boredom</td><td>Quality over quantity. 2-3 good trades/week beats 20 random ones.</td></tr>
  <tr><td><strong>Moving Stop Loss</strong></td><td>Widening your stop loss hoping price will come back</td><td>NEVER move your stop loss further away. Accept small losses.</td></tr>
  <tr><td><strong>Cutting Winners Short</strong></td><td>Closing profitable trades too early out of fear</td><td>Let winners run to your TP. Use trailing stop loss.</td></tr>
</table>

<div class="diagram-container">
  <div class="diagram-title">The Emotional Cycle of Trading</div>
  <pre>
                         EUPHORIA 🤑
                        ╱ "I'm a genius!" ╲
                      ╱                     ╲
               THRILL                     ANXIETY
              "Easy money!"              "Is it dropping?"
             ╱                                 ╲
      OPTIMISM                               DENIAL
     "Let me invest!"                     "It'll come back"
       ╱                                        ╲
  HOPE                                        FEAR 😰
  "Crypto is cool"                          "Should I sell??"
       ╲                                        ╱
      RELIEF                             DESPERATION
     "It's recovering"                   "I'm losing everything"
             ╲                                 ╱
              OPTIMISM                   PANIC 💀
               (again)              "SELL EVERYTHING!"
                      ╲                     ╱
                        ╲ CAPITULATION    ╱
                         "I'm done with  
                          crypto forever"
                              │
                         DEPRESSION 😞
                              │
                        "I should have held..."
                              │
                          DISBELIEF
                        "Is it going up?"
                              │
                            HOPE... → cycle repeats
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Rules for Emotional Control</div>
  <ul>
    <li>Create a <strong>trading plan</strong> BEFORE the market opens — and follow it</li>
    <li>Accept that <strong>losses are part of trading</strong> — aim for long-term consistency</li>
    <li>Take a <strong>break after 3 consecutive losses</strong> — step away from the screen</li>
    <li>Keep a <strong>trading journal</strong> — record every trade, why you entered, and how you felt</li>
    <li><strong>Never trade when emotional</strong> — angry, excited, or anxious</li>
    <li>Treat trading like a <strong>business</strong>, not a casino</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Your mindset matters more than your strategy</li>
    <li>FOMO and Revenge Trading destroy more accounts than bad analysis</li>
    <li>Follow your plan — emotions are the enemy</li>
    <li>Journal every trade to improve self-awareness</li>
  </ul>
</div>
            `
          }
        ]
      }
    ]
  },

  // =========================================
  // WEEK 3 – ADVANCED LEVEL (SMC & Strategy)
  // =========================================
  {
    week: 3,
    weekTitle: "Advanced Level – Smart Money & Strategy",
    weekColor: "#f7931a",
    classes: [
      // ---- CLASS 9 ----
      {
        id: 9,
        title: "Advanced Liquidity Concepts",
        icon: "💧",
        description: "Understand how smart money hunts liquidity: internal vs external, liquidity sweeps, buy/sell side, and stop hunts.",
        topics: [
          {
            title: "Internal vs External Liquidity",
            content: `
<p><strong>Liquidity</strong> in trading refers to clusters of orders (especially stop losses) sitting at specific price levels. Smart Money needs liquidity to fill their large orders. Understanding where liquidity pools exist is the key to understanding market manipulation.</p>

<h4>External Liquidity</h4>
<p>Found at <strong>obvious highs and lows</strong> on the chart — swing highs, swing lows, equal highs, equal lows. These are the most obvious places where retail traders place their stop losses.</p>

<h4>Internal Liquidity</h4>
<p>Found <strong>between swing highs and swing lows</strong> — fair value gaps, order blocks, imbalances. This is where institutional orders are positioned within the price range.</p>

<div class="diagram-container">
  <div class="diagram-title">Internal vs External Liquidity</div>
  <pre>
  Price
    │
    │  ══ Swing High ════════════ EXTERNAL LIQUIDITY (sell stops above)
    │            ╲
    │              ╲
    │     ┌─────────╲──────────── INTERNAL LIQUIDITY
    │     │  FVG  │   ╲           (Fair Value Gaps,
    │     │       │     ╲          Order Blocks,
    │     └───────┘       ╲        Imbalances)
    │                      ╲
    │     ┌─────────────────╲──── INTERNAL LIQUIDITY
    │     │  Order Block  │   ╲
    │     └───────────────┘     ╲
    │                            ╲
    │  ══ Swing Low ══════════════ EXTERNAL LIQUIDITY (buy stops below)
    │
    └──────────────────────────────────────── Time

    Smart Money Flow: External → Internal → External
    Price sweeps external liquidity, then fills internal gaps
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 How Smart Money Uses Liquidity</div>
  <ol>
    <li>Price sweeps the <strong>swing low</strong> (external liquidity) — triggering retail buy stop losses</li>
    <li>Smart money fills their buy orders using this liquidity</li>
    <li>Price reverses and moves toward <strong>internal liquidity</strong> (FVGs, OBs)</li>
    <li>Eventually targets the <strong>swing high</strong> (external liquidity on the other side)</li>
  </ol>
  <p>Pattern: <strong>External liquidity → Internal liquidity → External liquidity</strong></p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>External liquidity = at obvious highs/lows (stop loss clusters)</li>
    <li>Internal liquidity = within the range (FVGs, OBs, imbalances)</li>
    <li>Smart Money sweeps external liquidity to enter, then targets internal</li>
    <li>Price flows from external → internal → external</li>
  </ul>
</div>
            `
          },
          {
            title: "Liquidity Sweep",
            content: `
<p>A <strong>liquidity sweep</strong> (or "liquidity grab") happens when price briefly moves beyond a key level to <strong>trigger stop losses</strong>, then quickly reverses. This is how smart money accumulates or distributes positions — they need retail traders' stop losses to fill their massive orders.</p>

<div class="diagram-container">
  <div class="diagram-title">Liquidity Sweep – Buy Side</div>
  <div class="chart-image-wrapper">
    <img src="images/liquidity_sweep.png" alt="Liquidity Sweep showing price dipping below support to grab stop losses then reversing">
    <div class="image-caption">📊 Click to zoom — Stop Hunt: price sweeps below key level, grabs liquidity, then reverses sharply</div>
  </div>
  <pre>
  Price
    │
    │               ╱╲ ← Sweep above highs (grabs liquidity)
    │  ── Previous High ── ── ──╱── ── ── ── ── ── ── ──
    │            ╱╲             │╲
    │          ╱    ╲         ╱ │  ╲   Sharp reversal
    │        ╱       ╲      ╱  │    ╲  after sweep
    │      ╱           ╲  ╱    │      ╲
    │    ╱               ╲     │        ╲
    │  ╱                       │          ╲
    │                          │            ╲
    │                          │
    │           "SWEEP"        │  Price grabbed the stop
    │           happened       │  losses sitting above
    │           here           │  the previous high
    └──────────────────────────────────────── Time
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Example</div>
  <p>BTC forms equal highs at <strong>$65,000</strong>. Retail traders who are short (betting on a drop) have their stop losses just above at $65,200-$65,500. Smart money pushes price to <strong>$65,400</strong>, triggering all those stops (retail traders are forced to buy, which creates the liquidity smart money needs to sell). Price then <strong>reverses sharply</strong> and drops to $61,000. The sweep was the signal to go short.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>A sweep = price briefly breaks a key level then reverses quickly</li>
    <li>Purpose: to trigger stop losses and provide liquidity for smart money</li>
    <li>After a sweep, expect a reversal in the opposite direction</li>
    <li>Trade the reversal AFTER the sweep, not before</li>
  </ul>
</div>
            `
          },
          {
            title: "Buy Side & Sell Side Liquidity",
            content: `
<p>Every order in the market has two sides. <strong>Buy-side liquidity (BSL)</strong> sits above current price — these are stop losses of short sellers and buy stop orders. <strong>Sell-side liquidity (SSL)</strong> sits below current price — these are stop losses of long positions and sell stop orders.</p>

<div class="diagram-container">
  <div class="diagram-title">Buy Side & Sell Side Liquidity</div>
  <pre>
  Price
    │
    │  $$$$$$$$$$$$$$$$$$$$$$   ← BUY SIDE LIQUIDITY (BSL)
    │  Previous Highs              Stop losses of SHORT traders
    │  Equal Highs                 Buy stop orders
    │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
    │
    │           ╱╲
    │         ╱    ╲           ← Current Price Area
    │       ╱        ╲
    │
    │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
    │  Previous Lows               Stop losses of LONG traders
    │  Equal Lows                  Sell stop orders
    │  $$$$$$$$$$$$$$$$$$$$$$   ← SELL SIDE LIQUIDITY (SSL)
    │
    └──────────────────────────────────────── Time

    Smart Money decision: Which side to sweep first?
    → Sweep SSL (take longs out) → then push price UP to BSL
    → Or sweep BSL (take shorts out) → then push price DOWN to SSL
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 How to Use BSL/SSL</div>
  <p>If you identify that there's <strong>massive BSL above $70,000</strong> (lots of short stop losses sitting there), there's a high probability that smart money will push price to $70,000+ to sweep that liquidity before reversing. Your strategy: wait for the sweep above $70,000, then look for a short entry with confirmation.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>BSL (Buy Side Liquidity) = above current price, at highs</li>
    <li>SSL (Sell Side Liquidity) = below current price, at lows</li>
    <li>Smart Money targets whichever side has more liquidity</li>
    <li>Identify where liquidity pools are to predict the next move</li>
  </ul>
</div>
            `
          },
          {
            title: "Stop Hunts",
            content: `
<p>A <strong>stop hunt</strong> is an intentional move by institutional traders (market makers) to push price to a level where many retail stop losses are clustered, trigger those stops, then reverse the price direction. It's the most common form of market manipulation.</p>

<div class="diagram-container">
  <div class="diagram-title">Stop Hunt – Below Support</div>
  <pre>
  Price
    │
    │          ╱╲          ╱╲
    │        ╱    ╲      ╱    ╲
    │      ╱        ╲  ╱        ╲
    │═══════════════════════════════════ SUPPORT ($58,000)
    │                                    ╲
    │    $ $ $ $ $ $ $ $ $ $ $ $          ╲   ╱╲
    │    Retail stop losses               ╲ ╱    ╲
    │    at $57,500-$57,800                ╲      │ Strong bounce
    │                            STOP HUNT ╱     │ after hunt
    │                            ($57,200) ╱      │
    │                                ╱╲  ╱        │ Price ROCKETS
    │                               ╱  ╲╱         │ back above
    │                                             │ support
    │                                             ╱
    │                                           ╱
    │═══════════════════════════════════════════ Target: $62,000+
    │
    └──────────────────────────────────────── Time

    1. Retail places stops below support ($57,500-$57,800)
    2. Smart Money pushes price to $57,200 (stops triggered)
    3. Retail is stopped out at a loss
    4. Smart Money buys at $57,200 using retail's liquidity
    5. Price reverses and rockets upward 🚀
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ How to Avoid Stop Hunts</div>
  <ul>
    <li>Don't place stop losses at <strong>obvious levels</strong> (right below support or above resistance)</li>
    <li>Give your stop loss some <strong>extra room</strong> beyond the obvious level</li>
    <li>Wait for the <strong>stop hunt to happen</strong>, then enter AFTER the sweep</li>
    <li>Use higher timeframe levels for stop placement — they're harder to hunt</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Stop hunts are intentional moves to trigger retail stop losses</li>
    <li>They create the liquidity smart money needs to enter</li>
    <li>Don't place stops at obvious levels — add buffer space</li>
    <li>Trade WITH the hunt: wait for the sweep, enter on reversal</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 10 ----
      {
        id: 10,
        title: "Order Flow & Price Action",
        icon: "🔀",
        description: "Understand Fair Value Gaps and imbalances — where price left 'gaps' that it wants to come back and fill.",
        topics: [
          {
            title: "Fair Value Gap (FVG)",
            content: `
<p>A <strong>Fair Value Gap (FVG)</strong> is a price area where the market moved so fast that it left a "gap" — an <strong>imbalance</strong> between buyers and sellers. FVGs are visible as three-candle formations where the wicks of the first and third candles don't overlap, creating an unfilled space.</p>
<p>The market tends to return to FVGs to "fill" or "rebalance" them. This makes FVGs excellent areas for trade entries.</p>

<div class="diagram-container">
  <div class="diagram-title">Bullish Fair Value Gap</div>
  <div class="chart-image-wrapper">
    <img src="images/fair_value_gap.png" alt="Fair Value Gap FVG showing the gap between candle wicks on a candlestick chart">
    <div class="image-caption">📊 Click to zoom — Bullish & Bearish FVG: gap between candle 1 and candle 3 wicks</div>
  </div>
  <pre>
  Price
    │
    │                    ┌────┐
    │                    │    │  Candle 3 (continuation up)
    │                    │    │
    │                    └──┬─┘
    │                       │
    │     ← GAP ──────  ████████  ← This area is the FVG
    │     No trading    ████████    (no candle wicks overlap here)
    │     happened       │
    │                  ┌──┴─┐
    │                  │    │
    │                  │    │  Candle 1 (before the impulse)
    │                  └────┘
    │
    │
    │  When price returns to this FVG zone, 
    │  it often BOUNCES — making it an ideal BUY zone
    │
    └──────────────────────────────────────── Time
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Trading a Bullish FVG</div>
  <ol>
    <li>BTC is at $60,000. A massive green candle shoots it to $62,500</li>
    <li>Between $60,800 and $61,200, no wick overlap exists — this is a <strong>Bullish FVG</strong></li>
    <li>Price continues to $63,000, then starts pulling back</li>
    <li>Place a <strong>buy order at $61,200-$60,800</strong> (the FVG zone)</li>
    <li>Stop loss below the FVG ($60,500)</li>
    <li>Target: previous high $63,000 or higher</li>
    <li>When price returns to fill the FVG, your order gets triggered and bounces ✅</li>
  </ol>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>FVG = gap between candle 1's wick and candle 3's wick in a 3-candle formation</li>
    <li>Price tends to return and fill FVGs (rebalancing)</li>
    <li>Bullish FVG = buy zone, Bearish FVG = sell zone</li>
    <li>Combine FVGs with Order Blocks for higher-probability entries</li>
  </ul>
</div>
            `
          },
          {
            title: "Imbalance",
            content: `
<p>An <strong>imbalance</strong> occurs when there's a disproportionate amount of buying vs selling (or vice versa), creating a one-sided price move. On a chart, imbalances appear as <strong>large-bodied candles with little to no wicks</strong> — price moved so aggressively in one direction that there was no opposing pressure.</p>
<p>The market seeks <strong>equilibrium</strong> (balance). When imbalances exist, price will eventually return to "fill" or "rebalance" that area. Imbalances and FVGs are closely related concepts.</p>

<div class="diagram-container">
  <div class="diagram-title">Imbalance vs Balanced Price Action</div>
  <pre>
  BALANCED PRICE ACTION              IMBALANCED PRICE ACTION
  (Normal, back-and-forth)            (One-sided, aggressive)

    ┌──┐                                       ┌──┐
    │  │                                       │  │  Large body
    │  │  Small candles                        │  │  no wicks
    └──┘  with wicks                           │  │
    ┌──┐                                       │  │  = IMBALANCE
    │  │  Buyers AND                           │  │
    └──┘  sellers active                       │  │
    ┌──┐                                       └──┘
    │  │                                 Only ONE side
    └──┘                                 was active

  Market in equilibrium              Market out of balance
  → No imbalance                     → Will likely retrace to fill
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 How to Use Imbalances</div>
  <p>You see 3 massive green candles in a row on BTC (from $58,000 to $63,000) with no significant wicks. This entire $5,000 move is an <strong>imbalance</strong>. Expect price to retrace back into this zone (around $60,000-$61,000) before continuing higher. Place your buy order in the middle of the imbalance zone for optimal entry.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Imbalance = one-sided aggressive move (big candles, small wicks)</li>
    <li>Market always seeks to rebalance — price often returns to fill imbalances</li>
    <li>Use imbalances as entry zones when price retraces</li>
    <li>FVGs are a specific type of imbalance (between candle wicks)</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 11 ----
      {
        id: 11,
        title: "Futures & Leverage",
        icon: "⚡",
        description: "Deep dive into futures trading: leverage mechanics, funding rates, long vs short, and the risk of liquidation.",
        topics: [
          {
            title: "What is Leverage?",
            content: `
<p><strong>Leverage</strong> is borrowed capital that amplifies your trading position. With leverage, you can control a much larger position than your actual account balance. For example, with <strong>10x leverage</strong>, you can trade $10,000 worth of crypto with only $1,000 of your own money.</p>

<div class="diagram-container">
  <div class="diagram-title">How Leverage Multiplies Gains & Losses</div>
  <div class="chart-image-wrapper">
    <img src="images/leverage_comparison.png" alt="Leverage comparison showing liquidation distances at different leverage levels">
    <div class="image-caption">📊 Click to zoom — Liquidation risk increases exponentially with higher leverage</div>
  </div>
  <pre>
  Your Capital: $1,000

  ┌────────────┬──────────────┬───────────────┬──────────────────┐
  │  Leverage  │  Position    │  5% Price     │  5% Price        │
  │            │  Size        │  Increase     │  Decrease         │
  ├────────────┼──────────────┼───────────────┼──────────────────┤
  │   1x       │   $1,000     │  +$50  (+5%)  │  -$50  (-5%)     │
  │   5x       │   $5,000     │  +$250 (+25%) │  -$250 (-25%)    │
  │  10x       │  $10,000     │  +$500 (+50%) │  -$500 (-50%)    │
  │  20x       │  $20,000     │  +$1000(+100%)│  -$1000 LIQUIDATED│
  │  50x       │  $50,000     │  +$2500(+250%)│  -$1000 at -2%‼️ │
  │ 100x       │ $100,000     │  +$5000(+500%)│  -$1000 at -1%‼️ │
  └────────────┴──────────────┴───────────────┴──────────────────┘

  Higher leverage = Higher risk of LIQUIDATION
  With 100x leverage, just a 1% move against you = TOTAL LOSS
  </pre>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ The Leverage Trap</div>
  <p>High leverage is the #1 account killer for new traders. <strong>90% of futures traders lose money</strong>, largely because they use too much leverage. Professional traders rarely use more than 3-5x leverage. Start low (2-3x) and increase gradually only as you gain experience.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Leverage amplifies both gains AND losses equally</li>
    <li>Higher leverage = smaller margin for error</li>
    <li>Beginners: max 2-3x leverage. Pros: max 5-10x</li>
    <li>Never use 50x-100x leverage unless you want to gamble</li>
  </ul>
</div>
            `
          },
          {
            title: "Funding Rate",
            content: `
<p>The <strong>funding rate</strong> is a periodic payment between long and short traders in perpetual futures contracts. It keeps the futures price close to the spot price.</p>
<ul>
  <li><strong>Positive funding rate:</strong> Longs pay shorts → market is bullish (more people are long)</li>
  <li><strong>Negative funding rate:</strong> Shorts pay longs → market is bearish (more people are short)</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Funding Rate Mechanism</div>
  <pre>
  POSITIVE Funding Rate                  NEGATIVE Funding Rate
  (Bullish Market)                       (Bearish Market)

  ┌─────────┐   pays fee   ┌─────────┐  ┌─────────┐   pays fee   ┌─────────┐
  │  LONGS  │─────────────▶│ SHORTS  │  │ SHORTS  │─────────────▶│  LONGS  │
  │ (buyers)│              │(sellers)│  │(sellers)│              │ (buyers)│
  └─────────┘              └─────────┘  └─────────┘              └─────────┘

  Too many longs = longs                 Too many shorts = shorts
  pay shorts to balance                  pay longs to balance

  Funding rate: +0.01%                   Funding rate: -0.02%
  (every 8 hours)                        (every 8 hours)
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Using Funding Rate as a Signal</div>
  <p><strong>Extremely high positive funding (>0.1%):</strong> Too many people are long — the market is overheated. A correction may come (good time to take profits or look for shorts).</p>
  <p><strong>Extremely negative funding (<-0.05%):</strong> Too many people are short — the market may squeeze upward (good contrarian buy signal).</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Funding rate keeps futures price aligned with spot price</li>
    <li>Positive = longs pay shorts (bullish bias)</li>
    <li>Negative = shorts pay longs (bearish bias)</li>
    <li>Extreme funding rates can signal incoming reversals</li>
  </ul>
</div>
            `
          },
          {
            title: "Long vs Short",
            content: `
<p>In futures trading, you can profit from BOTH directions:</p>
<ul>
  <li><strong>Long (Buy):</strong> You profit when the price goes UP. You're betting on a price increase.</li>
  <li><strong>Short (Sell):</strong> You profit when the price goes DOWN. You're essentially betting on a price decrease.</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">Long vs Short Positions</div>
  <pre>
  LONG Position (Buying)                 SHORT Position (Selling)
  "I think price will go UP"             "I think price will go DOWN"

  Price                                  Price
    │     ╱╲                               │  Entry: $60,000
    │   ╱    ╲  TP ($65,000)               │  ╲
    │  ╱       ✓  Profit +$5,000           │    ╲
    │ ╱                                    │      ╲  TP ($55,000)
    │Entry: $60,000                        │        ✓  Profit +$5,000
    │ ╲                                    │          ╲
    │   ╲  SL ($58,000)                    │            ╲
    │     ✗  Loss -$2,000                  │              ╲
    │                                      │   If price goes UP → LOSS
    │  If price goes UP → PROFIT           │   If price goes DOWN → PROFIT
    │  If price goes DOWN → LOSS           │
    └───────────── Time                    └───────────── Time
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 When to Go Long vs Short</div>
  <table class="comparison-table">
    <tr><th>Signal</th><th>Go Long</th><th>Go Short</th></tr>
    <tr><td>Trend</td><td>Uptrend (HH/HL)</td><td>Downtrend (LH/LL)</td></tr>
    <tr><td>Support/Resistance</td><td>Price at support</td><td>Price at resistance</td></tr>
    <tr><td>Order Block</td><td>Bullish OB retest</td><td>Bearish OB retest</td></tr>
    <tr><td>Liquidity</td><td>After SSL sweep</td><td>After BSL sweep</td></tr>
    <tr><td>RSI</td><td>Oversold (< 30)</td><td>Overbought (> 70)</td></tr>
  </table>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Long = profit when price goes up, Short = profit when price goes down</li>
    <li>In futures, you can make money in BOTH bull and bear markets</li>
    <li>Go long in uptrends, go short in downtrends</li>
    <li>Always use stop losses regardless of direction</li>
  </ul>
</div>
            `
          },
          {
            title: "Liquidation",
            content: `
<p><strong>Liquidation</strong> occurs when the market moves against your position to the point where your margin (collateral) is no longer sufficient. The exchange automatically closes your position, and you lose your entire margin.</p>

<h4>Liquidation Price Formula</h4>
<p><strong>Approximate liquidation distance = 100% ÷ Leverage</strong></p>

<div class="diagram-container">
  <div class="diagram-title">Liquidation Distances by Leverage</div>
  <pre>
  Entry Price: $60,000 (Long Position)

  Leverage    Liquidation Price    Distance    Pain Level
  ─────────────────────────────────────────────────────────
   2x         $30,000              -50%        😌 Safe
   5x         $48,000              -20%        😐 Moderate
  10x         $54,000              -10%        😰 Risky
  20x         $57,000               -5%        😱 Dangerous
  50x         $58,800               -2%        💀 Extremely risky
  100x        $59,400               -1%        ☠️  Gambling
  ─────────────────────────────────────────────────────────

  With 100x leverage on BTC:
  A $600 move against you (just 1%) = COMPLETE LIQUIDATION
  That can happen in SECONDS during volatile markets.
  </pre>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ The Hidden Cost of Liquidation</div>
  <p>When you get liquidated, you don't just lose your margin. There's also a <strong>liquidation fee</strong> (typically 0.5-1.5% of position size) that the exchange charges. This means your actual loss can be even more than your margin. Additionally, liquidation often happens at the worst possible moment — right before the market reverses.</p>
</div>

<div class="tip-box">
  <div class="tip-label">✅ How to Avoid Liquidation</div>
  <ul>
    <li>Use <strong>low leverage</strong> (2-5x maximum)</li>
    <li>Always set a <strong>stop loss</strong> BEFORE the liquidation price</li>
    <li>Use <strong>isolated margin</strong> (not cross margin) to limit losses to one position</li>
    <li>Never add more margin to a losing position (don't "average down" in futures)</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Liquidation = exchange forcefully closes your position at a loss</li>
    <li>Higher leverage = closer liquidation price = higher risk</li>
    <li>Use stop losses that trigger BEFORE your liquidation price</li>
    <li>Use isolated margin to protect other positions</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 12 ----
      {
        id: 12,
        title: "Strategy Building",
        icon: "🏗️",
        description: "Build your own trading plan with a clear entry model, and learn how to backtest your strategy.",
        topics: [
          {
            title: "Build Your Own Trading Plan",
            content: `
<p>A <strong>trading plan</strong> is a comprehensive set of rules that governs every trading decision you make. Without a plan, you're gambling. With a plan, you're running a business. Every professional trader follows a documented trading plan.</p>

<div class="diagram-container">
  <div class="diagram-title">Trading Plan Template</div>
  <pre>
  ╔═══════════════════════════════════════════════════════════╗
  ║                    MY TRADING PLAN                        ║
  ╠═══════════════════════════════════════════════════════════╣
  ║                                                           ║
  ║  📊 MARKET & PAIR                                         ║
  ║  • I trade: BTC/USDT, ETH/USDT                           ║
  ║  • On: Binance Futures                                    ║
  ║                                                           ║
  ║  ⏰ TIMEFRAME                                              ║
  ║  • Analysis: Daily + 4H (trend)                           ║
  ║  • Entry: 1H + 15m (precision)                            ║
  ║                                                           ║
  ║  📐 STRATEGY                                               ║
  ║  • SMC + Liquidity + Market Structure                     ║
  ║  • Entry: OB/FVG retest after BOS                         ║
  ║                                                           ║
  ║  🛡️ RISK MANAGEMENT                                       ║
  ║  • Risk per trade: 1-2% of account                        ║
  ║  • Max daily loss: 5%                                     ║
  ║  • Max open trades: 2-3                                   ║
  ║  • Leverage: Max 5x                                       ║
  ║                                                           ║
  ║  🎯 ENTRY RULES (ALL must be true)                         ║
  ║  • ✅ Daily trend identified (bullish/bearish)             ║
  ║  • ✅ BOS confirmed on 4H                                  ║
  ║  • ✅ OB or FVG identified for entry                       ║
  ║  • ✅ Liquidity swept before entry                         ║
  ║  • ✅ R:R minimum 1:2                                      ║
  ║                                                           ║
  ║  🚪 EXIT RULES                                             ║
  ║  • SL: Below/above Order Block                            ║
  ║  • TP1: 1:1 R:R (close 30%)                               ║
  ║  • TP2: 1:2 R:R (close 40%)                               ║
  ║  • TP3: 1:3 R:R (close 30%)                               ║
  ║  • Move SL to breakeven after TP1                         ║
  ║                                                           ║
  ║  🧠 PSYCHOLOGY RULES                                       ║
  ║  • Max 3 trades per day                                   ║
  ║  • Stop after 2 consecutive losses                        ║
  ║  • Journal every trade                                    ║
  ║  • No trading when emotional                              ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Write your trading plan BEFORE you start trading live</li>
    <li>Include: what you trade, when, how, risk rules, entry rules, exit rules</li>
    <li>Follow the plan religiously — deviate and you're gambling</li>
    <li>Review and improve your plan monthly based on results</li>
  </ul>
</div>
            `
          },
          {
            title: "Entry Model",
            content: `
<p>An <strong>entry model</strong> is a specific, repeatable setup that defines exactly when and where you enter a trade. Having a consistent entry model removes guesswork and emotions.</p>

<h4>SMC Entry Model (Recommended)</h4>
<div class="diagram-container">
  <div class="diagram-title">Smart Money Entry Model – Step by Step</div>
  <pre>
  Step 1: Identify         Step 2: Wait for        Step 3: Find          Step 4: Enter
  HTF Trend               Liquidity Sweep         BOS + OB/FVG          at OB/FVG Retest

  Daily Chart:            4H Chart:               1H Chart:             15m Chart:
  ┌─────────┐             ┌─────────┐             ┌─────────┐          ┌─────────┐
  │  Bullish │             │  Sweep  │             │  BOS ✅  │          │  ENTRY  │
  │  Trend   │ ────────▶  │  below  │ ────────▶  │  confirmed│ ────────▶│  at OB  │
  │  (HH/HL) │             │  swing  │             │  + OB    │          │  retest │
  │          │             │  low    │             │  found   │          │ SL below│
  └─────────┘             └─────────┘             └─────────┘          └─────────┘

  CHECKLIST before entry:
  ☑ HTF trend is clear (Daily)
  ☑ Liquidity has been swept (4H)
  ☑ BOS confirmed in your direction (1H)
  ☑ Order Block or FVG identified (1H/15m)
  ☑ Price returns to OB/FVG (entry trigger)
  ☑ R:R is minimum 1:2
  ☑ Stop loss placed below OB
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Complete Trade Example Using Entry Model</div>
  <ol>
    <li><strong>Daily Chart:</strong> BTC is in an uptrend (HH/HL). Bias = BULLISH</li>
    <li><strong>4H Chart:</strong> Price sweeps below the previous swing low at $58,000 (liquidity sweep)</li>
    <li><strong>1H Chart:</strong> After the sweep, price creates a bullish BOS (breaks above a previous lower high)</li>
    <li><strong>1H Chart:</strong> Identify a bullish Order Block at $59,000-$59,300</li>
    <li><strong>15m Chart:</strong> Price retraces to the OB at $59,100. Place BUY order</li>
    <li><strong>Stop Loss:</strong> $58,600 (below the Order Block)</li>
    <li><strong>Take Profit:</strong> $61,100 (1:4 R:R — $500 risk for $2,000 reward)</li>
    <li><strong>Result:</strong> Price bounces from OB and hits TP → <strong>+4R profit</strong> ✅</li>
  </ol>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Top-Down: Daily (trend) → 4H (liquidity/structure) → 1H (entry zone) → 15m (precision entry)</li>
    <li>All confluence must align: trend + liquidity sweep + BOS + OB/FVG</li>
    <li>If ANY condition is missing, don't take the trade</li>
    <li>Consistency > creativity — stick to ONE entry model</li>
  </ul>
</div>
            `
          },
          {
            title: "Backtesting Basics",
            content: `
<p><strong>Backtesting</strong> is the process of testing your trading strategy on <strong>historical data</strong> to see if it would have been profitable. Before risking real money, you look at past charts and mark where your strategy would have entered and exited, then calculate the results.</p>

<h4>How to Backtest</h4>
<ol>
  <li>Pick a pair (e.g., BTC/USDT) and timeframe (e.g., 1H)</li>
  <li>Go back 3-6 months on TradingView</li>
  <li>Scroll through the chart candle by candle</li>
  <li>Every time your entry model's conditions are met, mark the trade</li>
  <li>Record: entry, SL, TP, result (win/loss), R:R</li>
  <li>Aim for at least 50-100 trade samples</li>
</ol>

<div class="diagram-container">
  <div class="diagram-title">Backtesting Journal Template</div>
  <pre>
  ┌─────┬──────────┬───────┬────────┬────────┬───────┬────────┬──────────┐
  │Trade│  Date    │ Pair  │ Entry  │  SL    │  TP   │ Result │  R:R     │
  ├─────┼──────────┼───────┼────────┼────────┼───────┼────────┼──────────┤
  │  1  │ Jan 15   │BTC/USD│ 60,200 │ 59,500 │62,300 │  WIN   │  1:3 ✅  │
  │  2  │ Jan 18   │BTC/USD│ 61,800 │ 61,200 │63,600 │  WIN   │  1:3 ✅  │
  │  3  │ Jan 22   │BTC/USD│ 58,500 │ 58,000 │60,000 │  LOSS  │  1:3 ❌  │
  │  4  │ Jan 25   │ETH/USD│  3,200 │  3,100 │ 3,500 │  WIN   │  1:3 ✅  │
  │  5  │ Jan 28   │BTC/USD│ 62,000 │ 61,300 │64,100 │  WIN   │  1:3 ✅  │
  ├─────┴──────────┴───────┴────────┴────────┴───────┴────────┴──────────┤
  │  RESULTS: 4W/1L = 80% Win Rate | Average R:R = 1:3                  │
  │  Expectancy: (0.8 × 3) - (0.2 × 1) = 2.2R per trade 🚀             │
  └──────────────────────────────────────────────────────────────────────┘
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Backtesting Rules</div>
  <ul>
    <li>Be <strong>honest</strong> — don't cherry-pick winning trades</li>
    <li>Test at least <strong>50-100 trades</strong> for statistical significance</li>
    <li>If win rate < 40% with 1:2+ R:R, refine your strategy</li>
    <li>After backtesting, forward test on a <strong>demo account</strong> for 1-2 months</li>
    <li>Only go live after proving profitability in both back and forward testing</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Backtesting validates your strategy before risking real money</li>
    <li>Test 50-100+ trades on historical data</li>
    <li>Track win rate, average R:R, and expectancy</li>
    <li>Backtest → Demo test → Small live → Scale up</li>
  </ul>
</div>
            `
          }
        ]
      }
    ]
  },

  // =========================================
  // WEEK 4 – PRO LEVEL (Professional Concepts)
  // =========================================
  {
    week: 4,
    weekTitle: "Pro Level – Professional & Institutional",
    weekColor: "#f85149",
    classes: [
      // ---- CLASS 13 ----
      {
        id: 13,
        title: "Advanced Market Psychology",
        icon: "🧠",
        description: "Understand how Smart Money manipulates retail traders through Wyckoff's Accumulation and Distribution phases.",
        topics: [
          {
            title: "Retail vs Smart Money",
            content: `
<p><strong>Retail traders</strong> are individual traders like you and me, trading with relatively small capital. <strong>Smart Money</strong> refers to institutional players — hedge funds, banks, market makers — who move billions of dollars and essentially control market direction.</p>
<p>The fundamental truth of trading: <strong>Smart Money profits from retail traders' losses.</strong> They create patterns that trick retail into buying at highs and selling at lows.</p>

<div class="diagram-container">
  <div class="diagram-title">Retail vs Smart Money Behavior</div>
  <pre>
  ┌────────────────────────┬────────────────────────────────┐
  │     RETAIL TRADERS     │        SMART MONEY             │
  │     (90% lose)         │        (consistently profit)   │
  ├────────────────────────┼────────────────────────────────┤
  │                        │                                │
  │ Buy at resistance      │ Sell at resistance             │
  │ (after price pumps)    │ (distribute to retail)         │
  │                        │                                │
  │ Sell at support        │ Buy at support                 │
  │ (panic after drop)     │ (accumulate from scared retail)│
  │                        │                                │
  │ Chase FOMO pumps       │ Create FOMO pumps to sell into │
  │                        │                                │
  │ Place stops at obvious │ Hunt those obvious stops       │
  │ levels                 │ for liquidity                  │
  │                        │                                │
  │ Use indicators blindly │ Manipulate indicators          │
  │                        │                                │
  │ Trade emotionally      │ Trade with a systematic plan    │
  │                        │                                │
  │ Overleveraged          │ Properly sized positions       │
  │                        │                                │
  └────────────────────────┴────────────────────────────────┘

  To win: THINK like Smart Money, not like retail.
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Example of Smart Money Manipulation</div>
  <p>BTC pumps from $60,000 to $68,000. Retail sees the pump and FOMO buys at $68,000. Crypto Twitter is euphoric: "BTC to $100K!" Smart Money has been selling to retail the entire way up. Once enough retail has bought, Smart Money stops buying and price drops to $58,000. Retail panics and sells at a loss. Smart Money buys again at $58,000 with the liquidity from retail's stop losses. Cycle repeats.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Smart Money needs retail liquidity to fill large orders</li>
    <li>They create traps: fake breakouts, FOMO pumps, stop hunts</li>
    <li>To be profitable, you must think like Smart Money</li>
    <li>Ask: "Where are retail traders placing their stops?" — and avoid those levels</li>
  </ul>
</div>
            `
          },
          {
            title: "Manipulation Phases",
            content: `
<p>Markets move in predictable manipulation cycles. Smart Money doesn't just randomly buy and sell – they follow a systematic process to accumulate positions, mark up price, distribute to retail, and then push price down.</p>

<div class="diagram-container">
  <div class="diagram-title">The 4 Phases of Market Manipulation</div>
  <pre>
  Price
    │
    │                                        ╱╲  ← Distribution
    │                                      ╱    ╲   (SM sells to retail)
    │                            MARK UP ╱       ╲╲╲╲╲
    │                                  ╱          ╲╲╲╲ Range
    │                                ╱            ╲╲╲╲╲╲
    │                              ╱                    ╲
    │                            ╱                       ╲
    │                          ╱                     MARK DOWN
    │                        ╱                            ╲
    │  ╱╲╱╲╱╲╱╲╱╲         ╱                               ╲
    │  Accumulation      ╱                                  ╲
    │  (SM buying)     ╱                                     ╲╱╲╱╲╱╲
    │  ╲╱╲╱╲╱╲╱╲    ╱                                      Accumulation
    │              ╱                                        (new cycle)
    │            ╱
    └──────────────────────────────────────────────────────── Time

    Phase 1: ACCUMULATION → SM quietly buys (price moves sideways)
    Phase 2: MARK UP → SM pushes price up (trend phase)
    Phase 3: DISTRIBUTION → SM sells to retail at the top
    Phase 4: MARK DOWN → Price drops as SM exits (retail panics)
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Real Example</div>
  <ul>
    <li><strong>Accumulation (2022-2023):</strong> BTC ranged between $15,000-$30,000 for months. Retail was scared and selling. Smart Money was buying.</li>
    <li><strong>Mark Up (Q4 2023 - Q1 2024):</strong> BTC pumped from $25,000 to $73,000. Smart Money was pushing price up.</li>
    <li><strong>Distribution (near ATH):</strong> At $60,000-$73,000, Smart Money started selling to euphoric retail buyers.</li>
    <li><strong>Mark Down:</strong> Price corrected, trapping retail who bought the top.</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Markets cycle through Accumulation → Mark Up → Distribution → Mark Down</li>
    <li>Buy during Accumulation, sell during Distribution</li>
    <li>The "boring" sideways phases are where the real money is made</li>
    <li>Recognize which phase the market is in to time your entries/exits</li>
  </ul>
</div>
            `
          },
          {
            title: "Accumulation / Distribution (Wyckoff)",
            content: `
<p>The <strong>Wyckoff Method</strong> is a 100-year-old framework that explains how institutional investors manipulate markets. Richard Wyckoff identified that markets move in <strong>Accumulation</strong> (buying) and <strong>Distribution</strong> (selling) phases, each with specific events.</p>

<div class="diagram-container">
  <div class="diagram-title">Wyckoff Accumulation Schematic</div>
  <div class="chart-image-wrapper">
    <img src="images/wyckoff_accumulation.png" alt="Wyckoff Accumulation schematic showing PS, SC, AR, ST, Spring, SOS, LPS phases on candlestick chart">
    <div class="image-caption">📊 Click to zoom — Wyckoff Accumulation: PS → SC → AR → ST → Spring → SOS → Markup</div>
  </div>
  <pre>
  Price
    │
    │  PS  SC    AR        ST    Spring    SOS     LPS    BU
    │  │   │     │         │      │        │       │      │
    │  ╲   ╲    ╱╲        ╱╲     │       ╱╲╱╲    │    ╱╲╱╲╱
    │   ╲   ╲  ╱  ╲      ╱  ╲    │     ╱╱   ╲╲   │   ╱╱  MARKUP
    │    ╲   ╲╱    ╲    ╱    ╲   │   ╱╱       ╲  │  ╱╱   begins
    │─────╲──╱──────╲──╱──────╲──│─╱╱──────────╲─│╱╱────────
    │      ╲╱        ╲╱        ╲╱╱              ╲╱╱
    │                           ╲╱ ← SPRING (fake breakdown)
    │                              (SM grabs final liquidity)
    │
    └──────────────────────────────────────────────── Time

    PS = Preliminary Support       SC = Selling Climax
    AR = Automatic Rally           ST = Secondary Test
    Spring = Fake breakdown (liquidity grab)
    SOS = Sign of Strength         LPS = Last Point of Support
    BU = Back-Up (retest before markup)
  </pre>
</div>

<div class="diagram-container">
  <div class="diagram-title">Wyckoff Distribution Schematic</div>
  <pre>
  Price
    │
    │  PSY  BC    AR        ST   UTAD      LPSY   
    │  │    │     │         │     │         │      
    │  ╱╲  ╱╲    ╲         ╱╲   ╱╲╲        │      
    │ ╱  ╲╱   ╲   ╲       ╱  ╲ ╱  ╲╲╲      │      
    │╱─────────╲───╲─────╱────╲╱─────╲╲────│──────
    │           ╲   ╲   ╱            ╲╲╲   │
    │            ╲   ╲ ╱               ╲╲╲ │
    │             ╲   ╲╱                ╲╲╲╱
    │              ╲                     ╲╲╲  MARKDOWN
    │               ╲                      ╲╲  begins
    │                                        ╲╲
    │
    └──────────────────────────────────────────── Time

    PSY = Preliminary Supply      BC = Buying Climax
    UTAD = Upthrust After Distribution (fake breakout!)
    LPSY = Last Point of Supply (final chance to sell)
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ How to Apply Wyckoff</div>
  <ul>
    <li>Look for the <strong>Spring</strong> (accumulation) or <strong>UTAD</strong> (distribution) — these are the best entry points</li>
    <li>The Spring is a fake breakdown below support — if it reverses quickly, buy</li>
    <li>The UTAD is a fake breakout above resistance — if it reverses quickly, sell/short</li>
    <li>Combine Wyckoff with SMC concepts (order blocks, FVGs) for precision</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Wyckoff's method explains how institutional money moves markets</li>
    <li>Accumulation: sideways range → SM buys quietly → markup (price goes up)</li>
    <li>Distribution: sideways range → SM sells quietly → markdown (price goes down)</li>
    <li>Spring & UTAD are the highest-probability entry signals</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 14 ----
      {
        id: 14,
        title: "Higher Timeframe Analysis",
        icon: "🔭",
        description: "Master Top-Down Analysis and Premium/Discount zones for institutional-grade market analysis.",
        topics: [
          {
            title: "Top-Down Analysis",
            content: `
<p><strong>Top-Down Analysis</strong> means starting from the <strong>highest timeframe</strong> (Monthly/Weekly) and working down to lower timeframes (Daily → 4H → 1H → 15m). This ensures you trade in alignment with the larger trend, dramatically increasing your win rate.</p>

<div class="diagram-container">
  <div class="diagram-title">Top-Down Analysis Framework</div>
  <pre>
  ┌─────────────────────────────────┐
  │  WEEKLY / MONTHLY               │  → BIG PICTURE
  │  What is the overall trend?     │     Market direction
  │  Key S/R levels?                │     Major liquidity pools
  └─────────┬───────────────────────┘
            │
  ┌─────────▼───────────────────────┐
  │  DAILY                          │  → DIRECTIONAL BIAS
  │  Confirm trend from weekly      │     Is it bullish or bearish?
  │  Identify recent structure      │     Where are OBs/FVGs?
  └─────────┬───────────────────────┘
            │
  ┌─────────▼───────────────────────┐
  │  4H                             │  → TRADING SETUP
  │  Look for BOS / CHoCH           │     Identify entry zones
  │  Find Order Blocks              │     Wait for liquidity sweep
  └─────────┬───────────────────────┘
            │
  ┌─────────▼───────────────────────┐
  │  1H / 15M                       │  → PRECISION ENTRY
  │  Refine exact entry point       │     Place SL and TP
  │  Confirm with lower TF BOS      │     Execute the trade
  └─────────────────────────────────┘
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Top-Down Analysis Example</div>
  <ol>
    <li><strong>Weekly:</strong> BTC is in a strong uptrend, currently pulling back from $73,000. Major support at $52,000.</li>
    <li><strong>Daily:</strong> Price is creating higher lows. Current pullback finding support at $58,000 (daily OB zone). Bias: Bullish.</li>
    <li><strong>4H:</strong> Sell-side liquidity just got swept at $57,500. Bullish BOS confirmed on 4H. OB at $58,200-$58,800.</li>
    <li><strong>1H:</strong> Price retracing to 4H OB. Watch for 1H BOS inside the OB for entry.</li>
    <li><strong>15m:</strong> Bullish engulfing at $58,500 inside the OB. ENTER LONG. SL: $57,800. TP: $62,000.</li>
  </ol>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Always start from the highest timeframe and work down</li>
    <li>Weekly/Daily = trend direction. 4H = setup. 1H/15m = entry</li>
    <li>Never take a trade on low TF that contradicts the higher TF trend</li>
    <li>Patience: wait for all timeframes to align before entering</li>
  </ul>
</div>
            `
          },
          {
            title: "Premium & Discount Zones",
            content: `
<p>The <strong>Premium and Discount</strong> model divides a price range into two zones using the 50% level (equilibrium). In an uptrend, you want to <strong>buy in the discount zone</strong> (below 50%) and sell in the premium zone (above 50%). This ensures you're buying low and selling high.</p>

<div class="diagram-container">
  <div class="diagram-title">Premium & Discount Zones</div>
  <div class="chart-image-wrapper">
    <img src="images/premium_discount.png" alt="Premium and Discount zones on candlestick chart with 50% equilibrium line">
    <div class="image-caption">📊 Click to zoom — Buy in Discount (below 50%), Sell in Premium (above 50%)</div>
  </div>
  <pre>
  Price
    │
    │  ── Swing High ───────────── $65,000 ──────────────
    │  │                                                 │
    │  │     PREMIUM ZONE (Expensive)                    │
    │  │     ❌ Don't BUY here                            │
    │  │     ✅ Look to SELL here                         │
    │  │                                                 │
    │  │─── 75% Level ────────────── $63,750 ──          │
    │  │                                                 │
    │  ├═══ 50% (Equilibrium) ══════ $62,500 ══          │ Price Range
    │  │                                                 │
    │  │─── 25% Level ────────────── $61,250 ──          │
    │  │                                                 │
    │  │     DISCOUNT ZONE (Cheap)                       │
    │  │     ✅ BUY here (in uptrend)                     │
    │  │     ❌ Don't SELL here                            │
    │  │                                                 │
    │  ── Swing Low ────────────── $60,000 ──────────────
    │
    └──────────────────────────────────────────── Time

    Calculate: Equilibrium = (High + Low) ÷ 2
    $65,000 + $60,000 = $125,000 ÷ 2 = $62,500 (50%)
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Practical Application</div>
  <p>BTC swings between $58,000 (low) and $66,000 (high). Equilibrium = $62,000.</p>
  <ul>
    <li><strong>In an uptrend:</strong> Only look for LONG entries below $62,000 (discount). Best entries at 25% level ($60,000) or lower. Target: premium zone ($64,000+).</li>
    <li><strong>In a downtrend:</strong> Only look for SHORT entries above $62,000 (premium). Best entries at 75% level ($64,000) or higher. Target: discount zone ($60,000 or lower).</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Buy in discount zones (below 50%), sell in premium zones (above 50%)</li>
    <li>This ensures optimal entry pricing and better R:R</li>
    <li>Combine with OB/FVG zones within discount/premium for precision</li>
    <li>In uptrend: buy discount. In downtrend: sell premium.</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 15 ----
      {
        id: 15,
        title: "On-Chain & Fundamental Analysis",
        icon: "🌐",
        description: "Understand what actually drives crypto prices: fundamentals, ETF flows, Bitcoin halving, and news events.",
        topics: [
          {
            title: "What Moves the Market?",
            content: `
<p>While technical analysis tells you WHERE price might go, <strong>fundamental analysis</strong> tells you WHY. Understanding the macro drivers of crypto helps you position yourself ahead of major moves.</p>

<h4>Key Market Movers</h4>
<table class="comparison-table">
  <tr><th>Category</th><th>Factor</th><th>Impact</th></tr>
  <tr><td><strong>Macro</strong></td><td>Fed Interest Rate Decisions</td><td>Rate cuts = bullish, Rate hikes = bearish</td></tr>
  <tr><td><strong>Macro</strong></td><td>US Dollar Strength (DXY)</td><td>Weak dollar = bullish for crypto</td></tr>
  <tr><td><strong>Institutional</strong></td><td>ETF Inflows/Outflows</td><td>Inflows = massive buying pressure</td></tr>
  <tr><td><strong>On-Chain</strong></td><td>Exchange Reserves</td><td>Decreasing = bullish (people holding)</td></tr>
  <tr><td><strong>On-Chain</strong></td><td>Whale Movements</td><td>Large deposits to exchanges = sell signal</td></tr>
  <tr><td><strong>Events</strong></td><td>Bitcoin Halving</td><td>Historically very bullish (every 4 years)</td></tr>
  <tr><td><strong>News</strong></td><td>Regulations</td><td>Positive regulation = bullish, Bans = bearish</td></tr>
  <tr><td><strong>Sentiment</strong></td><td>Fear & Greed Index</td><td>Extreme Fear = buy, Extreme Greed = sell</td></tr>
</table>

<div class="tip-box">
  <div class="tip-label">✅ Pro Tip</div>
  <p>Use fundamental analysis to determine your <strong>long-term bias</strong> (are we in a bull or bear market?), and technical analysis for your <strong>entries and exits</strong>. The best traders combine both.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Macro events (Fed, inflation, DXY) drive the overall crypto trend</li>
    <li>On-chain data (exchange reserves, whale activity) shows real behavior</li>
    <li>Use fundamentals for direction, technicals for timing</li>
    <li>The Fear & Greed Index is a powerful contrarian indicator</li>
  </ul>
</div>
            `
          },
          {
            title: "ETF Impact (BlackRock ETF Influence)",
            content: `
<p>A <strong>Bitcoin ETF (Exchange-Traded Fund)</strong> allows traditional investors to gain exposure to Bitcoin through their regular brokerage accounts — without owning actual BTC. The approval of <strong>Spot Bitcoin ETFs</strong> in January 2024 was one of the most significant events in crypto history.</p>

<h4>Why ETFs Matter</h4>
<ul>
  <li><strong>BlackRock's iShares Bitcoin Trust (IBIT)</strong> alone has attracted $20+ billion in assets</li>
  <li>ETFs create <strong>constant buying pressure</strong> — they must buy actual BTC when investors deposit money</li>
  <li>Opens crypto to <strong>pension funds, retirement accounts, and institutional capital</strong></li>
  <li>Adds <strong>legitimacy</strong> to Bitcoin as an asset class</li>
</ul>

<div class="diagram-container">
  <div class="diagram-title">How ETF Inflows Affect BTC Price</div>
  <pre>
  Traditional               Bitcoin               Bitcoin
  Investor                  ETF                   Market
  ┌──────────┐            ┌──────────┐          ┌──────────┐
  │ Buys ETF │───$1M────▶│ BlackRock│───buys──▶│ BTC price│
  │ shares   │            │ IBIT     │  actual  │ goes UP  │
  │ through  │            │          │  BTC     │  ↑↑↑     │
  │ broker   │            │ Must buy │          │          │
  └──────────┘            │ real BTC │          └──────────┘
                          └──────────┘

  Daily ETF inflows of $200M-$500M = massive buy pressure
  This is why BTC rose from $40K to $73K after ETF approval!
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 How to Track ETF Impact</div>
  <ul>
    <li>Monitor daily <strong>ETF inflows/outflows</strong> (available on sites like SoSoValue, BitcoinTreasuries)</li>
    <li><strong>Large inflows</strong> (>$500M/day) = very bullish for BTC short-term</li>
    <li><strong>Large outflows</strong> (>$200M/day) = bearish pressure</li>
    <li>ETF flow data is released <strong>daily after market close</strong> — use it for next-day bias</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Bitcoin ETFs create direct buy/sell pressure on BTC spot market</li>
    <li>BlackRock's IBIT is the largest Bitcoin ETF and a major price driver</li>
    <li>Track daily ETF flows for short-term directional bias</li>
    <li>ETF approval opened Bitcoin to trillions in institutional capital</li>
  </ul>
</div>
            `
          },
          {
            title: "Bitcoin Halving",
            content: `
<p>The <strong>Bitcoin Halving</strong> is an event that occurs approximately every <strong>4 years (every 210,000 blocks)</strong>. It cuts the mining reward in half, effectively reducing the rate at which new BTC enters circulation. This creates a <strong>supply shock</strong> that has historically led to massive price increases.</p>

<div class="diagram-container">
  <div class="diagram-title">Bitcoin Halving History & Price Impact</div>
  <div class="chart-image-wrapper">
    <img src="images/bitcoin_halving.png" alt="Bitcoin price history with halving events marked showing bull runs after each halving">
    <div class="image-caption">📊 Click to zoom — BTC price after each halving: 2012 ($12→$1.1K), 2016 ($650→$20K), 2020 ($8.5K→$69K)</div>
  </div>
  <pre>
  Halving     Block Reward      BTC Price        Price 18 Months
  Event       After Halving     At Halving       After Halving
  ─────────────────────────────────────────────────────────────
  2012        25 BTC            $12              $1,100  (+9,000%)
  2016        12.5 BTC          $650             $20,000 (+3,000%)
  2020        6.25 BTC          $8,500           $69,000 (+700%)
  2024        3.125 BTC         $64,000          ???     (TBD)
  ─────────────────────────────────────────────────────────────

  Pattern: Every halving → reduced supply → increased scarcity 
           → price increase over the next 12-18 months

  Supply Reduction:
  Before 2024: 900 BTC mined per day
  After 2024:  450 BTC mined per day (50% less daily supply!)
  </pre>
</div>

<div class="diagram-container">
  <div class="diagram-title">Bitcoin's Supply Curve</div>
  <pre>
  BTC Supply
  (millions)
  21M │─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ MAX SUPPLY
      │                                    ╱────────────
  18M │                              ╱─────╱
      │                         ╱───╱
  15M │                    ╱───╱
      │               ╱──╱
  12M │          ╱───╱
      │     ╱──╱
   9M │ ╱──╱
      │╱
   0M │
      └──────────────────────────────────────────────────
      2009  2012  2016  2020  2024  2028  2032  ...  2140

      Supply growth SLOWS with each halving
      Last BTC will be mined around year 2140
  </pre>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Halving cuts miner rewards by 50% every ~4 years</li>
    <li>Historically, bull markets start 6-18 months after each halving</li>
    <li>Each halving creates a supply shock (less new BTC entering the market)</li>
    <li>The next halving (~2028) will reduce block reward to 1.5625 BTC</li>
  </ul>
</div>
            `
          },
          {
            title: "News Trading",
            content: `
<p><strong>News trading</strong> involves making trading decisions based on major news events that can cause significant price movements. In crypto, news can create <strong>extreme volatility</strong> in seconds.</p>

<h4>Major News Events to Watch</h4>
<table class="comparison-table">
  <tr><th>Event Type</th><th>Examples</th><th>Typical Impact</th></tr>
  <tr><td><strong>Regulatory</strong></td><td>SEC decisions, country-level bans/approvals</td><td>Very High</td></tr>
  <tr><td><strong>Macroeconomic</strong></td><td>CPI data, Fed rate decisions, Jobs report</td><td>High</td></tr>
  <tr><td><strong>Institutional</strong></td><td>ETF approvals, corporate BTC purchases</td><td>Very High</td></tr>
  <tr><td><strong>Technical</strong></td><td>Network upgrades, hard forks</td><td>Moderate</td></tr>
  <tr><td><strong>Security</strong></td><td>Exchange hacks, DeFi exploits</td><td>High (bearish)</td></tr>
</table>

<div class="warning-box">
  <div class="warning-label">⚠️ "Buy the Rumor, Sell the News"</div>
  <p>One of the most important rules in trading: price often rises <strong>before</strong> a positive news event (as the market "prices in" the expectation) and then <strong>drops when the news actually hits</strong>. The announcement itself has already been absorbed. So smart traders buy BEFORE the event and sell when it happens.</p>
</div>

<div class="example-box">
  <div class="example-label">💡 Example: Buy the Rumor, Sell the News</div>
  <ul>
    <li>Rumors of Bitcoin Spot ETF approval start circulating in late 2023</li>
    <li>BTC rises from $25,000 to $48,000 on the <strong>rumor</strong></li>
    <li>ETF officially approved January 10, 2024</li>
    <li>BTC actually <strong>drops to $38,000</strong> after the news (sell the news!)</li>
    <li>Eventually resumes uptrend as actual ETF buying kicks in</li>
  </ul>
</div>

<div class="tip-box">
  <div class="tip-label">✅ News Trading Tips</div>
  <ul>
    <li>Reduce position size or close trades before major news events</li>
    <li>Don't trade the first 5-10 minutes after news — volatility is extreme and unpredictable</li>
    <li>Wait for the initial spike to settle, then trade the direction</li>
    <li>Use economic calendars (CoinMarketCal, Forex Factory) to track events</li>
  </ul>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>"Buy the rumor, sell the news" — price often drops after anticipated good news</li>
    <li>Don't trade immediately after news — wait for volatility to calm</li>
    <li>Use economic calendars to track upcoming events</li>
    <li>Reduce leverage and position size during high-impact news</li>
  </ul>
</div>
            `
          }
        ]
      },

      // ---- CLASS 16 ----
      {
        id: 16,
        title: "Becoming a Pro Trader",
        icon: "🏆",
        description: "The final class: portfolio management, investment strategies, building income from crypto, and your next steps.",
        topics: [
          {
            title: "Portfolio Management",
            content: `
<p><strong>Portfolio management</strong> is how you allocate your crypto investments across different assets to balance risk and reward. A well-diversified portfolio protects you from single-asset crashes while maximizing growth potential.</p>

<div class="diagram-container">
  <div class="diagram-title">Recommended Portfolio Allocation</div>
  <pre>
  ┌────────────────────────────────────────────────────────┐
  │            PORTFOLIO ALLOCATION MODELS                  │
  ├────────────────────────────────────────────────────────┤
  │                                                        │
  │  CONSERVATIVE (Low Risk)         AGGRESSIVE (High Risk)│
  │                                                        │
  │  ██████████████████ 50% BTC      ████████████ 30% BTC  │
  │  ████████████ 30% ETH            ████████ 20% ETH      │
  │  ██████ 15% Top 10 Alts          ██████████ 25% Alts   │
  │  ██ 5% Stablecoins (USDT)       ████████ 20% Small Cap │
  │                                  ██ 5% Memecoins       │
  │                                                        │
  │  Best for: Beginners,            Best for: Experienced │
  │  long-term investors             traders, risk-tolerant│
  │                                                        │
  ├────────────────────────────────────────────────────────┤
  │                                                        │
  │  BALANCED (Moderate Risk) - RECOMMENDED                │
  │                                                        │
  │  ██████████████ 40% BTC (King, safest bet)             │
  │  ████████ 25% ETH (Strong #2, smart contracts)        │
  │  ████████ 20% Top Alts (SOL, LINK, etc.)              │
  │  ████ 10% High-conviction small caps                   │
  │  ██ 5% Cash/Stablecoins (for buying dips)              │
  │                                                        │
  └────────────────────────────────────────────────────────┘
  </pre>
</div>

<h4>Portfolio Management Rules</h4>
<ul>
  <li><strong>Rebalance quarterly:</strong> If one asset grows to dominate your portfolio, take profits and redistribute</li>
  <li><strong>Never go all-in:</strong> Keep 5-10% in stablecoins (USDT/USDC) to buy dips</li>
  <li><strong>DCA (Dollar Cost Averaging):</strong> Invest a fixed amount weekly/monthly regardless of price</li>
  <li><strong>Take profits:</strong> When an asset does 2x-3x, sell 20-30% to lock in gains</li>
</ul>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Diversify across BTC (40%), ETH (25%), top alts (20%), small caps (10%), cash (5%)</li>
    <li>DCA weekly/monthly to avoid timing mistakes</li>
    <li>Rebalance every quarter and take profits on 2-3x gains</li>
    <li>Always keep dry powder (stablecoins) for opportunities</li>
  </ul>
</div>
            `
          },
          {
            title: "Long-Term vs Short-Term Investing",
            content: `
<p>Choosing between long-term investing (HODLing) and short-term trading depends on your goals, risk tolerance, and available time. Both can be profitable — but they require very different approaches.</p>

<table class="comparison-table">
  <tr><th>Aspect</th><th>Long-Term (HODLing)</th><th>Short-Term (Trading)</th></tr>
  <tr><td><strong>Time Horizon</strong></td><td>Months to Years</td><td>Minutes to Weeks</td></tr>
  <tr><td><strong>Time Required</strong></td><td>30 min/week</td><td>2-8 hours/day</td></tr>
  <tr><td><strong>Stress Level</strong></td><td>Low 😌</td><td>High 😰</td></tr>
  <tr><td><strong>Strategy</strong></td><td>Buy & Hold, DCA</td><td>Technical Analysis, SMC</td></tr>
  <tr><td><strong>Best For</strong></td><td>Patient investors</td><td>Active, experienced traders</td></tr>
  <tr><td><strong>Risk</strong></td><td>Lower (if diversified)</td><td>Higher (leverage, frequent trades)</td></tr>
  <tr><td><strong>Historical Performance</strong></td><td>BTC holders up 300%+ over any 4-year period</td><td>90% of day traders lose money</td></tr>
</table>

<div class="tip-box">
  <div class="tip-label">✅ Recommended Approach</div>
  <p>Use <strong>both strategies simultaneously</strong>. Keep a core long-term portfolio (60-70% of capital) that you DCA into and never trade. Use the remaining 30-40% as your active trading portfolio, applying all the SMC and technical analysis you've learned in this course.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Long-term: Less stress, historically profitable, requires patience</li>
    <li>Short-term: More potential, more risk, requires skill and time</li>
    <li>Best approach: Combine both (core HODL portfolio + active trading account)</li>
    <li>Never trade with money you can't afford to lose</li>
  </ul>
</div>
            `
          },
          {
            title: "Creating Income Plan from Crypto",
            content: `
<p>Once you're consistently profitable, you can create a structured income plan from crypto. Here's how to turn your trading into a reliable income stream.</p>

<div class="diagram-container">
  <div class="diagram-title">Crypto Income Plan</div>
  <pre>
  ╔═══════════════════════════════════════════════════════════╗
  ║              CRYPTO INCOME PLAN                           ║
  ╠═══════════════════════════════════════════════════════════╣
  ║                                                           ║
  ║  📊 INCOME STREAMS                                        ║
  ║                                                           ║
  ║  1. ACTIVE TRADING (Primary)                              ║
  ║     • Spot + Futures trading with SMC strategy            ║
  ║     • Target: 5-15% monthly returns on trading capital    ║
  ║     • Withdraw 50% of profits, compound remaining 50%    ║
  ║                                                           ║
  ║  2. PASSIVE INCOME                                        ║
  ║     • Staking (earn 4-12% APY on holdings)               ║
  ║     • DeFi Yield Farming (higher risk, higher return)     ║
  ║     • Lending (earn interest on stablecoins)              ║
  ║                                                           ║
  ║  3. LONG-TERM APPRECIATION                                ║
  ║     • HODL portfolio growing in value over years          ║
  ║     • DCA into BTC + ETH monthly                          ║
  ║                                                           ║
  ╠═══════════════════════════════════════════════════════════╣
  ║                                                           ║
  ║  💰 PROFIT MANAGEMENT RULE                                ║
  ║                                                           ║
  ║  Monthly profits:                                         ║
  ║  ├── 50% → Withdraw to bank (your salary/income)         ║
  ║  ├── 30% → Reinvest / compound in trading account        ║
  ║  └── 20% → Long-term HODL portfolio (BTC + ETH)          ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
  </pre>
</div>

<div class="example-box">
  <div class="example-label">💡 Realistic Income Example</div>
  <ul>
    <li><strong>Trading Capital:</strong> $5,000</li>
    <li><strong>Monthly return:</strong> 10% (conservative with good strategy)</li>
    <li><strong>Monthly profit:</strong> $500</li>
    <li><strong>Withdraw 50%:</strong> $250 → Bank (income)</li>
    <li><strong>Reinvest 30%:</strong> $150 → Trading account grows</li>
    <li><strong>HODL 20%:</strong> $100 → Long-term portfolio</li>
    <li><strong>After 12 months:</strong> Trading account: ~$8,500 (compounded). Income withdrawn: $3,000+. HODL portfolio: $1,200+</li>
  </ul>
</div>

<div class="warning-box">
  <div class="warning-label">⚠️ Reality Check</div>
  <p>10% monthly returns are achievable but <strong>not guaranteed.</strong> Some months you'll make 20%, others you'll lose 5%. The key is <strong>consistency over time</strong>. Don't quit your job or go full-time until you've been consistently profitable for at least 6-12 months with a proven track record.</p>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Key Takeaways</div>
  <ul>
    <li>Diversify income: trading + staking + long-term holding</li>
    <li>Withdraw 50% of profits, reinvest 30%, HODL 20%</li>
    <li>Start small, compound your gains, scale gradually</li>
    <li>Be consistent for 6-12 months before relying on crypto income</li>
  </ul>
</div>
            `
          },
          {
            title: "Final Live Chart Analysis Session",
            content: `
<p>Let's bring everything together. Here's a <strong>complete analysis workflow</strong> that uses EVERY concept you've learned in this course:</p>

<div class="diagram-container">
  <div class="diagram-title">Complete Analysis Checklist</div>
  <pre>
  ╔═══════════════════════════════════════════════════════════╗
  ║             COMPLETE TRADE ANALYSIS CHECKLIST              ║
  ╠═══════════════════════════════════════════════════════════╣
  ║                                                           ║
  ║  STEP 1: FUNDAMENTALS (5 min)                             ║
  ║  □ Check Fear & Greed Index                               ║
  ║  □ Check ETF daily flows (bullish/bearish?)               ║
  ║  □ Any major news events today?                           ║
  ║  □ DXY (Dollar Index) trending up or down?                ║
  ║                                                           ║
  ║  STEP 2: WEEKLY/DAILY CHART (10 min)                      ║
  ║  □ What's the HTF trend? (HH/HL or LH/LL)                ║
  ║  □ Where are the major S/R levels?                        ║
  ║  □ Where are the liquidity pools? (EQH, EQL)              ║
  ║  □ Are we in Premium or Discount zone?                    ║
  ║  □ Set your BIAS: Bullish or Bearish                      ║
  ║                                                           ║
  ║  STEP 3: 4H CHART (10 min)                                ║
  ║  □ Recent BOS or CHoCH?                                   ║
  ║  □ Was liquidity recently swept?                          ║
  ║  □ Identify Order Blocks in play                          ║
  ║  □ Identify Fair Value Gaps (FVGs)                        ║
  ║                                                           ║
  ║  STEP 4: 1H/15M CHART - ENTRY (10 min)                    ║
  ║  □ Wait for price to reach your OB/FVG zone               ║
  ║  □ Look for LTF BOS confirming your direction             ║
  ║  □ Check RSI for confluence (oversold/overbought)         ║
  ║  □ Check volume (increasing = good)                       ║
  ║                                                           ║
  ║  STEP 5: EXECUTE (5 min)                                   ║
  ║  □ Calculate position size (1-2% risk)                    ║
  ║  □ Set entry order at OB/FVG                              ║
  ║  □ Set stop loss (below OB for long, above for short)     ║
  ║  □ Set TP1 (1:1), TP2 (1:2), TP3 (1:3)                   ║
  ║  □ Confirm R:R ≥ 1:2                                      ║
  ║                                                           ║
  ║  STEP 6: MANAGE (ongoing)                                  ║
  ║  □ Move SL to breakeven after TP1                         ║
  ║  □ Trail stop loss as price moves in your favor           ║
  ║  □ Journal the trade (entry, reason, result, emotions)    ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
  </pre>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Your Next Steps as a Trader</div>
  <ol>
    <li><strong>Week 1-2:</strong> Practice identifying market structure, OBs, FVGs on demo account</li>
    <li><strong>Week 3-4:</strong> Backtest your strategy on 50+ historical trades</li>
    <li><strong>Month 2:</strong> Forward test on a demo account for 1 month</li>
    <li><strong>Month 3:</strong> Start trading with SMALL real money (risk only what you can lose)</li>
    <li><strong>Month 4-6:</strong> Review, refine, and build consistency</li>
    <li><strong>Month 6+:</strong> Scale up capital gradually as you prove profitability</li>
  </ol>
</div>

<div class="key-points">
  <div class="kp-label">🔑 Final Key Takeaways</div>
  <ul>
    <li>Combine fundamentals + technicals + SMC for the highest-probability trades</li>
    <li>Follow your checklist for EVERY trade — no shortcuts</li>
    <li>Journal everything — your journal is your most valuable learning tool</li>
    <li>Patience and discipline will separate you from the 90% that fail</li>
    <li>This is a marathon, not a sprint. Consistency > perfection.</li>
    <li>🎓 <strong>Congratulations! You've completed the Crypto Trading Masterclass!</strong></li>
  </ul>
</div>
            `
          }
        ]
      }
    ]
  }
];

// ---- BONUS SECTION ----
const BONUS_DATA = {
  title: "🎯 Bonus Sessions",
  icon: "⭐",
  description: "Extra sessions for portfolio review, Q&A, and student practice.",
  topics: [
    {
      title: "Portfolio Review Class",
      content: `
<p>In this session, review your current portfolio and trading performance. Use this checklist to evaluate your progress:</p>

<h4>Portfolio Review Checklist</h4>
<ul>
  <li>☐ What is your current portfolio allocation? (BTC %, ETH %, Alts %)</li>
  <li>☐ How has each asset performed over the last month?</li>
  <li>☐ Do you need to rebalance? (Any single asset dominating?)</li>
  <li>☐ Have you been DCA-ing consistently?</li>
  <li>☐ Review your stop losses — are they still valid?</li>
  <li>☐ Take profits on any 2-3x gainers</li>
  <li>☐ Evaluate your risk exposure (total % of capital at risk)</li>
</ul>

<div class="tip-box">
  <div class="tip-label">✅ Monthly Review Questions</div>
  <ul>
    <li>What was my best trade this month? <strong>Why did it work?</strong></li>
    <li>What was my worst trade? <strong>What went wrong?</strong></li>
    <li>Did I follow my trading plan? If not, <strong>when did I deviate?</strong></li>
    <li>What's my win rate? What's my average R:R?</li>
    <li>Am I managing emotions well? Any revenge trades?</li>
  </ul>
</div>
      `
    },
    {
      title: "Q&A Session",
      content: `
<h4>Frequently Asked Questions</h4>

<p><strong>Q: How much money do I need to start trading crypto?</strong></p>
<p>You can start with as little as <strong>$50-$100</strong> on Spot trading. For Futures, a recommended minimum is $200-$500. However, focus on learning with a demo account first before risking real money.</p>

<p><strong>Q: Is crypto trading halal/permissible?</strong></p>
<p>Spot trading (buying and holding actual crypto) is generally considered permissible by many scholars. Futures/leverage trading is more debatable — consult a knowledgeable scholar for your specific situation.</p>

<p><strong>Q: Which exchange should I use?</strong></p>
<p>For beginners: <strong>Binance</strong> (most popular globally), <strong>Bybit</strong> (great UI), or <strong>OKX</strong>. Always use reputable, regulated exchanges.</p>

<p><strong>Q: Can I trade crypto in Pakistan/India?</strong></p>
<p>Yes. Use <strong>P2P trading</strong> on Binance or Bybit to deposit/withdraw using local bank transfers, JazzCash, Easypaisa, or UPI.</p>

<p><strong>Q: How long does it take to become profitable?</strong></p>
<p>On average, <strong>6-12 months</strong> of dedicated learning and practice. Some take longer. The key is not to rush — trade the demo account until you're consistently profitable.</p>

<p><strong>Q: What's the biggest mistake beginners make?</strong></p>
<p>Using high leverage on futures before mastering spot trading. Start with <strong>spot only</strong> for at least 3-6 months.</p>
      `
    },
    {
      title: "Student Practice & Feedback",
      content: `
<h4>Practice Assignments</h4>

<div class="example-box">
  <div class="example-label">📝 Assignment 1: Market Structure</div>
  <p>Open the <strong>BTC/USDT 4H chart</strong> on TradingView. Identify and label:</p>
  <ul>
    <li>All Higher Highs (HH) and Higher Lows (HL) in the last 30 days</li>
    <li>Any Break of Structure (BOS) or Change of Character (CHoCH)</li>
    <li>Current trend direction</li>
  </ul>
</div>

<div class="example-box">
  <div class="example-label">📝 Assignment 2: SMC Zones</div>
  <p>On the <strong>BTC/USDT 1H chart</strong>, identify:</p>
  <ul>
    <li>3 Order Blocks (bullish and/or bearish)</li>
    <li>2 Fair Value Gaps</li>
    <li>Any Equal Highs or Equal Lows (liquidity pools)</li>
  </ul>
</div>

<div class="example-box">
  <div class="example-label">📝 Assignment 3: Complete Trade Plan</div>
  <p>Create a full trade setup with:</p>
  <ul>
    <li>Top-Down Analysis (Daily → 4H → 1H)</li>
    <li>Clear bias (bullish/bearish) with reasons</li>
    <li>Entry zone (OB or FVG)</li>
    <li>Stop loss placement and reason</li>
    <li>Take profit levels (TP1, TP2, TP3)</li>
    <li>Risk-Reward ratio calculation</li>
    <li>Position size calculation (1-2% risk)</li>
  </ul>
</div>

<div class="example-box">
  <div class="example-label">📝 Assignment 4: Backtesting</div>
  <p>Backtest your SMC entry model on BTC/USDT 1H chart for the last 3 months:</p>
  <ul>
    <li>Record at least 30 trades</li>
    <li>Track: Entry, SL, TP, Win/Loss, R:R</li>
    <li>Calculate your win rate and expectancy</li>
    <li>Identify patterns in your losing trades</li>
  </ul>
</div>

<div class="tip-box">
  <div class="tip-label">✅ Remember</div>
  <p>The best traders never stop learning. Make chart analysis a daily habit. Review your journal weekly. Stay humble, stay disciplined, and the results will come. <strong>Good luck on your trading journey! 🚀</strong></p>
</div>
      `
    }
  ]
};

// Make data available globally
window.COURSE_DATA = COURSE_DATA;
window.BONUS_DATA = BONUS_DATA;
