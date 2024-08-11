import * as styled from "./.styles";
import * as config from "./config";
import Select from "../../UI/Select";
import Input from "../../UI/input/Input";
import { BoxProps, FormLabel } from "@mui/material";
import { Control, useController } from "react-hook-form";
import { monthsMockup, yearsMockup } from "../../../helpers/data/mockups";
import { disasebleDate } from "../../../helpers/functions/functions";
import { recordFromArray } from "../../../helpers/functions/functions";

const yearsOptions = recordFromArray(yearsMockup);
const monthsOptions = recordFromArray(monthsMockup);

interface IDatePicker extends BoxProps {
  name: string;
  label: string;
  disabled?: boolean;
  control: Control<any, any>;
}

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { name, control, label, disabled, ...rest } = props;
  const { field, formState } = useController({
    name,
    control,
    defaultValue: new Date(),
  });

  const isError = !!formState.errors[name]?.message;

  function changeDateHandler(dateInput: config.DateInput) {
    const data = { ...disasebleDate(field.value), ...dateInput };
    const newDate = new Date(data.year, data.month, data.day);
    field.onChange(newDate);
  }

  return (
    <>
      <FormLabel error={isError} sx={{ mt: 3 }}>
        {label}
      </FormLabel>

      <styled.DateBox {...rest}>
        <Input
          label="Day"
          type="number"
          error={isError}
          disabled={disabled}
          value={field.value?.getDate()}
          onChange={(e) => changeDateHandler({ day: +e.target.value })}
        />

        <Select
          label="Month"
          error={isError}
          disabled={disabled}
          options={monthsOptions}
          value={monthsMockup[field.value?.getMonth()]}
          onChange={(e) => {
            changeDateHandler({
              month: monthsMockup.findIndex((v) => v === e.target.value),
            });
          }}
        />

        <Select
          label="Year"
          error={isError}
          disabled={disabled}
          options={yearsOptions}
          value={field.value?.getFullYear()}
          onChange={(e) => changeDateHandler({ year: +e.target.value })}
        />
      </styled.DateBox>
    </>
  );
};

export default DatePicker;
