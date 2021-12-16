function Button({ onClick, type = 'button', buttonError, children }) {

  return (
    <button
      style={{
        borderRadius: "8px",
        backgroundColor: buttonError ? 'red' : "transparent",
        padding: "0px 20px",
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
