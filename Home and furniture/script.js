function test(){
    alert("Are you sure you want to remove this item?")
}
/*
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add' :'remove'](darkTheme)
    themeButton.classList[selectedIcon==='bx-toggle-left' ? 'add' :'remove'](iconTheme)
}
themeButton.addEventListener('click',()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'
*/
var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('active')
    content.classList.toggle('night')
})
