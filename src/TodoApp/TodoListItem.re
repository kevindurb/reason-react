type todo = {
  id: int,
  description: string,
  complete: bool,
};

[@react.component]
let make = (~item: todo, ~onDone) => {
  let onClickDone = React.useCallback(_ => {
    onDone(item.id);
  });

  <div>
    {item.description->ReasonReact.string}
    <button onClick={onClickDone} disabled={item.complete}>{"Done"->ReasonReact.string}</button>
  </div>
}
