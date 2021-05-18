import moment from "moment";
export default (value: string) => {
  const date = new Date(value);
  return moment(date.toLocaleDateString(["en-US"])).format("DD MMMM YYYY");
};
