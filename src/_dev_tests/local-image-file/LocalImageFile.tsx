import * as styled from "./styles";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { useRef } from "react";

const LocalImageFile = () => {
  const formElRef = useRef<HTMLFormElement>(null);

  function onSaveImage(e: React.FormEvent<HTMLDivElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formElRef.current!).entries());
    const { photo } = data;

    const reader = new FileReader();
  }

  return (
    <styled.Wraper component="form" onSubmit={onSaveImage} ref={formElRef}>
      <Input type="file" name="photo" />

      <styled.Actions>
        <Button
          type="submit"
          color="secondary"
          text="Save Image File Locally"
        />
        <Button text="Load Local Image File " />
      </styled.Actions>
    </styled.Wraper>
  );
};

export default LocalImageFile;
