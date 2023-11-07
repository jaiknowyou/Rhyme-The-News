// Get the headline elements
const headlines = document.querySelectorAll('h1')
// for masking api key, we can fetch api key from another API
// also, We can ask users to put their own openai api key.
const apiKey = "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"

let rhymingNews = function(){
    headlines.forEach((headline) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                "prompt":`Generate creative Rhyme based on the headline: '${headline.textContent}'`,
                "model":"text-davinci-003",
                "max_tokens": 150
            })
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.')
            }
            return response.json()
        })
        .then(data => {
            headline.textContent = data.choices[0].text
        })
        .catch(error => {
            console.error('Error:', error)
        })
    })
}

setTimeout(rhymingNews, 4000)