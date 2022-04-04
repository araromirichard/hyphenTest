import user from "@/router/middleware/user";
import auth from "@/router/middleware/auth";
import guest from "@/router/middleware/guest";

// global middleware - app-wide middleware (runs on every page)
// other middleware can be passed to router inside meta object like so meta:{ middleware: ["middlewae1", "middleware2"]}
export default {
  global: {
    user,
  },
  auth,
  guest,
};
