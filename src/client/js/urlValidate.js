const urlReg = /^(https:\/\/www\.|http:\/\/www\.|www\.)[a-zA-Z0-9\-_$]+\.[a-zA-Z]{0,5}$/

const urlTest = (value) => {
    if (value.match(urlReg) === null) {
        return null
    } else {
        return value
    }
}

export function urlValidate(value) {
    const invalidMsg = document.querySelector('.invalid')

    if (value.match(urlReg) === null) {
        invalidMsg.style.display = 'block'
    } else {
        invalidMsg.style.display = 'none'
    }
    return urlTest(value)
}

export { urlTest }