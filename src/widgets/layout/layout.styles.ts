import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    background: theme.colors.dark[7],
    minHeight: "100vh",
  },
  headerContainer: {
    background: theme.colors.dark[5],
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  header: {
    width: "100%",
  },
}));
