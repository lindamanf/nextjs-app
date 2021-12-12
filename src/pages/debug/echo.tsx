import { VFC } from "react";
import { EchoContainer } from "../../components/debug/echo_container";
import Layout from "../../components/templates/layout";

const DebugEcho: VFC = () => {
  return (
    <Layout>
      <EchoContainer />
    </Layout>
  )
}

export default DebugEcho;
