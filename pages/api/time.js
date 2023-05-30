export default function Time(req, res) {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();

  res
    .status(200)
    .json(year + "/" + month + "/" + day + " " + hour + "시 " + minute + "분");
}
