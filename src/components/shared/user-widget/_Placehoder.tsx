import { Avatar, CardProps, Skeleton, Typography } from "@mui/material";
import * as styled from "./styles";

interface ISkeleton extends CardProps {
  uid: string;
  isLoading: boolean;
}

const UserWidgetPlaceholder: React.FC<ISkeleton> = (props) => {
  const { isLoading, uid, ...rest } = props;

  return (
    <styled.Container {...rest} elevation={10}>
      {isLoading ? <Skeleton /> : <Avatar />}

      <styled.Info>
        {isLoading ? <Skeleton /> : <Typography>{uid}</Typography>}
      </styled.Info>

      <styled.Records>
        <Skeleton />
      </styled.Records>

      <styled.Actions elevation={5}>
        <Skeleton />
      </styled.Actions>
    </styled.Container>
  );
};

export default UserWidgetPlaceholder;
