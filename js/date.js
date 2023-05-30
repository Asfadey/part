function updateText() {
	var monthSelect = document.getElementById("month-select");
	var selectedMonth = monthSelect.value;
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var text = getMonthText(selectedMonth) + " " + currentDate.getDate() + "-" + year;
	document.getElementById("date-text").textContent = text;
}

function getMonthText(month) {
	var monthNames = [
		"Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
		"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
	];
	return monthNames[month - 1];
}

// Получаем текущую дату и месяц
var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;

// Устанавливаем выбранный месяц в теге select
var monthSelect = document.getElementById("month-select");
monthSelect.selectedIndex = currentMonth - 1;

// Обновляем текст на сайте для текущей даты
updateText();