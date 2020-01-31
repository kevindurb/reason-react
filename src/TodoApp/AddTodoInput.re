
[@react.component]
let make = (~onAdd) => {
  let (value, update) = React.useState(() => "");

  let onChange = React.useCallback((event) => {
    update(event->ReactEvent.Form.target##value);
  });

  let onClickAdd = React.useCallback(_ => {
    onAdd(value);
    update(_ => "");
  });

  <>
    <input
      onChange={onChange}
      value={value}
    />
    <button
      onClick={onClickAdd}
    >
      {"Add"->ReasonReact.string}
    </button>
  </>
}
