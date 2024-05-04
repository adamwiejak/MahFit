declare module "@mui/material/styles" {
  interface Duration {
    test: number;
    long: number;
    longest: number;
    longer: number;
  }
}

export const transitions = {
  duration: {
    shortest: 100,
    shorter: 180,
    short: 300,
    standard: 350,
    complex: 400,
    long: 450,
    longer: 650,
    longest: 800,
    test: 5000,
  },
  easing: {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
};
