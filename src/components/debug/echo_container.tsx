import { useState, VFC } from "react";
import { DebugApi } from "../../lib/api/debug";
import { EchoPresenter } from "./echo_presenter";

export const EchoContainer: VFC = () => {
  const [echo, setEcho] = useState('')

  const doEcho = (value: string) => {
    DebugApi.debugEcho(value).then(res => setEcho(res.data.value))
  }

  return <EchoPresenter text={echo} doEcho={doEcho} />
}

