export class Helpers {
  private months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  public constructor() {}
  public getFullMonthDate(dateObj: Date): string {
    return this.months[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
  }

  public getStandardTime(dateObj: Date): string {
    let hours = dateObj.getHours();
    let period = "A.M.";
    if (hours > 12) {
      hours -= 12;
      period = "P.M.";
    }

    let minutes = dateObj.getMinutes().toString();
    if (dateObj.getMinutes() < 10) {
      minutes = "0" + minutes;
    }
    return hours + ":" + minutes + " " + period;
  }
}
