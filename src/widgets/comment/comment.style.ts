import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.gray[2],
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    border: theme.colors.dark,
  },
  containerWithButton: {
    background: theme.colors.gray[2],
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    border: theme.colors.dark,
    borderBottomRightRadius: "0",
  },
  button: {
    borderTopRightRadius: "0",
    borderTopLeftRadius: "0",
  },
}));
