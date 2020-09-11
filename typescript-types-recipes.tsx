// --- Using typeof 
// Can be updated to create type based on the keys (properties) of another type.
interface State {
    name: string;
    address: string;
};

function updateState(state: State, prop: {propName: keyof State, value: any}): State {
    return {...state, ...{[prop.propName]: prop.value}};
}

const s: State = { name: "Gopi", address: "chennai" };
console.log(updateState(s, {propName: "name", value: "Raj"}));
