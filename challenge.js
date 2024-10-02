const dailyRevenue = [
    0, 1500, 0, 3200, 1000, 0, 2300, 3400, 0, 0, 2100, 1800, 500, 0, 4000
]

const daysWithRevenue = dailyRevenue.filter(revenue => revenue > 0)

const lowestRevenue = Math.min(...daysWithRevenue)
const highestRevenue = Math.max(...daysWithRevenue)

const totalRevenue = daysWithRevenue.reduce((acc, curr) => acc + curr, 0)
const annualAverage = totalRevenue / daysWithRevenue.length

const daysAboveAverage = daysWithRevenue.filter(revenue => revenue > annualAverage).length

console.log("Menor faturamento:", lowestRevenue)
console.log("Maior faturamento:", highestRevenue)
console.log("Número de dias com faturamento superior à média anual:", daysAboveAverage)