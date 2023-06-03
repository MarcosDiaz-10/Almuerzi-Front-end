
import { AlmuerziProvider } from "./context/AlmuerziProvider"
import { AppRouter } from "./router/AppRouter"


export const AlmuerziApp = () => {
  return (
    <>
      <AlmuerziProvider>
        <AppRouter />
      </AlmuerziProvider>
    </>
  )
}
