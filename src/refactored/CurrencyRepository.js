function CurrencyRepository() {
}

CurrencyRepository.prototype.getAll = function () {
	return [
		{
			name: "NZD",
			value: 1,
		}, {
			name: "USD",
			value: .76,
		}, {
			name: "EUD",
			value: .67,
		}
	];
}