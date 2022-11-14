import("./index.css");
// console.log(1111);

// const URL = 'https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&cache=false&le=en'
const URL = 'http://localhost:8080/suggest'

window.onload = () => {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    const mouseUp = (elm) => {
        console.log(window.getSelection().toString());
        const key = window.getSelection().toString()
        // axios.get(URL, {
        //     params: {
        //         q: key
        //     }
        // }).then((res => {
        //     console.log(res);
        // }))

        div.innerHTML = key

        body.appendChild(div)

        const divProperty = div.getBoundingClientRect()
        console.log(divProperty);



        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
        setTimeout(() => {
            body.removeChild(div)
        }, 2000)
    }

    const mouseMove = () => {
        document.addEventListener('mouseup', mouseUp)
    }

    document.addEventListener('mousedown', (event) => {

        console.log(event);
        // console.log(div.style.height);

        div.style.left = event.pageX + 'px'
        div.style.top = event.pageY - 40 + 'px'
        div.className = 'box'
        document.addEventListener('mousemove', mouseMove)

    })
}
