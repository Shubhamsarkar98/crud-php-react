import moment from "moment"


export const currentDate = () => {
    return moment().format("YYYY");
  };