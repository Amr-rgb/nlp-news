const agreement = document.querySelector('.agreement')
const confidence = document.querySelector('.confidence')
const irony = document.querySelector('.irony')
const scoreTag = document.querySelector('.score-tag')
const subjectivity = document.querySelector('.subjectivity')

const resultsDiv = document.querySelector('.results')
const resultsHead = document.querySelector('.results-section h2')
const submitBtn = document.getElementById('submitBtn')

const post = (url = '', data = {}) => {
    fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            resultsDiv.style.display = 'block'
            resultsHead.textContent = 'Form Results:'
            submitBtn.disabled = false

            agreement.textContent = res.agreement
            confidence.textContent = res.confidence
            irony.textContent = res.irony
            scoreTag.textContent = res.score_tag
            subjectivity.textContent = res.subjectivity
        })
        .catch(err => {
            console.log('error', err)
            resultsHead.textContent = 'error, please try again.'
            submitBtn.disabled = false
        })
}

export const formSubmit = (e) => {
    e.preventDefault()

    const value = document.getElementById('url').value
    const url = Client.urlValidate(value)

    if (url) {
        submitBtn.disabled = true
        resultsHead.textContent = 'loading'

        post('http://localhost:3000/add-url', { url: url })
    }
}