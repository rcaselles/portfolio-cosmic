const DateContainer = ({ dateString }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return <span>{new Date(Date.parse(dateString)).toLocaleDateString("en-US", options)}</span>
}
export default DateContainer
