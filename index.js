// 入力フォーム内の文字数カウント処理の流れ
// 1.入力フォームのDOMの取得
// 2.フォーム内の文字数のカウント
// 3.カウント数を反映

window.addEventListener('DOMContentLoaded', function () {
        // textareaのDOMを取得
        var textareaNode = document.getElementById('count-text');

        textareaNode.addEventListener('keyup', function () {

            // 文字数をカウント
            var count = this.value.length;

            var counterNode = document.querySelector('.show-count-text');

            changeColorText(count, counterNode);
            validation(count, counterNode);

            // カウント数を対象DOMへ反映
            counterNode.innerText = count;
        }, false)
    }, false
);

// 文字数によって文字色を変更
function changeColorText(count, counterNode) {
    // 文字数によって文字色を変更
    if (count >= 50 && count < 100) {
        counterNode.classList.remove('text-red');
        counterNode.classList.add('text-orange')
    } else if (count >= 100 && count <= 200) {
        counterNode.classList.remove('text-orange');
        counterNode.classList.add('text-red');
    } else {
        counterNode.classList.remove('text-red');
        counterNode.classList.remove('text-orange')
    }
}

function validation(count) {

    var submitNode = document.querySelector('.submit');
    // 文字数によって、フォームの送信を制御する
    if (count < 1 || count > 200) {
        submitNode.disabled = true;
    } else if (count >= 1 || count <= 200 && submitNode.disabled === true) {
        submitNode.disabled = false;
    }
}

