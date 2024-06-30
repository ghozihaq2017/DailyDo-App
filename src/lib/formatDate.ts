export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const [weekday, monthDay, year] = formattedDate.split(', ');
  const [month, day] = monthDay.split(' ');

  return `${weekday}, ${day} ${month} ${year}`;
}