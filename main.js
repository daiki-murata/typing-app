// pタグの取得
let p = document.getElementById('text')

// 問題文の出題
let textLists = [
    'Hello World',
    'This is my pen',
    'How are you?',
    'Hello Hello'
]

// １問の中の１文字１文字
let checkTexts = []

// 関数の実行
createText()

// １文字１文字を判定
function createText() {
    // 問題をランダムに出題
    let rnd = Math.floor(Math.random() * textLists.length)

    // １問打ち終わったら次の問題に移る
    p.textContent = ''
    // 問題文を１文字ずつに分割
    checkTexts = textLists[rnd].split('').map(function (value) {
        let span = document.createElement('span')
        span.textContent = value //value(分割された文字)をspanの文章に代入
        p.appendChild(span)

        return span
    })
}

// 何を打ったのかを判定
document.addEventListener ('keydown', keyDown) 

// 打った文字を判定した時に起こるイベント
function keyDown(e) { //eはeventを引数としている
     //keyは何を入力したか
    // 打った文字と問題文が一致した時にcssのadd-blueを実行
    if(e.key === checkTexts[0].textContent){
        checkTexts[0].className = 'add-blue'

        checkTexts.shift() //配列から最初の要素を取り除き、その要素を返します。この場合は0番目が次の文字に変わる。

        // shift仕切って空になった時にcreateText()を実行
        if(!checkTexts.length) {
            createText()
        }
    }
}

