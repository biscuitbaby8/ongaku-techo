# 用語解説の執筆ルール

`src/data/termArticles.js` に詳しい解説を追加する作業の手順と方針。
自動運転（Routine）で継続する作業のため、毎回この文書に従う。

---

## 最優先の原則：推測を書かない

**確実でないことは書かない。情報が少ない用語は、短いままにする。**

分量を揃えることより、書かれている内容が正しいことを優先する。
1,200文字に届かないことは問題ではない。埋めるために推測を混ぜることが問題である。

### 具体的な判断

| 状況 | 対応 |
|---|---|
| 語源・記譜法・楽器の物理的性質など、確実に言えることが多い | 通常どおり書く（1,000〜1,500文字） |
| 演奏上の要点は書けるが、歴史的背景が不確か | 歴史の節を省き、演奏に絞る（600〜900文字） |
| 用語の意味は分かるが、それ以上の確実な情報がない | 導入＋1節のみ（300〜500文字）。無理に節を増やさない |
| 地域の民俗舞曲など、断片的な知識しかない | 断定できる範囲だけ書く。踊りの詳細や成立年代を推測で補わない |

### 書いてはいけないもの

- 確認できない成立年代、地名、人名
- 「〜とされる」で曖昧にごまかした推測（曖昧な言い回しでも、事実でなければ書かない）
- 特定の楽曲の何小節目に何が書かれているかという、記憶に頼った細部
- 実在するか不確かな作品名・作品番号

### 迷ったときの書き方

議論があることが確実な場合は、議論があること自体を事実として書く。

> Andantino は Andante より速いのか遅いのか、歴史的に解釈が割れている。
> ベートーヴェンは出版者への手紙で、どちらなのか教えてほしいという趣旨を書き残している。

これは「どちらが正しいか」を断定せず、争点の存在を伝えている。この形は許容される。
一方、根拠のない断定や、あいまいな伝聞の混入は避ける。

---

## データ構造

```js
export const termArticles = {
  'slug': {
    lead: '導入。誤解されやすい点を1〜2文で提示する',
    sections: [{ heading: '見出し', body: '本文' }],
    instruments: [{ name: 'ピアノ', tip: '具体的な助言' }],
    confusions: [{ term: '用語名', slug: 'スラッグ', note: '違いの説明' }],
    works: [{ title: '作品名', note: 'なぜこの曲か' }],
  },
}
```

- キーは用語ページのスラッグ（`term` を小文字にしてスペースをハイフンに）
- `sections` 以降はすべて省略可能。情報がない節は入れない
- `confusions` の `slug` は**辞典に実在する用語**でなければビルドが失敗する

## 記事の型（情報が十分ある場合）

1. **導入** — この用語で誤解されやすい点
2. **語源と本来の意味**
3. **楽譜でこの指示を見たら** — 実際の判断基準
4. **演奏のヒント** — 楽器別（ピアノ／弦楽器／管楽器など）
5. **混同しやすい用語** — 内部リンク付き
6. **この指示が使われる曲**

## 異表記・同義語の扱い（該当262語）

`Vivo`（Vivaceと同義）のように、他の用語の言い換えにあたる語は、
1,200文字書こうとすると水増しになる。**本家との違いに絞って400〜600文字**にする。

「Vivo と Vivace はどう違うのか」は演奏者が実際に持つ疑問であり、
本家ページには書かれていない情報になる。これは水増しではない。

違いが説明できない場合（本当に完全な同義語の場合）は、
同義であることと、なぜ2つの語が存在するのかだけを書いて短く終える。

---

## 作業手順

1. 未着手の用語を確認する

```bash
node -e "
Promise.all([import('./src/data/termsData.js'),import('./src/data/termArticles.js')]).then(([d,a])=>{
const has=new Set(Object.keys(a.termArticles));
const rest=d.termsData.filter(t=>!has.has(t.term.toLowerCase().replace(/\s+/g,'-')));
const byCat={}; rest.forEach(t=>byCat[t.category]=(byCat[t.category]||0)+1);
console.log('残り:', rest.length, JSON.stringify(byCat));
})"
```

2. `src/data/termArticles.js` に追記する（既存キーの直前に挿入）
3. ビルドして検証する

```bash
npm run build
```

ビルドは以下を検出したら失敗する。失敗したら必ず直す。

- `confusions` のリンク先が辞典に存在しない
- 用語のスラッグが重複している
- `CATEGORIES` に登録されていないカテゴリがある

4. 回帰テストを走らせる（UI・カメラスキャン）
5. コミットして PR を作り、マージする（1バッチ＝1PR）

## 進捗の記録

カバー率は以下で確認できる。

```bash
node -e "
Promise.all([import('./src/data/termArticles.js'),import('./src/data/termsData.js')]).then(([a,d])=>{
const ks=Object.keys(a.termArticles);
const bySlug=new Map(d.termsData.map(t=>[t.term.toLowerCase().replace(/\s+/g,'-'),t.category]));
const cnt={},all={}; d.termsData.forEach(t=>all[t.category]=(all[t.category]||0)+1);
ks.forEach(k=>{const c=bySlug.get(k)||'?';cnt[c]=(cnt[c]||0)+1;});
console.log('記事:', ks.length);
Object.entries(all).forEach(([c,n])=>console.log(' ',c,(cnt[c]||0)+'/'+n));
})"
```

## 完了条件

全1,051語に `termArticles.js` の項目があること。
完了したら Routine を停止する。
