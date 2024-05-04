import { useState, forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomSnackBar = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = useCallback(() => {
      setExpanded((oldExpanded) => !oldExpanded);
    }, []);

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref}>
        <Card style={{ backgroundColor: "#fddc6c" }}>
          <CardActions>
            <Typography variant="body2">{props.message}</Typography>
            <div>
              <IconButton aria-label="Show more" size="small" onClick={handleExpandClick}>
                <ExpandMoreIcon />
              </IconButton>
              <IconButton size="small" onClick={handleDismiss}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Paper>
              <Typography
                gutterBottom
                variant="caption"
                style={{ color: "#000", display: "block" }}
              >
                PDF ready
              </Typography>
              <Button size="small" color="primary">
                <CheckCircleIcon />
                Download now
              </Button>
            </Paper>
          </Collapse>
        </Card>
      </SnackbarContent>
    );
  }
);

CustomSnackBar.displayName = "CustomSnackBar";

export default CustomSnackBar;
