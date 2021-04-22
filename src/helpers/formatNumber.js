export default function formatNumber (number) {
  return new Intl.NumberFormat('ru-RU').format(number)
}