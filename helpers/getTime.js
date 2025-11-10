
//------------fallback in case there's an API problem ------------
const date = new Date();

// convert to milliseconds, add local time zone offset and get UTC time in milliseconds
const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

// time offset for New Zealand is +12
const timeOffset = 12;

// create new Date object for a different timezone using supplied its GMT offset.
//doesnt account for daylight savings
export const NewZealandTime = new Date(
  (date.getTime() + date.getTimezoneOffset() * 60000) + 3600000 * 12
).toLocaleString("en-NZ");


