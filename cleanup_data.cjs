const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/termsData.js');
let content = fs.readFileSync(filePath, 'utf8');

const match = content.match(/export const termsData = (\[[\s\S]*?\]);/);
if (!match) {
    console.error("Could not find termsData array");
    process.exit(1);
}

// evalを使わず、簡易的にパースを試みる（ファイルが巨大なので注意）
// 実際にはevalの方が確実だが、ここではNodeのVMモジュールや、簡易的なJSON変換を検討。
// 単純にユニーク化するだけなら、行ごとの処理も考慮。
// ここでは安全に eval 的なことを Node の Sandbox で行うか、単純に termsData をインポートして出力し直す。
// 今回は単純な require を利用する。

try {
    const terms = eval(match[1]);
    console.log(`Initial count: ${terms.length}`);

    const uniqueMap = new Map();
    terms.forEach(item => {
        const key = item.term.toLowerCase();
        if (!uniqueMap.has(key)) {
            uniqueMap.set(key, item);
        }
    });

    const uniqueTerms = Array.from(uniqueMap.values()).map((item, index) => ({
        ...item,
        id: index + 1
    }));

    console.log(`Unique count: ${uniqueTerms.length}`);

    const newArrayString = JSON.stringify(uniqueTerms, null, 2);
    const newContent = content.replace(/export const termsData = \[[\s\S]*?\];/, `export const termsData = ${newArrayString};`);

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log("Success.");
} catch (e) {
    console.error("Error processing data:", e);
}
