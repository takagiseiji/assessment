'use strict';
const userNameInput = document.getElementById('User-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.addEventListener(
  'click',
  () => { //無名巻子でアロー関数　イベントを検知したら実行される
        const userName = userNameInput.value; //入力欄の値を取得
        if(userName.length===0){ //入力が空だったら
            //名前が空の時は処理を終了する
            return;
        }

    //診断結果表示エリアの作成
    //resultDivision.innerText = ''; //divタグを空文字で上書きすることで、空にする
    //以下もdivタグの削除の手段の一つで子要素追加だから子要素を消す方法
    //resultDivisionに子要素があれば削除し続ける
    while(resultDivision.firstChild){ //resultDivision子要素配列の先頭に子要素があったら実行(ある限り)
        resultDivision.removeChild(resultDivision.firstChild) //一番上にある子要素を削除
    }
    //tweetDivisionに子要素があれば削除し続ける
    while(tweetDivision.firstChild){ //tweetDivision子要素配列の先頭に子要素があったら実行
        tweetDivision.removeChild(tweetDivision.firstChild); //一番上にある子要素を削除
    }

    const header = document.createElement('h3'); //h3タグの作成
    header.innerText = '診断結果'; //タグの内側のテキストを設定
    resultDivision.appendChild(header); //divタグの子要素としてh3タグ追加
    

    const paragraph = document.createElement('p'); //pタグの作成
    const result = assessment(userName) //診断結果を作成
    paragraph.innerText = result; //pタグの内側のテキストを設定
    resultDivision.appendChild(paragraph); //divタグの子要素としてpタグ追加

    console.log(assessment(userName)); //ログ出力をして確認



    // TODO 診断結果表示エリアの作成
    // TODO ツイートエリアの作成
  }
);

const answers = [
    '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
    '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
    '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
    '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
    '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
    '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
    '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
    '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
    '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
    '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
    '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
    '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
    '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
    '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
    '###userName###のいいところはそのすべてです。ありのままの###userName###自身がいいところなのです。',
    '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'
]

/** 
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
*/
function assessment(userName){
    //全文字のコード番号を取得して足し合わせる
    let sum0fCharCode = 0; //文字コードの合計を取っておく変数
    for(let i = 0; i < userName.length; i++){ //文字数回ループ
        sum0fCharCode = sum0fCharCode + userName.charCodeAt(i); //合計を計算
        //sum0fCharCode += userName.charCodeAt(i); //こっちでも動く
    }

    //文字のコード番号の合計を回答の数で割って添え字数値を求める
    const index = sum0fCharCode % answers.length;
    let result = answers[index];

    //##userName##をユーザーの名前に置き換える
    result = result.replaceAll('###userName###', userName);

    return result;
}


//テスト関数
function test(){
    console.log('診断結果の文章のテスト');

    //太郎
    console.log('太郎');
    console.assert(assessment('太郎') === 
    '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'); //名前が適切に埋め込まれているかの確認

    //次郎
    console.log('次郎');
    console.assert(
        assessment('次郎') ===
        '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。');

    //花子
    console.log('花子');
    console.assert(
        assessment('花子') ===
        '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );
    
    console.log('診断結果の文章のテスト終了');
    
  console.log('同じ名前なら、同じ結果を出力することのテスト');
 // ここにテストを追加
 console.assert('太郎')===assessment('太郎') //userNameが同じかの確認
  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
};
test();