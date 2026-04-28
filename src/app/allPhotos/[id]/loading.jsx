// "use client";

// import {Button, Spinner} from "@heroui/react";
// import React from "react";

// export function Loading() {
//   return (
//     <Button isPending>
//       {({isPending}) => (
//         <>
//           {isPending ? <Spinner color="current" size="sm" /> : null}
//           Uploading...
//         </>
//       )}
//     </Button>
//   );
// }
 "use client";
import { Button, Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <Button isPending>
            {({ isPending }) => (
                <>
                    {isPending ? <Spinner color="current" size="sm" /> : null}
                    Uploading...
                </>
            )}
        </Button>
    );
};

export default loading;