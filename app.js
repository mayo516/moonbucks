function App () {
    //form태그가 자동으로 전동되는걸 막아준다. 
    document.querySelector("#espresso-menu-form").addEventListener("submit", (e)=> {
        e.preventDefault();
    })

    //메뉴의 이름을 입력 받는 건
    document.querySelector("#espresso-menu-name").addEventListener("keypress", (e)=> {
        if(e.key ==="Enter") {
            console.log(document.querySelector("#espresso-menu-name").value);
        }
    })

}

App ()