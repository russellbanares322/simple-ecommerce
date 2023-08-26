const inputWarningMessage = (inputName: string) => {
  return <p className="text-red-600 my-1 text-xs">{inputName} is required</p>;
};

export default inputWarningMessage;
