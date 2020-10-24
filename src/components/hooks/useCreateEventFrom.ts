import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import moment from "moment";
import { useState } from "react";
import {
  getCategoryOptions,
  getOrganizerOptions,
  getTypeOptions,
} from "../../utils/form";

const useCreateEventForm = () => {
  const [organizer, setOrganizer] = useState<number | string>("");
  const [type, setType] = useState<number | string>("");
  const [category, setCategory] = useState<number | string>("");
  const [locationType, setLocationType] = useState<string>("venue");
  const [startDate, setStartDate] = useState<MaterialUiPickersDate>(moment());
  const [endDate, setEndDate] = useState<MaterialUiPickersDate>(
    moment().add(3, "h")
  );
  const organizerOptions = getOrganizerOptions();
  const typeOptions = getTypeOptions();
  const categoryOptions = getCategoryOptions();

  return {
    organizer,
    type,
    category,
    locationType,
    startDate,
    endDate,
    formOptions: {
      organizer: organizerOptions,
      type: typeOptions,
      category: categoryOptions,
    },
    setOrganizer,
    setCategory,
    setLocationType,
    setType,
    setStartDate,
    setEndDate,
  };
};

export default useCreateEventForm;
