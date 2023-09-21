// make promo appear once in a week.
export function isOneWeekSinceThen(blockedAt) {

  let then = new Date(blockedAt);
  let now = new Date();

  console.log("blockedAt:", then);
  console.log("now:", now);

  let dayToMs = 1000 * 60 * 60 * 24;
  
  let thenTimestamp = then.getTime();  
  let nowTimestamp = now.getTime();

  return thenTimestamp + (dayToMs * 7) < nowTimestamp;
}