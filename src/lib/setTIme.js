import moment from "moment";

export default function SetTime() {
  return moment().utcOffset(9).format("YYYY/M/D HH:mm:ss");
}
