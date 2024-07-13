//анимация селектора

document.addEventListener('DOMContentLoaded', function () {
	const dropdownButton = document.getElementById('dropdown-button')
	const dropdownMenu = document.getElementById('variant')
	const dropdownItems = document.querySelectorAll('.dropdown-item')

	dropdownButton.addEventListener('click', function () {
		dropdownMenu.style.display =
			dropdownMenu.style.display === 'block' ? 'none' : 'block'
	})

	dropdownItems.forEach(item => {
		item.addEventListener('click', function () {
			dropdownButton.textContent = this.textContent
			dropdownButton.setAttribute('value', this.getAttribute('value'))
			dropdownMenu.style.display = 'none'
			dropdownItems.forEach(i => i.classList.remove('selected'))
			this.classList.add('selected')
		})
	})

	document.addEventListener('click', function (event) {
		if (
			!dropdownButton.contains(event.target) &&
			!dropdownMenu.contains(event.target)
		) {
			dropdownMenu.style.display = 'none'
		}
	})
})

//обработчик события с селектором 
        let selectedVariant

				document.querySelectorAll('.dropdown-item').forEach(function (element) {
					element.addEventListener('click', function () {
						document.querySelectorAll('.dropdown-item').forEach(function (el) {
							el.classList.remove('selected')
						})
						this.classList.add('selected')
						selectedVariant = parseInt(this.getAttribute('data-value'))
					})
				})

				document
					.getElementById('calculateButton')
					.addEventListener('click', function () {
						if (selectedVariant !== undefined) {
							calculate(selectedVariant)
						} else {
							alert('Пожалуйста, выберите элемент из выпадающего списка.')
						}
					})

function calculate(selectedVariant) {
    //константы для кальклятора
	const param1 = parseFloat(document.getElementById('param1').value) || 0
	const param2 = parseFloat(document.getElementById('param2').value) || 0
	const param3 = parseFloat(document.getElementById('param3').value) || 0
	const param4 = parseFloat(document.getElementById('param4').value) || 0
	const param5 = parseFloat(document.getElementById('param5').value) || 0
	const add5percent = document.getElementById('add5percent').checked

	let param
	switch (selectedVariant) {
		case 1:
			param = 0.1 // Пример значения для варианта 1
			break
		case 2:
			param = 0.2 // Пример значения для варианта 2
			break
		case 3:
			param = 0.3 // Пример значения для варианта 3
			break
		default:
			param = 1
	}

//расчет для кальулятора

    const step1 = ((param1 + param2) * 2) * param3
    const step2 = param4 + param5
    const step3 = (step1 - step2) 
    let result = Math.round(step3 / 0.18)
    const step4 = (step3 / 0.18)
    const step11 = (1 / (0.18 * param))
    let step12 = step4 / step11
    let result2 = Math.ceil(step12)
//если используется +5% то это
	if (add5percent) {
								result = Math.round(result * 1.05)
								step12 = Math.ceil(result2 * 1.05)
						}
    
//вывод результата в result в html
    document.getElementById('result').innerText = result + ' шт'
    document.getElementById('result2').innerText = result2 + ' пдн'
}


