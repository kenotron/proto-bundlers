import React from "react";
// import { PrimaryButton } from "office-ui-fabric-react";
import { foo } from "foolib";

import("./lazy").then(m => console.log(m.lazy()));

export default () => <div>hello {foo()}</div>;
