const shareBox = document.querySelector('.ds')
const sbut = document.querySelector('.sha')

sbut.addEventListener('click', () => {
    sbut.classList.add("act")
    shareBox.classList.remove("dsc")

    dbut()
})

