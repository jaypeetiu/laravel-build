import React, {Suspense} from "react";
import Footer from "./Footer"
const MainLayout = ({ children, title }) => {
    return (
        <div className={`h-screen  flex flex-col overflow-hidden relative`}>
        <Suspense>
          <main
            className={`flex-1 ${
              title == "rfaf" ? "overflow-hidden" : "overflow-auto"
            }  `}
          >
            {" "}
            {children}
          </main>
        </Suspense>
        <Footer />
      </div>
    );
}

export default React.memo(MainLayout);