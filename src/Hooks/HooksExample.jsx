import UseStateHookExample from "./UseStateHookExample";
import UserStateHookExample2 from "./UseStateHookExample2";
import UseEffectHookExample from "./UseEffectHookExample";
import WithoutContext from "./WithoutContext";

const HooksExample = () => {
    return (<div>
        <h1>Hooks Example</h1>
        <WithoutContext />
        <UseEffectHookExample />
        <UserStateHookExample2 />
    </div>);
}

export default HooksExample;