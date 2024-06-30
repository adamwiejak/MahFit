import React, { useState, useEffect, useCallback } from "react";
import styled from "./styles";
import useAsyncTask from "../../../hooks/useAsyncTask";
import Button from "../../UI/button/Button";
import Spinner from "../../shared/spinner/Spinner";

type Button = { onClick?: () => any | Promise<any>; text?: string };

export interface IMessage {
  onClose: () => void;
  header: string;
  paragraphs: (string | JSX.Element)[];
  confirmBtn?: Button;
  cancelBtn?: Button;
}

const Message: React.FC<IMessage> = (props) => {
  const { header, paragraphs, confirmBtn, cancelBtn, onClose } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTask();
  const [time, setTime] = useState(5);

  const submitHandler = useCallback(async () => {
    const submit = confirmBtn?.onClick;
    // if (submit) await asyncTaskHandler(submit);
    onClose();
  }, []);

  const cancelHandler = useCallback(async () => {
    const cancel = cancelBtn?.onClick;
    // if (cancel) await asyncTaskHandler(cancel);
    onClose();
  }, []);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setTimeout(() => setTime((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      <styled.DialogTitle>{header}</styled.DialogTitle>

      <styled.DialogContent dividers>
        {paragraphs.map((p, idx) => (
          <styled.DialogContentText key={idx}>{p}</styled.DialogContentText>
        ))}
      </styled.DialogContent>

      <styled.DialogActions onDoubleClick={() => setTime(0)}>
        {cancelBtn && (
          <Button text={cancelBtn.text || "Cancel"} onClick={cancelHandler} />
        )}

        <Button
          onClick={submitHandler}
          disabled={isLoading || !!time}
          text={` ${confirmBtn?.text || "Submit"} ${
            time > 0 ? `(${time})` : ""
          }`}
        />

        <Spinner open={isLoading} size="10%" />
      </styled.DialogActions>
    </>
  );
};

export default Message;
