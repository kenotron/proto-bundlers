import React from "react";
import { Toggle } from "office-ui-fabric-react";
import { foo } from "foolib";

export default () => <Toggle onText={foo()} offText={`no ${foo()}`} />;
