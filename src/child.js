function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        name is {name}, {age}years old.
      </p>
    </div>
  );
}

export default ChildComponent;
  