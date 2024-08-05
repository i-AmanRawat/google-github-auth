import { cache } from "react";

import { auth } from "@/auth";

export default cache(auth);
//rather then making session request to db multiple times just simply fetch it once every request and cache it
//reason behind not using unstable_cache func procided by next. bcz it cache beyond multiple server request and dont want that
