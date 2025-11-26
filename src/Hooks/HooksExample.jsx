import UseStateHookExample from "./UseStateHookExample";
import UserStateHookExample2 from "./UseStateHookExample2";
import UseEffectHookExample from "./UseEffectHookExample";
import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";
import ControlledExample from "./ControlledExample";
import UnControlledExample from "./UnControlledExample";
import UseReducerHookExample from "./UseReducerHookExample";

const HooksExample = () => {
    return (<div>
        <h1>Hooks Example</h1>
        <UseReducerHookExample />
        <UnControlledExample />
        <ControlledExample />
        <WithContext />
        <WithoutContext />
        <UseEffectHookExample />
        <UserStateHookExample2 />
    </div>);
}

export default HooksExample;