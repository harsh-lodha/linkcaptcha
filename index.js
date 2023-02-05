let mylinks = []
const inputEl = document.getElementById('input-el')
const saveEl = document.getElementById('save-el')
const delEl = document.getElementById('del-el')
const addEl = document.getElementById('add-el')

const linksStorage = JSON.parse(localStorage.getItem('mylinks'))
const results = document.getElementById('results')

if (linksStorage) {
    mylinks = linksStorage
    render(mylinks)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    results.innerHTML = listItems
}

addEl.addEventListener('click',function() {
    chrome.tabs.query({active: true , currentWindow : true}, function(tabs){
        mylinks.push(tabs[0].url)
        localStorage.setItem("mylinks", JSON.stringify(mylinks) )
        render(mylinks)
    })
})

delEl.addEventListener('dblclick',function(){
    localStorage.clear()
    mylinks = []
    render(mylinks)

})

saveEl.addEventListener('click', function () {
    mylinks.push(inputEl.value)
    console.log(mylinks)
    inputEl.value = ''
    render(mylinks)
    localStorage.setItem("mylinks",JSON.stringify(mylinks))
})

// addEl.addEventListener('click',function() {
//     chro
// })