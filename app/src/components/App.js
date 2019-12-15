import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import { foo } from "foolib";

export default () => <PrimaryButton>hello {foo()}</PrimaryButton>;
