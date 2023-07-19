export function dateFormatter(date) {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const dateObj = new Date(date)

  const day = dateObj.getUTCDate()
  const month = months[dateObj.getUTCMonth()]
  const year = dateObj.getUTCFullYear()

  const formattedDate = `${day} ${month} ${year}`

  return formattedDate
}
