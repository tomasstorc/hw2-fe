type ClockProps = {
  dateState: Date;
};

function Clock({ dateState }: ClockProps) {
  return (
    <div className="clock">
      {dateState.toLocaleString("cs-CZ", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </div>
  );
}

export default Clock;
